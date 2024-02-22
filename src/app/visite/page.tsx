import Link from "next/link";
/**
 * Icons
 */
import { GrCalendar } from "react-icons/gr";
/**
 * Components
 */
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";

export default function Visit() {
  return (
    <main>
      <section className="pb-5">
        <iframe className="w-full h-screen max-md:h-96 border-2 border-foreground hover:border-black" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.180465025963!2d-46.6565244!3d-23.5619612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ceb1eb771f%3A0xe904f6a669744da1!2sMuseu%20de%20Arte%20de%20S%C3%A3o%20Paulo%20Assis%20Chateaubriand!5e0!3m2!1spt-BR!2sbr!4v1708538203778!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
    </main>
  )
}