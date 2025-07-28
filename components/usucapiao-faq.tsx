// This component was previously assumed correct and is included here for completeness.
// No specific refactoring was requested or applied to this file.
"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function UsucapiaoFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left text-lg font-semibold text-[#1e2c49] hover:no-underline">
          O que é Usucapião?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Usucapião é um modo de aquisição da propriedade de um bem (móvel ou imóvel) pela posse prolongada, contínua e
          ininterrupta, com a intenção de ser dono, e cumprindo os requisitos legais. É uma forma de regularizar a
          situação de um imóvel que não possui documentação formal, transformando a posse em propriedade.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-left text-lg font-semibold text-[#1e2c49] hover:no-underline">
          Quais os tipos de Usucapião de imóveis?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Existem diversos tipos, como Usucapião Extraordinária (15 anos de posse), Ordinária (10 anos com justo título
          e boa-fé), Especial Urbana (5 anos, até 250m², para moradia), Especial Rural (5 anos, até 50 hectares, para
          moradia e produção), Familiar (2 anos, por abandono de lar) e Coletiva. Cada uma tem requisitos específicos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-left text-lg font-semibold text-[#1e2c49] hover:no-underline">
          Preciso de advogado para entrar com Usucapião?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Sim, a representação por advogado é obrigatória tanto para a Usucapião judicial quanto para a extrajudicial
          (feita em cartório). Um profissional especializado garantirá que todos os requisitos legais sejam cumpridos e
          que o processo ocorra da forma mais eficiente possível.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-left text-lg font-semibold text-[#1e2c49] hover:no-underline">
          Quanto tempo demora um processo de Usucapião?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700">
          O tempo varia bastante. A Usucapião extrajudicial (em cartório) tende a ser mais rápida, podendo levar de 6
          meses a 2 anos, dependendo da complexidade e da documentação. A Usucapião judicial pode levar de 2 a 5 anos ou
          mais, especialmente se houver contestação.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-left text-lg font-semibold text-[#1e2c49] hover:no-underline">
          Quais documentos são necessários para Usucapião?
        </AccordionTrigger>
        <AccordionContent className="text-gray-700">
          Os documentos variam conforme o tipo de usucapião, mas geralmente incluem: RG e CPF, comprovante de
          residência, certidão de casamento/nascimento, comprovantes da posse (contas de água, luz, IPTU), planta e
          memorial descritivo do imóvel, certidões negativas, e, em alguns casos, justo título. Um advogado fará o
          levantamento completo.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
