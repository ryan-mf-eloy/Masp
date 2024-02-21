'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const currentPage = usePathname()
  const formattedCurrentPage = currentPage?.split('/')[1]

  return (
    <nav className="overflow-hidden flex gap-28 max-h-64 mb-10 flex-rowoverflow-hidden items-center justify-between">
        <div className="flex flex-row items-baseline justify-between gap-10">
          {
            formattedCurrentPage
              ?
              <h1 className="text-primary -tracking-widest font-bold uppercase text-[8rem] font-display">
                {formattedCurrentPage}
              </h1>
              : 
              <h1 className="text-primary -tracking-widest font-bold uppercase text-9xl font-display">
                Masp
              </h1>
            }
          {!formattedCurrentPage &&
            <h5 className="text-foreground relative -top-5 font-thin text-3xl -rotate-90 font-display">
              1947
            </h5>
          }
        </div>
      
        <div className="flex flex-col overflow-hidden w-96">
          <div className="flex flex-col min-h-60 justify-end">
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-4xl font-bold leading-[5rem] font-display">MUSEU</h4>
              <span className="font-body italic text-wrap max-w-[10rem] overflow-hidden text-gray">
                De Arte De São Paulo Assis Chateaubriand
              </span>
          </div>

            <ul className="flex flex-row gap-5 mt-10 items-center font-medium justify-between">
              <li className="cursor-pointer transition-[1500ms] hover:text-primary">
                <Link href="/" locale="pt-BR">Home</Link>
              </li>
              <li className="cursor-pointer transition-[1500ms] hover:text-primary">
                <Link href="/agenda" locale="pt-BR">Agenda</Link>
              </li>
              <li className="cursor-pointer transition-[1500ms] hover:text-primary">
              <Link href="/visite" locale="pt-BR">Visite</Link>
              </li>
              <li className="cursor-pointer transition-[1500ms] hover:text-primary">
                <a href="/exposicoes">Exposições</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
  )
}