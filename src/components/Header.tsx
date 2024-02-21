'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
/**
 * Components
 */
import Button from './Button'
/**
 * Icons
 */
import { GrCalendar, GrTicket  } from 'react-icons/gr'

export default function Header() {
  const currentPage = usePathname()
  const formattedCurrentPage = currentPage?.split('/')[1]

  return (
    <header className="p-5 flex flex-row justify-between">
      <h6 className="text-xl font-semibold font-body uppercase">
        {!formattedCurrentPage ? 'Home' : 'Masp'}
      </h6>

      <div className="flex flex-row items-center gap-5 justify-between">
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