import Container from "./Container"
import Image from 'next/image'
import PhoneIcon from '@/assets/icon-phone.svg'
import MaoIcon from '@/assets/icon-solutions.svg'
import InvestIcon from '@/assets/icon-options.svg'
import CartIcon from '@/assets/icon-card.svg'
import ImagePhoneS from '@/assets/phone.png'
import List from "./List"
export interface ListItem {
  icon: string;
  description: string;
}
const items: ListItem[] = [
  { icon: PhoneIcon, description: 'Acompanhar sua conta, fazer transferências e pagamentos de onde estiver.' },
  { icon: MaoIcon, description: 'Soluções de empréstimos e renegociação para organizar suas finanças.' },
  { icon: InvestIcon, description: 'Diversas opções de investimentos de acordo com o seu perfil de investidor.' },
  { icon: CartIcon, description: 'Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.' },
];

const SectionServices = () => {
  return (
    <section className="relative">
      <Container>
        <div className="flex-1 max-w-[594px] py-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e, o melhor, no conforto da sua casa.</p>
          <List items={items}  />
        </div>
      </Container>
      <div className="absolute top-0 right-0 w-[32%] h-full bg-gray-phone flex items-center">     
        <Image src={ImagePhoneS} alt="" className="translate-x-[-40%]"/>
      </div>
    </section>
  )
}

export default SectionServices
