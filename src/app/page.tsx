import Image from "next/image";
import Link from "next/link";
/**
 * Components
 */
import Button from "@/components/Button";
import ImagesSlider from "@/components/Slider";
import Accordion from "@/components/Accordion";
import Newsletter from "@/components/Newsletter";

/**
 * Icon
 */
import { GrCalendar } from "react-icons/gr";
/**
 * Assets
 */
import sliderImage1 from '../../public/assets/images/masp-5.png';
import sliderImage2 from '../../public/assets/images/masp-9.jpg';
import sliderImage3 from '../../public/assets/images/masp-3.png';
import sliderImage4 from '../../public/assets/images/masp-1.jpg'
import sliderImage5 from '../../public/assets/images/masp-2.jpg';

import secondSectionImage from '../../public/assets/images/masp-10.jpg';
import lastSectionImage from '../../public/assets/images/masp-11.jpg';

export default function Home() {
  return (
    <>
      <main>
        <section>
          <ImagesSlider
            className="min-h-screen"
            images={[
              sliderImage1.src,
              sliderImage2.src,
              sliderImage3.src,
              sliderImage4.src,
              sliderImage5.src
            ]
          } />
        </section>

        <section className="overflow-hidden bg-black flex items-center justify-center min-h-screen">
          <div className="flex-1 min-h-screen bg-background p-20 flex flex-col gap-5 items-center justify-center">
            <p>O MASP apresenta a mostra Gran Fury: arte não é o bastante, que ocupa a galeria localizada no 1o subsolo do museu. Com curadoria de André Mesquita, curador, MASP, e assistência de David Ribeiro, supervisor, MASP, a exposição reúne 77 obras, entre elas fotocópias e impressões digitais sobre papel. A mostra discute os limites e os alcances das campanhas gráficas do coletivo Gran Fury, bem como a ideia da arte como estratégia no campo ativista, impulsionado por pessoas queer, para ampliar a consciência sobre o HIV/aids.</p>

            <p>Gran Fury (Nova York, 1988—1995) foi um coletivo de artistas considerado referência para as práticas de ativismo artístico das décadas de 1980 e 1990, que emergiu a partir da organização ACT UP (AIDS Coalition to Unleash Power) [Coalizão da aids para libertar o poder], composta por indivíduos e grupos de afinidade dedicados a tornar criticamente público o silêncio e a negligência do governo dos Estados Unidos em relação ao HIV/aids. Gran Fury produziu campanhas gráficas e intervenções públicas em torno das questões relacionadas à crise do hiv/AIDS, servindo visualmente ao ACT UP em protestos e ações de desobediência civil. O coletivo encerrou suas atividades em 1995, e seu arquivo encontra-se na New York Public Library.</p>

            <p>Em boa parte de sua trajetória, o Gran Fury contou, em sua formação, com Avram Finkelstein, Donald Moffett, John Lindell, Loring McAlpin, Mark Simpson (1950-1996), Marlene McCarty, Michael Nesline, Richard Elovich, Robert Vazquez-Pacheco e Tom Kalin. O grupo se autodescrevia como “um bando de indivíduos unidos na raiva e comprometidos a explorar o poder da arte para acabar com a crise da aids”. Seus membros recusavam-se a se assumir como artistas ou a aparecer como criadores individuais e desejavam escapar dos espaços de arte consagrados.</p>

            <a href="https://www.masp.org.br/exposicoes/gran-fury-arte-nao-e-o-bastante" target="_blank">
              <Button type="outline">Continuar lendo...</Button>
            </a>
          </div>
          <div className="overflow-hidden min-h-screen flex-1 flex items-center justify-center">
            <Image className="scale-150" src={secondSectionImage.src} alt="Gran Fury: arte não é o bastante" width={1000} height={100} />
          </div>
        </section>

        <section className="overflow-hidden bg-primary flex flex-row gap-10 min-h-screen p-10">
          <div className="">
            <h3 className="text-white font-display leading-[10rem] uppercase text-[10rem]">
              Seja um amigo
            </h3>
            <h3 className="text-black font-display uppercase text-6xl">
              Masp
            </h3>
          </div>
          <div className="w-[96rem] h-fit bg-black pt-10 pr-10 pb-10 pl-5">
            <h5 className="text-white font-display uppercase text-right text-3xl">
              Apoie o museu e tenha acesso a uma programação cultural especial!
            </h5>

            <p className="text-gray text-right p-2 mt-5 ml-20">
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
                    <li><b>Terça:</b> 10h U+002d 20h (Entrada até as 19h)</li>
                    <li><b>Quarta U+002d Domingo:</b> 10h U+002d 18h (entrada até as 17h)</li>
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
