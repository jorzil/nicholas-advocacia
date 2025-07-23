import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"

// Ensure environment variables are loaded
// In a real Next.js app, these would be available via process.env
// For a standalone script, you might need a .env file or direct assignment
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error("Erro: Variáveis de ambiente SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY devem estar definidas.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

async function createBlogTable() {
  try {
    const sqlFilePath = path.join(process.cwd(), "scripts", "create-blog-table.sql")
    const sql = fs.readFileSync(sqlFilePath, "utf8")

    // Execute the SQL script
    const { data, error } = await supabase.rpc("execute_sql", { sql_query: sql })

    if (error) {
      console.error("Erro ao executar script SQL:", error)
      // Check for specific error if the function 'execute_sql' doesn't exist or is not allowed
      if (error.message.includes("function execute_sql(sql_query text) does not exist")) {
        console.warn(
          "Atenção: A função `execute_sql` pode não estar disponível ou permitida para o seu usuário Supabase. Você pode precisar executar o SQL manualmente no SQL Editor do Supabase Studio.",
        )
        console.warn("SQL a ser executado manualmente:")
        console.warn(sql)
      }
      process.exit(1)
    }

    console.log("Tabela blog_posts criada e dados iniciais semeados com sucesso (se a tabela estava vazia)!")
    console.log("Resposta do Supabase:", data)
  } catch (err) {
    console.error("Erro inesperado:", err)
    process.exit(1)
  }
}

createBlogTable()
