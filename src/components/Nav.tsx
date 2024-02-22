'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const currentPage = usePathname()
  const formattedCurrentPage = currentPage?.split('/')[1]

  return (
    <nav className="max-lg:flex-col max-lg:max-h-full max-lg:p-0 max-lg:gap-0 overflow-hidden select-none pl-[5rem] pr-[5rem] flex gap-28 max-h-64 mb-10 flex-row items-center justify-between">
        <div className="flex flex-row items-baseline justify-between gap-10">
          {
            formattedCurrentPage
              ?
              <h1 className="text-primary -tracking-widest font-bold uppercase text-[8rem] max-md:text-4xl max-2xl:text-6xl font-display">
                {formattedCurrentPage}
              </h1>
              : 
              <h1 className="text-primary -tracking-widest font-bold uppercase text-9xl max-2xl:text-6xl font-display">
                Masp
              </h1>
            }
          {!formattedCurrentPage &&
            <h5 className="text-foreground relative -top-5 font-thin text-3xl max-md:text-2xl -rotate-90 font-display">
              1947
            </h5>
          }
        </div>
      
        <div className="flex flex-row overflow-hidden w-96 max-lg:w-fit">
          <div className="flex flex-col min-h-60 justify-end max-lg:min-h-32">
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-4xl font-bold leading-[5rem] font-display">
                MUSEU
              </h4>
                <span className="font-body italic text-wrap max-w-[10rem] overflow-hidden text-gray">
                  De Arte De São Paulo Assis Chateaubriand
                </span>
            </div>

            <ul className="flex flex-row gap-5 mt-10 items-center font-medium justify-between">
              <li className="cursor-pointer transition-[2000ms] text-lg hover:text-primary">
                <Link href="/" locale="pt-BR">Home</Link>
              </li>
              <li className="cursor-pointer transition-[2000ms] text-lg hover:text-primary">
                <Link href="/agenda" locale="pt-BR">Agenda</Link>
              </li>
              <li className="cursor-pointer transition-[2000ms] text-lg hover:text-primary">
              <Link href="/visite" locale="pt-BR">Visite</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  )
}