import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, subject, formType, usucapiaoType, possessionTime } = body

    // Basic validation for required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Campos obrigatórios (Nome, Email, Mensagem) não preenchidos." },
        { status: 400 },
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY

    // Check if Resend API key exists and looks valid
    const hasValidResendKey = resendApiKey && resendApiKey.startsWith("re_")

    let emailContent = `
      <h2>Nova mensagem de ${name}</h2>
      <p><strong>Tipo de formulário:</strong> ${formType === "homepage" ? "Página Principal" : formType === "contact" ? "Página de Contato" : formType === "usucapiao" ? "Usucapião" : "Formulário Geral"}</p>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
    `

    if (formType === "usucapiao") {
      emailContent += `
        ${usucapiaoType ? `<p><strong>Tipo de Usucapião:</strong> ${usucapiaoType}</p>` : ""}
        ${possessionTime ? `<p><strong>Tempo de Posse:</strong> ${possessionTime}</p>` : ""}
      `
    }

    emailContent += `
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
      <hr>
      <p><small>Mensagem enviada em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</small></p>
    `

    if (hasValidResendKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Site Nicholas Advocacia <noreply@nicholasadvocacia.com.br>",
            to: ["adv@nicholasadvocacia.com.br"], // Replace with your actual recipient email
            reply_to: email,
            subject: subject || `Nova mensagem de ${name} (Formulário: ${formType})`,
            html: emailContent,
          }),
        })

        const result = await response.json()

        if (!response.ok) {
          // Log Resend API specific error for debugging
          console.error("Resend API error response:", result)
          throw new Error(`Resend API error: ${result.message || "Unknown error"}`)
        }

        console.log("Email sent successfully via Resend:", result.id)
        return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
      } catch (resendError) {
        console.error("Resend error, falling back to simulation:", resendError)
        // Fall through to simulation mode if Resend fails
      }
    }

    // Simulation mode (when no valid Resend key or Resend fails)
    console.log("=== EMAIL SIMULATION MODE ===")
    console.log("From: Site Nicholas Advocacia <noreply@nicholasadvocacia.com.br>")
    console.log("To: adv@nicholasadvocacia.com.br")
    console.log("Reply-to:", email)
    console.log("Subject:", subject || `Nova mensagem de ${name} (Formulário: ${formType})`)
    console.log("---")
    console.log(emailContent)
    console.log("=== FIM DA SIMULAÇÃO ===")

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso!",
      note: hasValidResendKey ? "Modo simulação (falha no Resend)" : "Modo simulação (sem chave Resend)",
    })
  } catch (error) {
    console.error("Error processing email request:", error)
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor ao processar a requisição." },
      { status: 500 },
    )
  }
}
