'use client'
import { useState } from "react";
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

  return (
    <div className="flex flex-col">
      {
        items.map(({ title, content }, index) => (
          <div key={index} className="cursor-pointer select-none border-black border-2 flex-1 pl-5 pr-5 flex flex-col">
             <div onClick={() => handleClick(index)} className="flex flex-row items-center justify-between hover:text-black">
              <h6 className="text-5xl font-display font-bold uppercase">{title}</h6>
              <GrAdd size={80} />
            </div>
            {openIndex === index && <div className="pl-1 pb-5">{content}</div>}
          </div>
        ))
      }
    </div>
  )
}