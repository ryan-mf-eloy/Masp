import Image from "next/image";

import { MdMuseum } from "react-icons/md";

import maspImage from '../../../public/assets/images/masp-7.jpg'

export default function Ticket() {
  return (
    <main>
      <section className="flex pt-2 pb-10 flex-row justify-between items-center">
        <div className="w-96">

        <div className="max-w-96 min-w-96 min-h-[42rem] flex flex-col">
            <div className="p-10 flex-2 min-h-[32rem] min-w-96 bg-black">
             <h4 className="text-primary font-display font-bold text-4xl uppercase text-center">
                Masp
              </h4>
              <h5 className="text-white font-body font-thin text-2xl text-center">
                Exposições 2024
              </h5>
              <div className="flex flex-row gap-5 text-center border-b-2 border-white border-opacity-15 p-10">
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold uppercase">Data</b> 22.02.2024
                </h6>
                <h6 className="text-white font-body font-thin text-lg">
                  <b className="font-bold uppercase">Horário</b> 22:00
                </h6>
              </div>
              <div className="text-center flex flex-col items-center justify-center p-10">
                <h6 className="text-white font-body font-thin text-lg">
                <b className="font-bold uppercase flex items-center justify-center">Local</b>
                  Av. Paulista, 1578, São Paulo, Brasil
                </h6>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center min-w-96 min-h-48 bg-black border-t-[15px] border-dashed border-background">
              <MdMuseum  className="text-white" size={50} />
            </div>
          </div>
        </div>

        <div className="w-[60rem] min-h-screen">
          
        </div>
      </section>

      <Image className="w-full" src={maspImage.src} alt="Masp" priority={true} width={1000} height={1000} />
    </main>
  );
}