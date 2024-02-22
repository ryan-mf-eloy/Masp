'use client'
import Image from "next/image";
import { useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";
/**
 * Icons
 */
import {
  MdMuseum,
  MdArrowRight,
  MdArrowLeft,
  MdOutlinePinDrop
} from "react-icons/md"
import { GrTicket, GrCalendar } from "react-icons/gr";
import { FaClock } from "react-icons/fa";
/**
 * Components
 */
import Button from "@/components/Button";
import Calendar from "@/components/Calendar";
import TimePicker from "@/components/TimePicker";
import TicketList from "@/components/TicketsList";
/**
 * Assets
 */
import maspImage from '../../../public/assets/images/masp-7.jpg'

export default function Ticket() {
  const tickets = [
    {
      title: 'Inteira + Contribuição Voluntária',
      description: 'Escolha essa opção caso queira contribuir com R$20,00 para a manutenção das atividades do MASP. Escolha as outras opções de ingressos "inteira" ou "meia entrada" caso não queira contribuir',
      price: 90,
    },
    {
      title: 'Inteira',
      description: '',
      price: 70,
    },
    {
      title: 'Meia Estudante',
      description: 'Apresente carteirinha, comprovante de matrícula ou cartão Jovem ID na entrada do museu.',
      price: 35,
    },
    {
      title: 'Meia Idoso',
      description: 'Apresente o documento (RG, CPF, CNH, Passaporte ou RNE) na entrada do museu.',
      price: 90,
    },
    {
      title: 'Meia Professor',
      description: 'Apresente o contracheque (holerite), crachá ou carteirinha na entrada do museu.',
      price: 90,
    },
    {
      title: 'Crianças menores de 11 anos',
      description: 'Apresente o documento (RG ou Certidão de Nascimento) na entrada do museu.',
      price: 90,
    },
    {
      title: 'AMEX Meia Inteira',
      description: 'Na compra de 1 (um) ingresso Amex, apresente seu ticket, cartão AMEX e retire outro ingresso cortesia para o mesmo dia e horário na bilheteria do museu.',
      price: 70,
    },
    {
      title: 'AMEX Meia Entrada',
      description: 'Na compra de 1 (um) ingresso Amex, apresente seu ticket, cartão AMEX, comprovante da "meia entrada" e retire outro ingresso cortesia para o mesmo dia e horário na bilheteria do museu.',
      price: 35,
    },
  ]
  const MAX_STEPS = 3

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedHour, setSelectedHour] = useState<string | null>(null)
  const [selectedTicketIndex, setSelectedTicketIndex] = useState<number | null>(null)

  const formatDate = useCallback((date: Date) => {
    const day = String(date.getDate())
    const formattedDay = `${day.length <= 1 ? `0${day}` : day}`

    const month = String(date.getMonth() + 1)
    const formattedMonth = `${month.length <= 1 ? `0${month}` : month}`

    const fomattedDate = `${formattedDay}.${formattedMonth}.${date.getFullYear()}`

    return fomattedDate
  }, [])

  const handleStep = useCallback((step: 'next' | 'prev') => {
    const existNextStep = currentStep + 1 <= MAX_STEPS
    if (step === 'next' && existNextStep) {
      const alreadyAnswerFirstStep = selectedDate !== null
      console.log(currentStep, alreadyAnswerFirstStep)
      if (currentStep === 1 && alreadyAnswerFirstStep) {
        setCurrentStep(currentStep + 1)
        return
      }
      const alreadyAnswerSecondStep = selectedHour !== null
      if (currentStep === 2 && alreadyAnswerSecondStep) {
        setCurrentStep(currentStep + 1)
        return
      }

      alert('Por favor, selecione uma data e horário para prosseguir.')
    }

    const existPreviousStep = currentStep - 1 >= 1
    if (step === 'prev' && existPreviousStep) {
      setCurrentStep(currentStep - 1)
    }
  }, [currentStep, selectedHour, selectedDate])

  const handleFinishSteps = useCallback((event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>) => {
    const alreadyAnswerThirdStep = selectedTicketIndex !== null
    if (alreadyAnswerThirdStep) {
      window.location.href= 'https://masp.byinti.com/?utm_source=site-masp&utm_medium=campaign&utm_campaign=site-masp#/checkout'
      return
    }

    alert('Por favor, selecione um ingresso para prosseguir com a compra.')
  }, [selectedTicketIndex])

  return (
    <main>
      <section className="flex pt-2 pb-10 flex-row max-md:flex-col max-lg:flex-col max-xl:flex-col justify-between items-center">
        <div className="w-96">
          <div className="max-w-96 min-w-96 min-h-[42rem] flex flex-col">
            <div className="p-10 flex-2 min-h-[32rem] min-w-96 bg-black">
             <h4 className="text-primary font-display font-bold text-4xl uppercase text-center">
                Masp
              </h4>
              <h5 className="text-white font-body font-thin text-2xl text-center">
                Exposições 2024
              </h5>
              <div className="flex flex-row gap-5 text-center border-b-2 border-white border-opacity-10 p-10">
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold flex gap-2 items-center uppercase pb-1">
                    <GrCalendar size={15} />
                    Data
                  </b> {
                    selectedDate ? formatDate(selectedDate) : '(Selecione)'
                  }
                </h6>
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold flex gap-2 items-center uppercase pb-1">
                  <FaClock size={15} />
                    Horário
                  </b> {
                    selectedHour ? selectedHour : '(Selecione)'
                  }
                </h6>
              </div>
              <div className="text-center flex flex-col items-center justify-center pb-10 pt-10 border-b-2 border-white border-opacity-10">
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold uppercase flex items-center gap-2 pb-2 justify-center text-white">
                    <GrTicket />
                    Ingresso
                  </b>
                  {selectedTicketIndex !== null ? tickets[selectedTicketIndex].title : '(Selecione)'}
                </h6>
              </div>
              <div className="text-center flex flex-col items-center justify-center pt-10">
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold uppercase pb-2 flex items-center gap-2 justify-center">
                    <MdOutlinePinDrop size={22} />
                    Local
                  </b>
                  Av. Paulista, 1578, São Paulo, Brasil
                </h6>
              </div>
              
            </div>

            <div className="flex-1 flex items-center justify-center min-w-96 min-h-48 bg-black border-t-[15px] border-dashed border-background"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, #000000, #0000002a),
                  url("${maspImage.src}")
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }}  
            >
              <MdMuseum  className="text-white" size={50} />
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen max-md:min-h-fit max-lg:min-h-fit max-xl:min-h-fit">
        <div className="flex flex-row gap-2 max-md:justify-center max-md:pt-10 max-md:pl-0 max-lg:justify-center max-lg:pt-10 max-lg:pl-0 max-xl:justify-center max-xl:pt-10 max-xl:pl-0 items-center justify-end pl-10">
            <Button type="outline" onClick={() => handleStep('prev')}>
              <MdArrowLeft size={30} />
              Anterior
            </Button>

              { currentStep === 3
              ? 
              <Button
                onClick={(event) => handleFinishSteps(event)}
                type="primary">
                  Finalizar
                  <MdArrowRight size={30} />
                </Button>
              : 
                <Button type="primary" onClick={() => handleStep('next')}>
                  Próximo
                  <MdArrowRight size={30}></MdArrowRight>
                </Button>
              }
          </div>

          { currentStep === 1 &&
            <div className="flex  flex-col min-h-screen w-full pl-10 pr-10 max-md:p-0 max-md:min-h-fit max-lg:min-h-fit max-md:justify-center max-md:items-center max-lg:justify-center max-lg:items-center max-xl:justify-center max-xl:items-center">
              <h1 className="text-3xl font-display uppercase font-bold max-md:pl-10 max-md:pr-10">Escolha uma data</h1>
              <Calendar selectedDate={selectedDate!} onDate={(_, date) => setSelectedDate(date)} />
            </div>
          }
          { currentStep === 2 &&
            <div className="min-h-screen w-full pl-10 pr-10 max-md:min-h-fit max-lg:min-h-fit">
              <h1 className="text-3xl font-display uppercase font-bold">Escolha um horário</h1>
              <p className="text-lg pb-8">Esses são os horários disponíveis para essa data</p>
              <TimePicker
                onSelect={(_, hour) => setSelectedHour(hour)}
                selectedHour={selectedHour!}
                availabeTimes={[
                '10:00',
                '10:30',
                '11:00',
                '11:30',
                '12:00',
                '13:00',
                '13:30',
                '14:30',
                '15:30',
                '16:00',
                '16:30',
                '17:30',
                '18:00',
                '18:30',
                '19:00',
              ]} />
            </div>
          }
          { currentStep === 3 &&
            <div className="min-h-96 w-full pl-10 pr-10">
              <h1 className="text-3xl font-display uppercase font-bold">Escolha um ou mais ingressos</h1>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="flex flex-row flex-wrap justify-start items-center gap-5 pt-2 overflow-auto max-h-screen max-md:max-h-full max-md:justify-center max-lg:justify-center max-xl:justify-center max-lg:max-h-full max-xl:max-h-full"
              >
                <TicketList
                  items={tickets}
                  selectedItemIndex={selectedTicketIndex!}
                  onSelect={(_, index) => setSelectedTicketIndex(index)}
                />
              </motion.div>
            </div>
          }
        </div>
      </section>

      <Image className="w-full" src={maspImage.src} alt="Masp" width={1000} height={1000} />
    </main>
  );
}