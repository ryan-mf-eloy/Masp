import { MouseEvent } from "react";
import { GrTicket } from "react-icons/gr";

export default function TicketList({
  items,
  selectedItemIndex,
  onSelect
}: {
  items: Array<{ title: string; description: string; price: number }>,
  selectedItemIndex: number,
  onSelect: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, index: number) => void;
}) {
  return (
    <>
      {
        items.map(({ title, description, price }, index) => {
          const formattedPrice = price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

          const isSelected = selectedItemIndex === index
          const selectedItemStyle = isSelected ? 'border-primary' : ''
          
          return (
            <div
              onClick={(event) => onSelect(event, index)}
              key={index}
              className={`p-5 w-full max-w-96 min-h-64 border-2 border-background cursor-pointer bg-black bg-opacity-5 hover:bg-black hover:bg-opacity-10 ${selectedItemStyle}`}>
              <h6 className="text-lg font-bold pb-2 flex flex-row gap-2 items-center justify-start">
                <GrTicket size={25} />
                {title}
              </h6>
              <p>{description}</p>
              <h6 className="text-2xl font-bold text-black pt-2">{formattedPrice}</h6>
          </div>
          )
        })
   }
    </>
  )
}