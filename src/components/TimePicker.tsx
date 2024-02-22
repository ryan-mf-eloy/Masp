import { motion } from "framer-motion";
import { MouseEvent } from "react";

export default function TimePicker({
  availabeTimes,
  onSelect,
  selectedHour
}: {
  availabeTimes: string[],
  selectedHour?: string,
  onSelect: (event: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, time: string) => void
  }) {
  
  const times: { morning: string[], afternoon: string[], evening: string[] } = {
    morning: [],
    afternoon: [],
    evening: []
  }
  
  availabeTimes.forEach(time => {
    const [hour, minutes] = time.split(':')

    const isMorning = Number(hour) < 12
    if (isMorning) {
      times.morning.push(time)
    }

    const isAfternoon = Number(hour) >= 12 && Number(hour) < 18
    if (isAfternoon) {
      times.afternoon.push(time)
    }

    const isEvening = Number(hour) >= 18 && Number(hour) < 24
    if (isEvening) {
      times.evening.push(time)
    }
  }, {})

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="flex flex-row gap-5 items-center justify-start flex-wrap select-none"
    >
      <div className="flex flex-col w-full">
        <h6 className="text-lg font-bold font-display pb-2">Manhã</h6>
        <div className="flex flex-row gap-5">
          {
            times.morning.map((time, index) => {
              const isSelectedHour = selectedHour === time
              const blackBackground = isSelectedHour ? 'bg-black' : 'bg-primary'

              return (
                <span
                  key={index}
                  onClick={(event) => onSelect(event, time)}
                  className={`hover:bg-black font-bold cursor-pointer ${blackBackground} flex items-center justify-center p-2 min-w-20 max-h-8 text-center text-white`}>
                  {time}
                </span>
              )
            })
          }
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h6 className="text-lg font-bold font-display pb-2 mt-10">Tarde</h6>
        <div className="flex flex-row gap-5">
          {
            times.afternoon.map((time, index) => {
              const isSelectedHour = selectedHour === time
              const blackBackground = isSelectedHour ? 'bg-black' : 'bg-primary'

              return (
                <span
                  key={index}
                  onClick={(event) => onSelect(event, time)}
                  className={`hover:bg-black font-bold cursor-pointer ${blackBackground} flex items-center justify-center p-2 min-w-20 max-h-8 text-center text-white`}>
                  {time}
                </span>
              )
            })
          }
        </div>
      </div>

      <div className="flex flex-col w-full">
        <h6 className="text-lg font-bold font-display pb-2 mt-10">Noite</h6>
        <div className="flex flex-row gap-5">
          {
            times.evening.map((time, index) => {
              const isSelectedHour = selectedHour === time
              const blackBackground = isSelectedHour ? 'bg-black' : 'bg-primary'

              return (
                <span
                  key={index}
                  onClick={(event) => onSelect(event, time)}
                  className={`hover:bg-black font-bold cursor-pointer ${blackBackground} flex items-center justify-center p-2 min-w-20 max-h-8 text-center text-white`}>
                  {time}
                </span>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  );
}