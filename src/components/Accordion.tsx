'use client'
import { useState, useCallback } from "react";
/**
 * Icons
 */
import { GrAdd } from "react-icons/gr";

export default function Accordion({
  items
}:{
  items: Array<{ title: string; content: React.ReactNode }>
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const animatePlusIcon = useCallback((index: number) => {
    const rotationStyle = openIndex === index ? 'rotate-45': 'rotate-0'
      
    return rotationStyle
  }, [openIndex])

  return (
    <div className="flex flex-col">
      {
        items.map(({ title, content }, index) => (
          <div key={index} className="cursor-pointer select-none border-black border-2 flex-1 pl-5 pr-5 flex flex-col">
             <div onClick={() => handleClick(index)} className="flex flex-row items-center justify-between hover:text-black">
              <h6 className="text-5xl font-display font-bold uppercase">{title}</h6>
              <GrAdd className={`transition-[2000ms] ${animatePlusIcon(index)}`} size={80} />
            </div>
            {openIndex === index && <div className="pl-1 pb-5">{content}</div>}
          </div>
        ))
      }
    </div>
  )
}