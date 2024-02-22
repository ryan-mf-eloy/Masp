import Image from "next/image";
import Link from "next/link";
/**
 * Components
 */
import Button from "@/components/Button";
import ImagesSlider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import Newsletter from "@/components/Newsletter";
import Timeline, { TimelineItem } from "@/components/Timeline";
/**
 * Icons
 */
import { GrCalendar } from "react-icons/gr";
/**
 * Assets
 */
import sliderImage1 from '../../public/assets/images/masp-5.png';
import sliderImage2 from '../../public/assets/images/masp-1.jpg';
import sliderImage3 from '../../public/assets/images/masp-3.png';
import sliderImage4 from '../../public/assets/images/masp-9.jpg'
import sliderImage5 from '../../public/assets/images/masp-2.jpg';

import item1Image from '../../public/assets/images/masp-10.jpg'
import item2Image from '../../public/assets/images/masp-9.jpg'
import item3Image from '../../public/assets/images/masp-12.jpg'
import item4Image from '../../public/assets/images/masp-2.jpg'
import item5Image from '../../public/assets/images/masp-3.png'

import lastSectionImage from '../../public/assets/images/masp-11.jpg';


export default function Home() {
  const items: TimelineItem[] = [
    {
      title: "GRAN FURY: ARTE NÃO É O BASTANTE",
      date: "23.02 – 09.06.2024",
      description: "O MASP apresenta a mostra Gran Fury: arte não é o bastante, que ocupa a galeria localizada no 1º subsolo do museu. Com curadoria de André Mesquita, curador, MASP, e assistência de David Ribeiro, supervisor, MASP, a exposição reúne 77 obras, entre elas fotocópias e impressões digitais sobre papel. A mostra discute os limites e os alcances das campanhas gráficas do coletivo Gran Fury, bem como a ideia da arte como estratégia no campo ativista, impulsionado por pessoas queer, para ampliar a consciência sobre o HIV/aids. ",
      type: 'Exposições',
      img: item1Image.src
    },
    {
      title: "SALA DE VÍDEO: MASI MAMANI / BARTOLINA XIXA",
      date: "23.02 – 14.04.2024",
      description: "O MASP apresenta a Sala de vídeo: Masi Mamani / Bartolina Xixa, que exibe os vídeos Ramita Seca, La colonialidad permanente (2019), Bartolina Xixa, una drag de La Puna (2019) e Crudo (2020). Com curadoria de Matheus de Andrade, assistente curatorial, MASP, as obras registram uma série de performances da artista argentina, as quais denunciam estruturas coloniais na intersecção entre sua pesquisa antropológica, experiências pessoais e expressão artística.",
      type: 'Exposições',
      img: item2Image.src
    },
    {
      title: "SALA DE VÍDEO: CECILIA VICUÑA",
      date: "15.12.2023 – 11.02.2024",
      description: "O MASP apresenta a Sala de vídeo: Cecilia Vicuña, que exibe o vídeo Quipu Mapocho (2017). Com curadoria de Kássia Borges, curadora-adjunta de arte indígena, MASP, a obra registra uma série de performances da artista ao longo do rio Mapocho, no Chile, que trazem perspectivas sobre a vida, a morte, a cultura, a memória e a história deste território.",
      type: 'Exposições',
      img: item3Image.src
    },
    {
      title: "HISTÓRIAS INDÍGENAS",
      date: "20.10.2023 – 25.02.2024",
      description: "O MASP em colaboração com o Kode Bergen Art Museum organiza uma grande exposição coletiva intitulada Histórias indígenas.",
      type: 'Exposições',
      img: item4Image.src
    },
    {
      title: "ACERVO EM TRANSFORMAÇÃO",
      date: "DESDE 2015",
      description: "Acervo em transformação é o título da exposição de longa duração da coleção do MASP. As obras são instaladas nos cavaletes de cristal — placas de vidro encaixadas em blocos de concreto — que ficam dispostos em fileiras sem divisórias na sala ampla do segundo andar do museu. O espaço aberto, fluido e permeável da galeria oferece múltiplas possibilidades de acesso e de leitura, eliminando hierarquias e roteiros predeterminados. Retirar as telas das paredes e colocá-las nos cavaletes possibilita ao visitante caminhar entre elas, como em uma floresta de obras que parecem estar suspensas no ar.",
      type: 'Exposições',
      img: item5Image.src
    }
  ]

  return (
    <>
      <main>
        <section>
          <ImagesSlider
            className="min-h-screen max-md:min-h-72 max-lg:min-h-[40rem]"
            images={[
              sliderImage1.src,
              sliderImage2.src,
              sliderImage3.src,
              sliderImage4.src,
              sliderImage5.src
            ]
          } />
        </section>

        <section className="overflow-hidden flex items-center justify-center min-h-screen">
          <div className="flex-1 min-h-screen bg-background p-20 max-md:p-2 flex flex-col items-center justify-center">
            <Timeline
              items={items}
            />
          </div>
          <div className="overflow-hidden max-lg:hidden min-h-screen flex-1 flex items-center justify-center">
            <ImagesSlider
              className="min-h-screen"
              images={[
                item1Image.src,
                item2Image.src,
                item3Image.src,
                item4Image.src,
                item5Image.src
              ]
            } />
          </div>
        </section>

        <section className="overflow-hidden bg-primary flex flex-row max-md:flex-col max-md:min-h-fit max-md:p-0 max-lg:p-0 max-lg:flex-col max-lg:min-h-96 max-xl:flex-col max-xl:min-h-96 gap-10 min-h-screen p-10">
          <div>
            <h3 className="text-white font-display max-md:text-3xl max-md:leading-normal max-lg:pt-10 max-lg:pl-10 max-lg:text-3xl max-lg:leading-normal max-xl:text-3xl max-xl:leading-normal leading-[10rem] uppercase text-[10rem]">
              Seja um amigo
            </h3>
            <h3 className="text-black font-display uppercase text-6xl max-md:text-3xl max-lg:text-3xl max-xl:text-3xl max-lg:pl-10">
              Masp
            </h3>
          </div>
          <div className="w-[96rem] h-fit max-md:w-full max-lg:w-full max-xl:w-full bg-black pt-10 pr-10 pb-10 pl-5">
            <h5 className="text-white font-display max-md:text-2xl uppercase text-right max-md:text-left max-lg:text-left max-xl:text-left text-3xl">
              Apoie o museu e tenha acesso a uma programação cultural especial!
            </h5>

            <p className="text-gray text-right p-2 mt-5 ml-20 max-md:text-1xl max-md:m-0 max-md:text-left max-lg:text-1xl max-lg:m-0 max-lg:text-left max-xl:text-1xl max-xl:m-0 max-xl:text-left">
              Apoie os projetos essenciais para o museu e tenha benefícios especiais, como entrada ilimitada e sem filas durante todo o ano, encontros com programação cultural, descontos no MASP Escola, Loja, Restaurante, entre outros.
            </p>
          </div>
        </section>

        <section>
          <Accordion
            items={[
              {
                title: "Horários",
                content: <div className="max-w-96">
                  <ul>
                    <li><b>Segunda:</b> Fechado</li>
                    <li><b>Terça:</b> 10h - 20h (Entrada até as 19h)</li>
                    <li><b>Quarta - Domingo:</b> 10h - 18h (entrada até as 17h)</li>
                  </ul>

                  <p className="pt-5 pb-5">Com exceção das segundas-feiras, o MASP abre normalmente em dias de feriado, exceto nos dias 24 e 25.12 (feriado de Natal) e nos dias 31.12 e 1.1 (feriado do ano novo), dias em que permanece fechado.  Alterações de horário são comunicadas através das mídias sociais do museu. A entrada no museu é gratuita para pessoas com deficiência e acompanhante.
                  </p>

                  <p className="pb-5">O agendamento online, inclusive para os dias gratuitos, continua sendo obrigatório e deve ser feito pelo link: <Link className="text-primary font-bold" href="/ingressos">Ingressos</Link>.</p>

                  <Link href="/agenda">
                    <Button type="primary">
                      <GrCalendar size={16} /> Ver agenda
                    </Button>
                  </Link>
                </div>
              },
              {
                title: "Ingressos",
                content: <div className="max-w-96">
                  <h6 className="font-display uppercase pb-2">entrada gratuita para:</h6>
                  <ul className="list-square pl-5 flex flex-col gap-5">
                    <li className="capitalize font-bold">quintas | até 22.2.2024</li>
                    <li className="capitalize"><b>nubank</b> - terças (válido para todos os visitantes)</li>
                    <li className="capitalize"><b>b3</b> - primeira quinta do mês grátis</li>
                    <li className="capitalize">para pessoas com deficiências e um acompanhante</li>
                    <li className="capitalize">Amigo masp e crianças com idade igual ou inferior a 10 anos com comprovante*</li>
                  </ul>

                  <h6 className="font-display uppercase pt-5 pb-2">Outras informações</h6>
                  <ul className="list-square pl-5 flex flex-col gap-5">
                    <li>A bilheteria permanece fechada e a compra de ingressos, com dia e horário marcados, será exclusivamente online, sem cobrança de taxa de conveniência.</li>
                    <li>Menores de 14 anos não podem entrar desacompanhados no museu.</li>
                    <li>*A cortesia para crianças com idade igual ou inferior a 10 anos deve ser solicitada na bilheteria do MASP com o comprovante de identidade.</li>
                    <li>O ingresso dá direito a visitar todas as exposições em cartaz no dia da visita.</li>
                    <li>O MASP aceita todos os cartões de crédito, débito, e também o Vale Cultura.</li>
                    <li>Informamos que não é possível realizar o reagendamento de ingressos. Para efetuar a troca de datas, o visitante deve cancelar sua compra e realizar uma nova. A venda de ingressos é feita pela plataforma INTI. Para o cancelamento de compra, problemas com pagamentos e situações correlatas, entre em contato com suporte@byinti.com.</li>
                  </ul>

                  <span className="text-primary-shadow pl-5 pt-5 flex">
                    Cães-guia
                    Em observância à Lei nº. 11.126/2005, ao Decreto nº. 5.904/2006 e à demais legislação aplicável ao Estado e ao Município de São Paulo, é permitida a entrada de cães-guia no Museu, desde que atendidos os requisitos dos normativos.
                  </span>
                </div>
              },
              {
                title: "Programa de gratuidade",
                content: <div className="flex flex-col gap-5 pt-5">
                  <p>Você sabia que o MASP oferece ingressos gratuitos entre quartas e sábados, para grupos de instituições públicas, órgãos de terceiro setor, projetos e programas sociais?</p>

                  <p>O Programa de gratuidade para grupos tem o objetivo de ampliar o acesso de diferentes públicos à programação do museu. Para se beneficiar, a instituição deverá retirar os ingressos no link e, na sequência, preencher um formulário e enviar um documento que comprove o caráter público ou sem fins lucrativos da instituição. Caso o formulário não seja preenchido corretamente, com pelo menos 72h antes da visita, os ingressos serão cancelados.</p>

                  <p>Em caso de dúvidas, fale conosco: gratuidade@masp.org.br</p>

                  <p>“Em quais dias e horários estão disponíveis os ingressos para os grupos que têm direito à gratuidade?”Os ingressos do programa de gratuidade estão disponíveis entre quartas e sábados, com exceção da primeira quinta-feira de cada mês, sempre às 10h15, 11h15, 12h15 e 13h15.</p>

                  <p>Às segundas o museu é fechado para manutenção. Às terças e primeiras quintas de cada mês todas as pessoas entram gratuitamente, mediante reserva antecipada de ingressos. Para que os grupos tenham uma melhor experiência no MASP, não recomendamos que venham nesses dias, devido ao grande número de visitantes espontâneos.</p>

                  <p>Aos domingos também não disponibilizamos ingressos para os grupos que têm direito à gratuidade, tendo em vista o volume de pessoas circulando na Avenida Paulista e não ser um dia ideal para a visitação em grupo.</p>

                  <p>“Queremos uma visita guiada, como agendamos uma mediação?” O MASP não oferece visitas guiadas, portanto, incentivamos que a visita seja conduzida pelo profissional responsável pelo grupo. É possível consultar os conteúdos produzidos pelo museu no próprio site e nas plataformas: YouTube e SoundCloud. Além disso, professores têm desconto especial no MASP loja.</p>

                  <p>“Sou de instituição privada, como agendar a visita do meu grupo?” A reserva de ingressos para escolas privadas ou instituições com fins lucrativos é através da nossa bilheteria online. Para dúvidas sobre a compra de ingressos, escreva para ajuda@byinti.com Todos os estudantes de escolas particulares com idade igual ou menor a dez anos têm direito à gratuidade da entrada. É necessário reservar os ingressos no link e apresentar documento comprobatório da idade de todas as crianças na bilheteria do MASP.</p>
                </div>
              },
              {
                title: "Como chegar",
                content: <div className="flex flex-col gap-5">
                  <ul>
                    <h6 className="font-display uppercase pt-5 pb-2">Metrô</h6>
                    <li>Linha Verde <b>&gt;</b> Estação Trianon <b>&gt;</b> MASP</li>

                    <h6 className="font-display uppercase pt-5 pb-2">De Ônibus</h6>
                    <li>Visite o site da <a className="font-bold text-primary" target="_blank" href="http://www.sptrans.com.br/">SP Trans</a></li>

                    <h6 className="font-display uppercase pt-5 pb-2">De Carro</h6>
                    <li>Estacionamento conveniado:</li>
                    <h6 className="font-display uppercase">Car Park</h6>
                    <li>Alameda Casa Branca 41</li>
                    <li>R$ 18 até 12h</li>
                    <li><b>SEG - SEX:</b> 6-23h</li>
                    <li><b>SÁB, DOM e FERIADO:</b> 8h-20h</li>

                    <h6 className="font-display uppercase pt-5 pb-2">Informações</h6>
                    <li><b>Endereço:</b> Av. Paulista, 1578, São Paulo, Brasil</li>
                    <li><b>CEP:</b> 01310-200</li>
                    <li><b>Contato:</b> +55 11 3149 5959</li>
                  </ul>
                </div>
              }
            ]}
          />
        </section>

        <section>
          <div>
            <Image className="w-full" src={lastSectionImage.src} alt="Masp" width={1500} height={100} />
          </div>
        </section>
        
        <Newsletter />
      </main>
    </>
  );
}
