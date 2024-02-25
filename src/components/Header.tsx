'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
/**
 * Components
 */
import Button from './Button'
/**
 * Icons
 */
import { GrCalendar, GrTicket } from 'react-icons/gr'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const currentPage = usePathname()
  const formattedCurrentPage = currentPage?.split('/')[1]

  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="p-5 select-none pl-[5rem] pr-[5rem] max-md:pr-[3rem] max-md:pl-[3rem] flex w-full flex-row items-center justify-between">
      <h6 className="xl:text-xl lg:text-lg font-semibold font-body uppercase">
        {!formattedCurrentPage ? 'Home' : 'Masp'}
      </h6>

      <div className="max-md:flex hidden hover:text-black transition-[2000ms]">
        <GiHamburgerMenu
          className="cursor-pointer hover:text-black hover:bg-black p-2 hover:bg-opacity-5 transition-[2000ms]"
          onClick={() => setOpen(true)}
          size={45}
        />
      </div>

      {
        open && (
          <motion.div
            initial={{y: 100, opacity: 0 }}
            animate={{y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="bg-background z-20 max-md:flex hidden fixed top-0 left-0 bottom-0 right-0 p-5 max-md:pr-[3rem] max-md:pl-[3rem] flex-col item-center justify-start"
          >
            <div className="w-full flex flex-row justify-between items-center mb-12">
              <h6 className="xl:text-xl lg:text-lg font-semibold font-body uppercase">
                {!formattedCurrentPage ? 'Home' : 'Masp'}
              </h6>

              <GiHamburgerMenu
                className="cursor-pointer hover:text-black hover:bg-black p-2 hover:bg-opacity-5 transition-[2000ms]"
                onClick={() => setOpen(false)}
                size={45}
              />
            </div>

            <div className="flex flex-col items-center gap-5 justify-between">
              <Link href="/agenda" onClick={() => setOpen(false)}>
                <Button type="outline">
                  <GrCalendar size={16} /> Ver agenda
                </Button>
              </Link>
              
              <Link href="/ingressos" onClick={() => setOpen(false)}>
                <Button type="primary">
                  <GrTicket  size={16} />
                  Ingressos
                </Button>
              </Link>
            </div>
          </motion.div>
        )
      }

      <div className="flex max-md:hidden flex-row items-center gap-5 justify-between">
        <Link href="/agenda">
          <Button type="outline">
            <GrCalendar size={16} /> Ver agenda
          </Button>
        </Link>
        
        <Link href="/ingressos">
          <Button type="primary">
            <GrTicket  size={16} />
            Ingressos
          </Button>
        </Link>
      </div>
    </header>
  )
}