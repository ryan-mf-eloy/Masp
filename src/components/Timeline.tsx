'use client'
import { useState } from 'react'
import Link from 'next/link'

import Modal from './Modal'
import Button from './Button'

import { GrTicket } from 'react-icons/gr'

export interface TimelineItem {
  date: string,
  title: string,
  description: string,
  img: string,
  type: 'Exposições'
   | 'Eventos'
   | 'Seminários'
   | 'Diálogos'
   | 'Cursos'
}

export default function Timeline({
  className,
  items
}: {
  className?: string,
  items: Array<TimelineItem>
  }) {
  const [isToggled, setToggled] = useState<boolean>(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setToggled(!isToggled)
    setSelectedIndex(index)
  }

  const selectedItem: TimelineItem | undefined = items[selectedIndex!]

  return <>  
    {
      selectedItem && (
        <Modal isToggled={isToggled} setToggled={setToggled} style={{
          backgroundImage: `
            linear-gradient(to bottom, #000000, #0000002a 200%),
            url("${selectedItem.img}")
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="flex flex-col w-full items-start justify-center">
            <h2 className="font-light text-lg text-gray">Masp apresenta</h2>
            <h1 className="text-2xl max-sm:text-base text-white font-display font-bold uppercase">
              {selectedItem.title}
            </h1>
            <div className="flex flex-row gap-2 mt-5 mb-5">
              <span className="p-1 pl-2 pr-2 bg-primary max-sm:text-sm font-bold text-white">
                {selectedItem.date}
              </span>
              <span className="p-1 pl-2 pr-2 uppercase bg-white max-sm:text-sm font-bold text-black">
                {selectedItem.type}
              </span>
            </div>
            <p className="text-white max-sm:text-sm max-sm:p-0 max-sm:mb-5 pr-20 mb-10 text-justify">
              {selectedItem.description}
            </p>

            <Link href="/ingressos">
              <Button
                type="primary"
                className="max-sm:text-white max-sm:bg-primary max-sm:hover:bg-primary-shadow max-sm:hover:border-primary-shadow">
                <GrTicket  size={16} />
                Comprar Ingressos
              </Button>
            </Link>
          </div>
        </Modal>
      )
   }
    {
      items.map(({ date, title, description }, index) => (
        <ol key={index} className={`relative border-s border-gray ${className}`}>
          <li onClick={() => { handleClick (index)}} className="mb-10 ms-5 max-md:ms-2 w-full p-2 transition-[2000ms] cursor-pointer hover:bg-black hover:bg-opacity-5">
            <div className="absolute w-5 h-5 mt-1.5 -start-[10px] border bg-primary border-primary"></div>
              
            <time className="mb-1 text-sm font-bold leading-none text-gray-400 text-primary">
              {date}
            </time>

            <h3 className="text-lg font-semibold max-md:text-base text-gray-900">
              {title}
            </h3>
              
            <p className="mb-4 font-normal max-md:text-sm text-gray-400">
              {description}
            </p>
          </li>
        </ol>
      ))
    }
    </>
    
}