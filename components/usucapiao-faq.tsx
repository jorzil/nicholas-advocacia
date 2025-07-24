"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn } from "./fade-in"

export function UsucapiaoFAQ() {
  const faqs = [
    {
      question: "O que é usucapião?",
      answer:
        "Usucapião é um modo originário de aquisição da propriedade de um bem (móvel ou imóvel) pela posse prolongada, contínua e ininterrupta, desde que cumpridos os requisitos legais específicos para cada modalidade.",
    },
    {
      question: "Quais são os principais tipos de usucapião de imóveis?",
      answer:
        "Os principais tipos são: Usucapião Extrajudicial, Usucapião Ordinária, Usucapião Extraordinária, Usucapião Especial Urbana, Usucapião Especial Rural e Usucapião Familiar (por abandono de lar). Cada uma possui requisitos de tempo e características específicas.",
    },
    {
      question: "Quanto tempo leva um processo de usucapião?",
      answer:
        "O tempo varia bastante. A usucapião extrajudicial (em cartório) tende a ser mais rápida, podendo levar de 6 meses a 2 anos, se houver consenso e documentação completa. A usucapião judicial pode levar de 2 a 5 anos ou mais, dependendo da complexidade do caso e da comarca.",
    },
    {
      question: "Quais documentos são necessários para iniciar um processo de usucapião?",
      answer:
        "Os documentos variam conforme a modalidade, mas geralmente incluem: planta e memorial descritivo do imóvel, certidão de matrícula atualizada, comprovantes de posse (contas de água, luz, IPTU), declarações de vizinhos, fotos, entre outros. Um advogado especialista fará a análise completa.",
    },
    {
      question: "É possível fazer usucapião de um imóvel que não tem escritura?",
      answer:
        "Sim, a usucapião é justamente o meio legal para regularizar a propriedade de um imóvel que não possui registro formal em nome do possuidor. É uma forma de transformar a posse em propriedade registrada.",
    },
    {
      question: "Preciso de um advogado para entrar com usucapião?",
      answer:
        "Sim, a representação por advogado é obrigatória tanto para a usucapião judicial quanto para a extrajudicial (em cartório). O profissional é essencial para analisar a viabilidade do caso, reunir a documentação e conduzir o processo corretamente.",
    },
    {
      question: "Quais são os custos de um processo de usucapião?",
      answer:
        "Os custos envolvem honorários advocatícios, taxas cartorárias (no caso da extrajudicial), custas judiciais (no caso da judicial), e despesas com documentação e levantamento topográfico. Os valores variam muito de caso a caso e da complexidade.",
    },
    {
      question: "Posso fazer usucapião de um imóvel que invadi?",
      answer:
        "A usucapião exige que a posse seja mansa e pacífica, ou seja, sem oposição do proprietário e sem violência ou clandestinidade. Imóveis invadidos (posse precária ou violenta) geralmente não se enquadram nos requisitos da usucapião, a menos que a situação de invasão tenha cessado e a posse se tornado mansa e pacífica por tempo suficiente.",
    },
  ]

  return (
    <FadeIn>
      <div className="w-full max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-[#1e2c49] mb-8 text-center">Perguntas Frequentes sobre Usucapião</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-[#1e2c49] hover:text-[#d4b26a] text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </FadeIn>
  )
}
