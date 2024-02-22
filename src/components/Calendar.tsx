'use client'
import { useState, useEffect, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";

import { MdArrowRight, MdArrowLeft } from "react-icons/md";

export default function Calendar({
  onDate,
  selectedDate,
  activeDates
}: {
  onDate: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, date: Date) => void;
  activeDates?: Date[] | string[],
  selectedDate?: Date
}) {
  const initialCurrentMonthValue = new Date().getMonth()
  
  const [currentMonth, setCurrentMonth] = useState<number>(initialCurrentMonthValue);
  const [allDaysFromCurrentMonth, setAllDaysFromCurrentMonth] = useState<Date[]>([]);

  const allDaysInOneMonth = new Array(31).fill(0).map((_, i) => i + 1);
  const months: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const handleCurrentMonthDays = useCallback((month: number) => {
    const days = allDaysInOneMonth.map(dayCounter => {
      const date = new Date().setMonth(month)
      const currentDay = new Date(date).setDate(dayCounter)
      const currentDate = new Date(currentDay)

      return currentDate
    })

    setAllDaysFromCurrentMonth(days)
  }, [ allDaysInOneMonth])

  const handleCurrentMonth = useCallback((direction: 'next' | 'prev') => {
    const MAX_MONTHS = 11

    const existNextStep = currentMonth + 1 <= MAX_MONTHS
    if (direction === 'next' && existNextStep) {
      const month = currentMonth + 1

      setCurrentMonth(month)
      handleCurrentMonthDays(month)

      return
    }

    const existPreviousStep = currentMonth - 1 >= 0
    if (direction === 'prev' && existPreviousStep) {
      const month = currentMonth - 1;

      setCurrentMonth(month)
      handleCurrentMonthDays(month)
    }
  }, [currentMonth, handleCurrentMonthDays])

  useEffect(() => {
    const firstDate = allDaysFromCurrentMonth[0]

    handleCurrentMonthDays(initialCurrentMonthValue)

    if (firstDate) {
      setCurrentMonth(firstDate.getMonth())
    }
  }, [initialCurrentMonthValue])

  return(
    <div className="flex overflow-hidden flex-col items-center select-none justify-center w-fit border-2 p-5 pt-3 max-md:p-1">
      <h3 className="text-2xl text-center uppercase font-bold w-fit pb-2 flex flex-row items-center justify-start">
        <MdArrowLeft
          onClick={() => handleCurrentMonth('prev')}
          className="hover:text-primary cursor-pointer max-md:text-[35px] text-[50px]"
        />
        
        <span className="min-w-36 max-md:text-lg">
          {months[currentMonth]}
        </span>

        <MdArrowRight
          onClick={() => handleCurrentMonth('next')}
          className="hover:text-primary cursor-pointer max-md:text-[35px] text-[50px]"
        />
      </h3>

      <div className="grid grid-cols-7 flex-row gap-2 text-center w-fit">
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">S</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">T</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">Q</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">Q</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">S</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">S</span>
        <span className="text-white max-md:text-[0.8rem] max-md:p-1 max-md:w-12 max-lg:p-1 max-lg:w-16 flex items-center justify-center bg-primary w-28 h-8 font-bold font-display uppercase">D</span>
      </div>
      
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="grid grid-cols-7 flex-row gap-2 text-center w-fit">
        {
          allDaysFromCurrentMonth.map((date, index) => {
            const currentDay = date.getDate()
            /**
             * February exception
             */
            if (currentDay <= 28) {
              const lastDateInsertedInArray = allDaysFromCurrentMonth[allDaysFromCurrentMonth.length - 3]
        
              if (date.getTime() > lastDateInsertedInArray.getTime()) {
                return undefined
              }
            }

            const isSelectedDate = selectedDate?.getDate() === date.getDate()
            const selecteDateStyle = isSelectedDate ? 'bg-primary text-white border-background' : ''

            return (
              <motion.span
                initial={{y: 100, opacity: 0 }}
                animate={{y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                key={index}
                onClick={(event) => onDate(event, date)}
                className={`hover:text-primary overflow-hidden bg-background hover:bg-primary hover:bg-opacity-5 hover:border-primary cursor-pointer p-10 border-2 border-foregorund flex text-3xl max-md:text-lg max-md:p-0 max-md:w-12 max-md:h-12 max-lg:text-2xl max-lg:p-5 max-lg:w-16 max-lg:h-12 items-center justify-center w-28 h-8 font-bold font-display uppercase ${selecteDateStyle}`}>
                  {currentDay}
                </motion.span>
              )
            }
          )
         }
      </motion.div>
    </div>
  )
}