'use client'

import { FormEvent, useState } from "react";

import Button from "./Button";
import InputText from "./InputText";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState<boolean>(false)

  /**
   * Fake newsletter
   */
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <>
      <section className="p-10 pt-16 pb-16 flex flex-row max-md:flex-col max-lg:flex-col max-xl:flex-col bg-black items-center justify-center">
        <h2 className="uppercase text-white text-4xl max-md:pb-5 max-lg:pb-5 max-md:text-2xl max-md:text-center max-lg:text-3xl max-lg:text-center max-xl:text-center font-bold font-display">Inscreva-se em nossa newsletter</h2>

        <form onSubmit={handleSubscribe} className="pt-5 pb-5 pl-5 w-[80rem] max-md:p-0 max-lg:p-0 max-md:justify-center max-lg:justify-center max-md:w-fit max-lg:w-fit flex flex-col items-center justify-end">
          {
            subscribed &&
            <h6 className="text-[#07de2e] bg-[#07de2e] bg-opacity-5 font-body w-fit font-semibold p-2 mb-5">
              Parabéns, agora você ficará por dentro das nossas notícias!
            </h6>
          }

          <div className="flex flex-row gap-1 max-md:flex-col max-lg:flex-col">
            <InputText className="w-96 min-h-14" placeholder="Digite seu e-mail" type="email" name="email" required={true} />
            <Button type="primary">Inscrever-se</Button>
          </div>
        </form>
      </section>
    </>
  );
}