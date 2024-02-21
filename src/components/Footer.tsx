import Image from 'next/image'
/**
 * Components
 */
import { Social } from './Social'
/**
 * Assets
 */
import govLogo from '../../public/assets/images/logo-gov.png'
import itauLogo from '../../public/assets/images/partners/itau-logo.png'

export default function Footer() {
  return (
    <footer className="p-20 flex flex-row items-start justify-between">
      <div className="flex-1 flex-col justify-center items-center">
        <h5 className="text-2xl uppercase font-bold font-body pb-2">Informações</h5>
        <Social />
        <ul className="text-xl pt-2">
          <li><b>Endereço:</b> Av. Paulista, 1578, São Paulo, Brasil</li>
          <li><b>CEP:</b> 01310-200</li>
          <li><b>Contato:</b> +55 11 3149 5959</li>
          <li><b>CNPJ:</b> 60.664.745/0001-87</li>
        </ul>
      </div>

      <div className="flex-1 ml-10 mr-10 flex flex-col justify-start items-center">
        <h5 className="text-2xl text-center uppercase font-bold font-body pb-2">Parceiros Estratégicos</h5>
        <Image className="grayscale" src={itauLogo.src} alt="Itaú" width={50} height={50} />
      </div>

      <div className="flex-2 h-52 flex flex-col justify-center items-baseline">
        <Image src={govLogo.src} alt="Ministério Da Cultura" width={500} height={100} />
      </div>
    </footer>
  )
}