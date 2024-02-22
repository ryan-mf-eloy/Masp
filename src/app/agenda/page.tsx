'use client'
import { useState, useCallback, useEffect } from "react";
/**
 * Components
 */
import Timeline, { TimelineItem } from "@/components/Timeline";
import InputCheckbox, { IInputOnChangeParams } from "@/components/InputCheckbox";
/**
 * Assets
 */
import item1Image from '../../../public/assets/images/masp-10.jpg'
import item2Image from '../../../public/assets/images/masp-9.jpg'
import item3Image from '../../../public/assets/images/masp-12.jpg'
import item4Image from '../../../public/assets/images/masp-2.jpg'
import item5Image from '../../../public/assets/images/masp-3.png'

export default function Calendar() {
  const APIResponseItems: TimelineItem[] = [
    {
      title: "GRAN FURY: ARTE NÃO É O BASTANTE",
      date: "23.02 – 09.06.2024",
      description: "O MASP apresenta a mostra Gran Fury: arte não é o bastante, que ocupa a galeria localizada no 1º subsolo do museu. Com curadoria de André Mesquita, curador, MASP, e assistência de David Ribeiro, supervisor, MASP, a exposição reúne 77 obras, entre elas fotocópias e impressões digitais sobre papel. A mostra discute os limites e os alcances das campanhas gráficas do coletivo Gran Fury, bem como a ideia da arte como estratégia no campo ativista, impulsionado por pessoas queer, para ampliar a consciência sobre o HIV/aids. ",
      type: 'Exposições',
      img: item1Image.src
    },
    {
      title: "SALA DE VÍDEO: MASI MAMANI / BARTOLINA XIXA",
      date: "23.02 – 14.04.2024",
      description: "O MASP apresenta a Sala de vídeo: Masi Mamani / Bartolina Xixa, que exibe os vídeos Ramita Seca, La colonialidad permanente (2019), Bartolina Xixa, una drag de La Puna (2019) e Crudo (2020). Com curadoria de Matheus de Andrade, assistente curatorial, MASP, as obras registram uma série de performances da artista argentina, as quais denunciam estruturas coloniais na intersecção entre sua pesquisa antropológica, experiências pessoais e expressão artística.",
      type: 'Exposições',
      img: item2Image.src
    },
    {
      title: "SALA DE VÍDEO: CECILIA VICUÑA",
      date: "15.12.2023 – 11.02.2024",
      description: "O MASP apresenta a Sala de vídeo: Cecilia Vicuña, que exibe o vídeo Quipu Mapocho (2017). Com curadoria de Kássia Borges, curadora-adjunta de arte indígena, MASP, a obra registra uma série de performances da artista ao longo do rio Mapocho, no Chile, que trazem perspectivas sobre a vida, a morte, a cultura, a memória e a história deste território.",
      type: 'Exposições',
      img: item3Image.src
    },
    {
      title: "HISTÓRIAS INDÍGENAS",
      date: "20.10.2023 – 25.02.2024",
      description: "O MASP em colaboração com o Kode Bergen Art Museum organiza uma grande exposição coletiva intitulada Histórias indígenas.",
      type: 'Exposições',
      img: item4Image.src
    },
    {
      title: "ACERVO EM TRANSFORMAÇÃO",
      date: "DESDE 2015",
      description: "Acervo em transformação é o título da exposição de longa duração da coleção do MASP. As obras são instaladas nos cavaletes de cristal — placas de vidro encaixadas em blocos de concreto — que ficam dispostos em fileiras sem divisórias na sala ampla do segundo andar do museu. O espaço aberto, fluido e permeável da galeria oferece múltiplas possibilidades de acesso e de leitura, eliminando hierarquias e roteiros predeterminados. Retirar as telas das paredes e colocá-las nos cavaletes possibilita ao visitante caminhar entre elas, como em uma floresta de obras que parecem estar suspensas no ar.",
      type: 'Exposições',
      img: item5Image.src
    }
  ]
  const [selection, setSelections] = useState<string[]>([])
  const [items, setItems] = useState<TimelineItem[]>(APIResponseItems)

  const handleSelecions = useCallback((
    { checked, inputValue }: IInputOnChangeParams
  ) => {
    if (checked) {
      setSelections((currentSelecions) => [...currentSelecions, inputValue])
      return
    } 
    
    const allValuesWithoutCurrentSelecion = selection
        .filter((value) => value !== inputValue)
      
    setSelections([...allValuesWithoutCurrentSelecion])
  }, [selection])

  useEffect(() => {
    if (selection.length > 0) {
      const filteredItems = APIResponseItems
        .filter(({ type }) => selection.includes(type))
      
      setItems(filteredItems)
    } else {
      setItems(APIResponseItems)
    }
  }, [selection])

  return (
    <main>
      <section className="flex pt-10 flex-row items-start justify-center gap-10">
        <div className="w-full flex flex-col items-start justify-start">
          <h3 className="text-3xl font-bold font-display uppercase">
            Programação
          </h3>

          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox isChecked={true} onChange={handleSelecions} id="exposicoes" value="Exposições" labelText="Exposições" labelClassName="text-2xl font-bold uppercase" />
          </div>
          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox onChange={handleSelecions}  id="oficinas" value="Oficinas" labelText="Oficinas" labelClassName="text-2xl font-bold uppercase" />
          </div>
          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox onChange={handleSelecions}  id="seminarios" value="Seminários" labelText="Seminários" labelClassName="text-2xl font-bold uppercase" />
          </div>
          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox onChange={handleSelecions}  id="dialogos" value="Diálogos" labelText="Diálogos no acervo" labelClassName="text-2xl font-bold uppercase" />
          </div>
          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox onChange={handleSelecions}  id="eventos" value="Eventos" labelText="Espetáculo e Eventos" labelClassName="text-2xl font-bold uppercase" />
          </div>
          <div className="flex items-center justify-start w-full pt-3 pb-3">
            <InputCheckbox onChange={handleSelecions}  id="cursos" value="Cursos" labelText="Cursos" labelClassName="text-2xl font-bold uppercase" />
          </div>
        </div>

        <div className="flex flex-col">
          <Timeline
            items={items}
          />
        </div>
      </section>
   </main>
  );
}