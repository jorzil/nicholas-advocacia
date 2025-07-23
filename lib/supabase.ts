import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for interacting with your database
// This client is for server-side operations (API routes, server components)
// and uses the service role key for full permissions.
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error("Missing Supabase URL or Service Role Key environment variables.")
}

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

// You might also want a client for client-side operations (e.g., for authentication)
// This client uses the anon key and is safe to expose to the browser.
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseAnonKey) {
  // This check is only for the client-side client, if you decide to use it.
  // For server-side, the service role key is sufficient.
  console.warn("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set. Client-side Supabase features might be limited.")
}

// This client is for client-side usage (e.g., in AuthProvider or other client components)
// It should use the NEXT_PUBLIC_SUPABASE_ANON_KEY
export const createClientComponentClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables for client-side client.",
    )
  }
  return createClient(supabaseUrl, supabaseAnonKey)
}
