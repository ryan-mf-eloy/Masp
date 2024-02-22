import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import Button from './Button';

import { IoMdClose } from "react-icons/io";

export default function Modal({ isToggled, setToggled, children, style }: any){
  return (
    <AnimatePresence>
      {isToggled &&
        <motion.div
           onClick={() => setToggled(false)}
           animate={{ opacity: 1}}
           exit={{ opacity: 0 }}
           className="flex flex-row items-center justify-center bg-black z-20 bg-opacity-30 fixed top-0 bottom-0 left-0 right-0" >
          <motion.div 
            initial={{y: 10, x: "-50%", opacity: 0}}
            animate={{y: 50, opacity: 1}}
            exit={{ y: 100, opacity: 0 }}
            className="bg-white -top-12 left-[30rem] shadow-lg min-h-[35rem] max-w-[60rem] max-lg:left-[25rem] max-lg:max-w-[50rem] max-md:left-[20rem] max-md:max-w-[40rem] max-sm:left-[11.5rem] max-sm:max-w-[23rem] max-sm:gap-0 max-sm:p-5 max-sm:min-h-fit max-sm:justify-center w-full flex flex-col gap-5 p-10 items-center justify-start relative"
            style={style}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-row items-center justify-end w-full">
              <Button type='icon' onClick={() => setToggled(!isToggled)}>
                <IoMdClose />
              </Button>
            </div>

              {children}
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>
  )
}