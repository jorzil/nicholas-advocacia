import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Breadcrumb } from "@/components/breadcrumb"
import { BlogSidebar } from "@/components/blog-sidebar"
import { calculateReadTime, formatDate, generateExcerpt } from "@/lib/utils"

export const metadata = {
  title: "Blog - Nicholas Advocacia",
  description:
    "Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado e proteger seus direitos.",
  keywords: "blog jurídico, direito imobiliário, artigos, notícias, usucapião, contratos, regularização de imóveis",
  openGraph: {
    title: "Blog - Nicholas Advocacia",
    description:
      "Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado e proteger seus direitos.",
    url: "https://www.nicholasadvocacia.com.br/blog",
  },
}

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  author: string
  publishedAt: string
  tags: string[]
  featuredImage: string
  status: "published" | "draft"
  excerpt?: string // Make excerpt optional as it can be generated
}

// Mock data for blog posts - replace with actual data fetching from your API or CMS
const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Usucapião Extrajudicial: Como Regularizar seu Imóvel em Metade do Tempo",
    slug: "usucapiao-extrajudicial-como-regularizar-imovel",
    content: `
      <h2>Introdução</h2>
      <p>A usucapião é um direito fundamental para quem possui um imóvel sem a devida documentação. Tradicionalmente, o processo era longo e burocrático, tramitando na via judicial. No entanto, a Usucapião Extrajudicial surgiu como uma alternativa mais rápida e eficiente, permitindo a regularização do imóvel diretamente em cartório. Descubra como ela funciona e como pode acelerar a garantia da sua propriedade.</p>
      <h3>Vantagens da Usucapião Extrajudicial</h3>
      <ul>
        <li><strong>Rapidez:</strong> Geralmente, é muito mais rápida que a via judicial, podendo ser concluída em meses, enquanto um processo judicial pode levar anos.</li>
        <li><strong>Menos Burocracia:</strong> Embora exija documentação completa, o trâmite em cartório é menos formal e mais ágil que o judicial.</li>
        <li><strong>Menos Custos:</strong> Em muitos casos, os custos totais podem ser menores, especialmente ao considerar a economia de tempo e a ausência de custas judiciais.</li>
        <li><strong>Segurança Jurídica:</strong> O reconhecimento da propriedade tem a mesma validade jurídica de uma decisão judicial.</li>
      </ul>
      <h3>Requisitos para a Usucapião Extrajudicial</h3>
      <p>Para que o procedimento extrajudicial seja possível, alguns requisitos são essenciais:</p>
      <ol>
        <li><strong>Posse Mansa e Pacífica:</strong> A posse do imóvel deve ser contínua, sem interrupções e sem oposição de terceiros.</li>
        <li><strong>Tempo de Posse:</strong> O prazo de posse exigido pela lei para cada tipo de usucapião (extraordinária, ordinária, especial urbana, etc.) deve ser cumprido.</li>
        <li><strong>Intenção de Dono (Animus Domini):</strong> O possuidor deve agir como se fosse o verdadeiro proprietário do imóvel.</li>
        <li><strong>Inexistência de Litígio:</strong> Não pode haver disputa judicial sobre a posse ou propriedade do imóvel.</li>
        <li><strong>Ata Notarial:</strong> Documento lavrado por tabelião que atesta o tempo de posse e a inexistência de litígio.</li>
        <li><strong>Planta e Memorial Descritivo:</strong> Elaborados por profissional habilitado (engenheiro ou arquiteto), com ART/RRT.</li>
        <li><strong>Documentos Pessoais e do Imóvel:</strong> RG, CPF, comprovantes de residência, certidões de casamento, certidão de matrícula do imóvel (se houver), comprovantes de pagamento de IPTU, contas de consumo, etc.</li>
        <li><strong>Concordância dos Confrontantes:</strong> Os vizinhos do imóvel devem dar sua anuência ao pedido de usucapião.</li>
      </ol>
      <h3>Como a Nicholas Advocacia Pode Ajudar?</h3>
      <p>Nosso escritório é especializado em Direito Imobiliário e possui vasta experiência em Usucapião Extrajudicial. Oferecemos:</p>
      <ul>
        <li>Análise completa do seu caso para verificar a viabilidade do procedimento extrajudicial.</li>
        <li>Orientação sobre a documentação necessária e auxílio na sua obtenção.</li>
        <li>Elaboração da Ata Notarial e dos documentos técnicos (planta e memorial descritivo) em parceria com profissionais qualificados.</li>
        <li>Representação e acompanhamento de todo o processo junto ao Cartório de Registro de Imóveis.</li>
        <li>Resolução de eventuais pendências e comunicação com os envolvidos.</li>
      </ul>
      <p>Com nossa assessoria, você terá a tranquilidade de regularizar seu imóvel de forma segura, rápida e eficiente, garantindo a sua propriedade.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-05-08T10:00:00Z",
    tags: ["usucapião", "regularização", "imóveis"],
    featuredImage: "/blog-usucapiao-extrajudicial.png",
    status: "published",
  },
  {
    id: "2",
    title: "Os 7 Documentos Essenciais para Garantir o Sucesso do seu Processo de Usucapião",
    slug: "documentos-essenciais-usucapiao",
    content: `
      <h2>Introdução</h2>
      <p>O processo de usucapião, seja ele judicial ou extrajudicial, exige uma série de documentos que comprovem a posse e o cumprimento dos requisitos legais. A falta ou a incorreção de qualquer um deles pode atrasar ou até mesmo inviabilizar o reconhecimento da propriedade. Conheça os 7 documentos essenciais para garantir o sucesso do seu processo.</p>
      <h2>1. Documentos Pessoais do Possuidor</h2>
      <p>RG, CPF, comprovante de residência, certidão de casamento (se for o caso) ou união estável. Se houver mais de um possuidor (por exemplo, um casal), os documentos de todos devem ser apresentados.</p>
      <h2>2. Comprovantes da Posse</h2>
      <p>São documentos que demonstram o tempo e a natureza da posse, como contas de água, luz, telefone, IPTU, comprovantes de pagamento de taxas condominiais, declarações de imposto de renda, contratos de locação antigos (se você era inquilino e passou a possuir), recibos de benfeitorias realizadas no imóvel, e testemunhas.</p>
      <h2>3. Planta e Memorial Descritivo do Imóvel</h2>
      <p>Esses documentos técnicos são elaborados por um profissional habilitado (engenheiro ou arquiteto) e detalham as medidas, confrontações e características do imóvel. São cruciais para identificar o bem de forma precisa e evitar conflitos de área.</p>
      <h2>4. Certidão de Matrícula do Imóvel (ou de Inexistência)</h2>
      <p>É a certidão atualizada do Cartório de Registro de Imóveis onde o bem está localizado. Ela informará se o imóvel possui registro anterior, quem é o proprietário atual (se houver), e se existem ônus ou gravames (hipotecas, penhoras). Se o imóvel nunca foi registrado, será emitida uma certidão negativa.</p>
      <h2>5. Certidões Negativas de Débitos</h2>
      <p>Certidões negativas de débitos fiscais (IPTU, ITR) e de outras taxas relacionadas ao imóvel. Elas comprovam que o possuidor tem agido como dono, arcando com as obrigações do bem.</p>
      <h2>6. Justo Título e Boa-Fé (para Usucapião Ordinária)</h2>
      <p>Se o seu caso for de Usucapião Ordinária, você precisará de um "justo título", que é um documento que, em tese, seria capaz de transferir a propriedade, mas que por algum motivo não o fez (ex: contrato de compra e venda sem registro, promessa de compra e venda). A boa-fé é a crença de que você é o legítimo proprietário, mesmo com o vício no título.</p>
      <h2>7. Declaração de Não Propriedade de Outros Imóveis (para Usucapião Especial)</h2>
      <p>Para os tipos de Usucapião Especial (Urbana e Rural), é necessário comprovar que o possuidor não é proprietário de outro imóvel urbano ou rural. Isso é feito por meio de certidões negativas de propriedade dos cartórios de registro de imóveis da sua cidade e de outras onde possa ter bens.</p>
      <h2>Conclusão</h2>
      <p>A organização e a apresentação correta desses documentos são fundamentais para o sucesso do seu processo de usucapião. Contar com a assessoria de um advogado especialista desde o início fará toda a diferença, garantindo que você reúna a documentação necessária e evite atrasos e problemas burocráticos.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-04-15T10:00:00Z",
    tags: ["usucapião", "documentos", "checklist"],
    featuredImage: "/blog-documentos-usucapiao.png",
    status: "published",
  },
  {
    id: "3",
    title: "5 Erros Fatais em Contratos Imobiliários que Podem Custar seu Patrimônio",
    slug: "erros-fatais-contratos-imobiliarios",
    content: `
      <h2>Introdução</h2>
      <p>A compra ou venda de um imóvel é uma das transações mais importantes na vida de uma pessoa. No entanto, a complexidade dos contratos imobiliários pode levar a erros graves, que resultam em prejuízos financeiros e dores de cabeça. Conhecer os riscos é o primeiro passo para se proteger.</p>
      <h2>1. Não Realizar a Due Diligence Completa</h2>
      <p>A due diligence é a investigação minuciosa da situação jurídica do imóvel e das partes envolvidas. Muitos compradores e vendedores pulam essa etapa crucial, confiando apenas na boa-fé. Sem uma due diligence, você pode descobrir tarde demais que o imóvel possui dívidas, penhoras, ou que o vendedor não é o verdadeiro proprietário.</p>
      <p><strong>Como evitar:</strong> Contrate um advogado especialista para realizar uma due diligence completa, que inclui a análise de certidões do imóvel, dos vendedores e compradores, e de processos judiciais.</p>
      <h2>2. Contrato de Gaveta ou Verbal</h2>
      <p>Contratos informais, como os "de gaveta" (sem registro em cartório) ou acordos verbais, são extremamente perigosos. Eles não oferecem segurança jurídica e podem ser facilmente contestados. Em caso de litígio, provar os termos acordados se torna um desafio imenso.</p>
      <p><strong>Como evitar:</strong> Sempre formalize a transação por meio de um contrato escrito, com cláusulas claras e específicas, e, se possível, registre-o em cartório.</p>
      <h2>3. Cláusulas Ambíguas ou Incompletas</h2>
      <p>Um contrato imobiliário deve ser claro e detalhado, abordando todos os aspectos da negociação: preço, forma de pagamento, prazos, condições de entrega, responsabilidades por impostos e taxas, multas por descumprimento, etc. Cláusulas ambíguas ou a falta de informações essenciais abrem brechas para interpretações diversas e futuros conflitos.</p>
      <p><strong>Como evitar:</strong> Tenha um advogado para elaborar ou revisar o contrato, garantindo que todas as cláusulas sejam precisas e que nada importante seja omitido.</p>
      <h2>4. Não Prever Multas e Penalidades</h2>
      <p>A ausência de cláusulas que estabeleçam multas e penalidades em caso de descumprimento do contrato por uma das partes é um erro comum. Sem essas previsões, a parte lesada terá mais dificuldade em ser ressarcida por perdas e danos, ou em compelir a outra parte a cumprir sua obrigação.</p>
      <p><strong>Como evitar:</strong> Inclua cláusulas de multa por atraso na entrega, desistência, ou qualquer outra violação contratual, de forma proporcional e justa.</p>
      <h2>5. Não Registrar o Contrato ou a Escritura</h2>
      <p>No Brasil, "quem não registra não é dono". A simples assinatura de um contrato de compra e venda ou até mesmo de uma escritura pública não garante a propriedade do imóvel. A transferência da propriedade só ocorre com o registro do título (geralmente a escritura pública) na matrícula do imóvel no Cartório de Registro de Imóveis.</p>
      <p><strong>Como evitar:</strong> Após a assinatura da escritura, providencie imediatamente o seu registro no Cartório de Registro de Imóveis competente. Isso garante a publicidade da transação e a segurança jurídica da sua propriedade.</p>
      <h2>Conclusão</h2>
      <p>A prevenção é sempre o melhor caminho no mercado imobiliário. Contar com a assessoria de um advogado especialista em Direito Imobiliário desde o início da negociação é um investimento que protege seu patrimônio e evita problemas futuros. Não arrisque seu maior bem por economia ou desconhecimento.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-03-22T10:00:00Z",
    tags: ["contratos", "erros", "imóveis"],
    featuredImage: "/blog-erros-contratos-imoveis.png",
    status: "published",
  },
  {
    id: "4",
    title: "Regularização de Imóveis: O Custo de Adiar",
    slug: "regularizacao-imoveis-custo-adiamento",
    content: `
      <h2>Introdução</h2>
      <p>Muitos proprietários adiam a regularização de seus imóveis por diversos motivos, seja por desconhecimento, burocracia ou custos iniciais. No entanto, manter um imóvel irregular pode gerar problemas muito maiores e mais caros no futuro. Entender o custo de adiar é crucial para tomar a decisão certa.</p>
      <h2>O que é um Imóvel Irregular?</h2>
      <p>Um imóvel é considerado irregular quando sua situação fática (o que existe na realidade) não corresponde à sua situação jurídica (o que está registrado nos órgãos competentes, como prefeitura e cartório de imóveis). Isso pode incluir construções sem alvará, reformas não averbadas, falta de escritura, ou problemas na cadeia de propriedade.</p>
      <h2>Os Riscos e Custos de Manter um Imóvel Irregular</h2>
      <h3>1. Dificuldade na Venda e Perda de Valor</h3>
      <p>Um imóvel irregular é muito mais difícil de ser vendido. Compradores que dependem de financiamento bancário não conseguirão aprovação, e mesmo compradores à vista exigirão uma grande desvalorização para assumir o risco da regularização. Você pode perder oportunidades de negócio e ter seu patrimônio desvalorizado.</p>
      <h3>2. Impossibilidade de Financiamento e Uso como Garantia</h3>
      <p>Bancos e instituições financeiras não aceitam imóveis irregulares como garantia para empréstimos ou financiamentos. Isso limita seu acesso a crédito e impede que você utilize seu patrimônio como alavanca financeira para outros investimentos ou necessidades.</p>
      <h3>3. Multas e Fiscalização</h3>
      <p>Prefeituras e outros órgãos fiscalizadores podem aplicar multas pesadas por irregularidades, como construções sem licença ou falta de habite-se. Em casos extremos, o imóvel pode ser embargado ou até mesmo demolido, gerando prejuízos incalculáveis.</p>
      <h3>4. Problemas em Inventários e Heranças</h3>
      <p>A partilha de um imóvel irregular em um inventário é um processo complicado e demorado. A falta de documentação adequada pode atrasar a conclusão do inventário e gerar custos adicionais para os herdeiros, que terão que arcar com a regularização antes de finalizar a partilha.</p>
      <h3>5. Insegurança Jurídica</h3>
      <p>Sem a documentação em dia, você não tem a plena segurança jurídica sobre sua propriedade. Isso significa que seu direito pode ser contestado por terceiros, e você terá mais dificuldade em se defender em caso de litígios.</p>
      <h2>A Regularização como Investimento</h2>
      <p>Embora a regularização envolva custos iniciais (taxas, impostos, honorários advocatícios), ela deve ser vista como um investimento. Um imóvel regularizado:</p>
      <ul>
        <li>Aumenta seu valor de mercado.</li>
        <li>Facilita a venda e o financiamento.</li>
        <li>Evita multas e problemas com a fiscalização.</li>
        <li>Garante a segurança jurídica da sua propriedade.</li>
        <li>Simplifica processos de herança e sucessão.</li>
      </ul>
      <h2>Conclusão</h2>
      <p>Adiar a regularização do seu imóvel é adiar a solução de problemas que só tendem a se agravar. Não espere que a situação se torne insustentável. Procure um advogado especialista em Direito Imobiliário para analisar seu caso e iniciar o processo de regularização o quanto antes. É um passo fundamental para proteger seu patrimônio e garantir sua tranquilidade.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-03-01T10:00:00Z",
    tags: ["regularização", "imóveis", "custos"],
    featuredImage: "/blog-regularizacao-imoveis.png",
    status: "published",
  },
  {
    id: "5",
    title: "Direito de Vizinhança: Como Resolver Conflitos Comuns",
    slug: "direito-vizinhanca-resolver-conflitos",
    content: `
      <h2>Introdução</h2>
      <p>A convivência em sociedade, especialmente em áreas urbanas, muitas vezes gera conflitos entre vizinhos. O Direito de Vizinhança é o ramo do Direito Civil que regula as relações entre proprietários de imóveis vizinhos, buscando a harmonia e o equilíbrio. Conhecer seus direitos e deveres é essencial para resolver disputas de forma pacífica e legal.</p>
      <h2>Principais Conflitos de Vizinhança</h2>
      <p>Os problemas mais comuns entre vizinhos incluem:</p>
      <ul>
        <li><strong>Uso Nocivo da Propriedade:</strong> Barulho excessivo (festas, obras), fumaça, odores, vibrações que perturbam o sossego e a saúde dos vizinhos.</li>
        <li><strong>Árvores Limítrofes:</strong> Questões sobre galhos e raízes que invadem a propriedade vizinha, frutos caídos, e responsabilidade pela poda.</li>
        <li><strong>Passagem Forçada e Servidão de Passagem:</strong> Direito de acesso a imóvel encravado (sem saída para via pública) e uso de passagem por propriedade alheia.</li>
        <li><strong>Águas:</strong> Problemas com escoamento de água da chuva, infiltrações, e uso de águas comuns.</li>
        <li><strong>Limites entre Imóveis e Direito de Construir:</strong> Disputas sobre demarcação de limites, construção de muros, janelas e aberturas, e direito de construir até o limite da propriedade.</li>
      </ul>
      <h2>Como Resolver Conflitos de Vizinhança</h2>
      <p>A melhor forma de resolver um conflito de vizinhança é sempre buscar o diálogo e a conciliação. Se o diálogo não for suficiente, algumas etapas podem ser seguidas:</p>
      <ol>
        <li><strong>Notificação Extrajudicial:</strong> Enviar uma notificação formal ao vizinho, com a ajuda de um advogado, expondo o problema e buscando uma solução amigável.</li>
        <li><strong>Mediação ou Conciliação:</strong> Buscar um mediador ou conciliador (pode ser um profissional particular ou um órgão público, como o Centro Judiciário de Solução de Conflitos e Cidadania - CEJUSC) para auxiliar na negociação.</li>
        <li><strong>Ação Judicial:</strong> Em último caso, se as tentativas amigáveis falharem, é possível ingressar com uma ação judicial para resolver o conflito. As ações mais comuns são as de dano infecto, nunciação de obra nova, ou ações possessórias.</li>
      </ol>
      <h2>Conclusão</h2>
      <p>O Direito de Vizinhança visa garantir que o uso da propriedade de um não prejudique o sossego, a segurança e a saúde do outro. Em caso de conflitos, a Nicholas Advocacia oferece assessoria jurídica especializada para ajudar você a encontrar a melhor solução, seja por meio do diálogo, mediação ou, se necessário, pela via judicial, protegendo seus direitos e promovendo a boa convivência.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-02-10T10:00:00Z",
    tags: ["vizinhança", "conflitos", "direito civil"],
    featuredImage: "/blog-direito-vizinhanca.png",
    status: "published",
  },
  {
    id: "6",
    title: "Incorporação Imobiliária: Guia Completo para Construtoras e Investidores",
    slug: "incorporacao-imobiliaria-guia-completo",
    content: `
      <h2>Introdução</h2>
      <p>A incorporação imobiliária é um dos pilares do mercado de construção civil, permitindo a construção e comercialização de empreendimentos como edifícios de apartamentos, condomínios de casas e loteamentos. É um processo complexo, que exige profundo conhecimento jurídico e técnico para garantir a segurança e o sucesso do projeto. Este guia completo aborda os aspectos essenciais para construtoras e investidores.</p>
      <h2>O que é Incorporação Imobiliária?</h2>
      <p>A incorporação imobiliária é a atividade que visa a construção de edificações ou conjunto de edificações, compostas de unidades autônomas, para alienação total ou parcial. Em termos práticos, é o processo de transformar um terreno em um empreendimento imobiliário, com a venda das unidades antes, durante ou após a construção.</p>
      <h2>Etapas Essenciais da Incorporação</h2>
      <ol>
        <li><strong>Aquisição do Terreno:</strong> A primeira etapa é a compra do terreno, que deve ser feita com uma análise jurídica prévia (due diligence) para verificar a regularidade da propriedade e a inexistência de ônus.</li>
        <li><strong>Estudo de Viabilidade:</strong> Análise técnica, econômica e jurídica para determinar a viabilidade do empreendimento, considerando zoneamento, licenças, custos e potencial de vendas.</li>
        <li><strong>Projeto e Aprovações:</strong> Elaboração do projeto arquitetônico e de engenharia, e obtenção das aprovações necessárias junto à prefeitura e outros órgãos.</li>
        <li><strong>Registro da Incorporação:</strong> Etapa crucial onde todos os documentos do empreendimento (projeto, memorial descritivo, convenção de condomínio, etc.) são registrados no Cartório de Registro de Imóveis. Este registro é indispensável para a venda das unidades na planta.</li>
        <li><strong>Comercialização:</strong> Venda das unidades, geralmente por meio de contratos de promessa de compra e venda.</li>
        <li><strong>Construção:</strong> Execução da obra conforme o projeto aprovado.</li>
        <li><strong>Habite-se e Individualização das Matrículas:</strong> Após a conclusão da obra, é obtido o "habite-se" (autorização para ocupação) e as matrículas das unidades autônomas são individualizadas no cartório.</li>
        <li><strong>Entrega das Chaves:</strong> Entrega das unidades aos compradores.</li>
      </ol>
      <h2>Riscos e Como Mitigá-los</h2>
      <p>A incorporação imobiliária envolve diversos riscos, como atrasos na obra, problemas com licenças, desistência de compradores, e litígios. A mitigação desses riscos passa por:</p>
      <ul>
        <li><strong>Assessoria Jurídica Especializada:</strong> Contar com advogados experientes em todas as etapas, desde a due diligence do terreno até a entrega das chaves.</li>
        <li><strong>Contratos Bem Elaborados:</strong> Utilizar contratos claros, completos e que prevejam todas as situações possíveis.</li>
        <li><strong>Planejamento Financeiro Sólido:</strong> Garantir que o fluxo de caixa do projeto seja suficiente para cobrir todas as despesas.</li>
        <li><strong>Gestão de Riscos:</strong> Identificar e monitorar proativamente os riscos do projeto.</li>
      </ul>
      <h2>Conclusão</h2>
      <p>A incorporação imobiliária é uma atividade de grande potencial, mas que exige rigor e profissionalismo. Construtoras e investidores que buscam segurança e sucesso em seus empreendimentos devem investir em uma assessoria jurídica completa e especializada, garantindo que todas as etapas sejam cumpridas com a máxima conformidade legal e minimizando os riscos.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-01-20T10:00:00Z",
    tags: ["incorporação", "imóveis", "investimento"],
    featuredImage: "/blog-incorporacao-imobiliaria.png",
    status: "published",
  },
  {
    id: "7",
    title: "Direito Condominial: Gestão e Solução de Conflitos em Condomínios",
    slug: "direito-condominial-gestao-conflitos",
    content: `
      <h2>Introdução</h2>
      <p>A vida em condomínio, seja ele residencial ou comercial, é regida por um conjunto de regras e leis que visam garantir a boa convivência e a manutenção do patrimônio comum. O Direito Condominial é o ramo jurídico que trata dessas relações, oferecendo ferramentas para a gestão eficiente e a solução de conflitos. Síndicos, administradoras e condôminos precisam estar cientes de seus direitos e deveres para evitar problemas.</p>
      <h2>Principais Aspectos do Direito Condominial</h2>
      <ul>
        <li><strong>Convenção de Condomínio e Regimento Interno:</strong> São os documentos que estabelecem as regras de convivência, direitos e deveres dos condôminos, forma de administração, e as penalidades para infrações.</li>
        <li><strong>Assembleias Condominiais:</strong> São o principal fórum de decisão do condomínio, onde são aprovadas contas, eleitos síndicos, e deliberadas sobre obras e outras questões importantes.</li>
        <li><strong>Cobrança de Cotas Condominiais:</strong> A inadimplência é um dos maiores desafios dos condomínios. O Direito Condominial oferece meios legais para a cobrança de dívidas, incluindo ações judiciais.</li>
        <li><strong>Obras em Condomínios:</strong> Regras para a realização de obras nas áreas comuns e nas unidades privativas, exigindo aprovações e licenças específicas.</li>
        <li><strong>Conflitos entre Vizinhos:</strong> Questões como barulho, animais de estimação, uso de áreas comuns, e danos a propriedades vizinhas.</li>
      </ul>
      <h2>O Papel do Síndico e da Administradora</h2>
      <p>O síndico é o representante legal do condomínio, responsável pela sua administração e pela execução das decisões das assembleias. A administradora, por sua vez, presta serviços de apoio ao síndico, como gestão financeira, contábil e de pessoal. Ambos precisam de suporte jurídico para atuar em conformidade com a lei e evitar responsabilidades.</p>
      <h2>Solução de Conflitos em Condomínios</h2>
      <p>Conflitos são inevitáveis em condomínios, mas podem ser resolvidos de forma eficaz com a intervenção jurídica adequada:</p>
      <ol>
        <li><strong>Mediação e Conciliação:</strong> Buscar um acordo amigável entre as partes, com a ajuda de um mediador.</li>
        <li><strong>Notificação Extrajudicial:</strong> Formalizar a reclamação e a busca por uma solução antes de recorrer à justiça.</li>
        <li><strong>Ações Judiciais:</strong> Em casos de inadimplência persistente, danos, ou descumprimento grave das regras, a via judicial pode ser necessária para garantir os direitos do condomínio ou dos condôminos.</li>
      </ol>
      <h2>Como a Nicholas Advocacia Pode Ajudar?</h2>
      <p>Nosso escritório oferece assessoria jurídica completa em Direito Condominial para síndicos, administradoras e condôminos, incluindo:</p>
      <ul>
        <li>Elaboração e revisão de Convenções e Regimentos Internos.</li>
        <li>Assessoria em assembleias e na tomada de decisões.</li>
        <li>Cobrança judicial e extrajudicial de cotas condominiais.</li>
        <li>Defesa em ações judiciais e extrajudiciais.</li>
        <li>Mediação de conflitos entre vizinhos.</li>
        <li>Orientação sobre obras e responsabilidades.</li>
      </ul>
      <p>Com nossa expertise, seu condomínio terá a segurança jurídica necessária para uma gestão eficiente e uma convivência harmoniosa.</p>
    `,
    author: "Nicholas Nascimento",
    publishedAt: "2023-01-05T10:00:00Z",
    tags: ["condomínio", "conflitos", "síndico"],
    featuredImage: "/blog-direito-condominial.png",
    status: "published",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/law-banner.png" // Placeholder image for blog hero
            alt="Fundo do blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-6 text-white">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Nosso Blog</h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl">
            Artigos e notícias sobre Direito Imobiliário e Civil para você se manter informado.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 md:grid-cols-2">
                {mockBlogPosts
                  .filter((post) => post.status === "published")
                  .map((post) => (
                    <Card
                      key={post.id}
                      className="flex h-full flex-col overflow-hidden border-none shadow-lg transition-all hover:shadow-xl"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="flex flex-grow flex-col p-6">
                        <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{calculateReadTime(post.content)}</span>
                          </div>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-[#1e2c49] line-clamp-2">{post.title}</h3>
                        <p className="mb-4 flex-grow text-gray-600 line-clamp-3">
                          {post.excerpt || generateExcerpt(post.content)}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button asChild variant="link" className="p-0 text-[#d4b26a] hover:text-[#c4a25a]">
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Ler mais <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
