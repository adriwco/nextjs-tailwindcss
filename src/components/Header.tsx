import Image from 'next/image'

import ItemMenu from './ItemMenu'
import Search from './Search'
import Container from './Container'

import Logo from '@/assets/logo.svg'
import IconUser from '@/assets/icon-user.svg'

const Header = () => {
  return (
    <header className='relative flex items-center w-full h-20 bg-primary-orange'>
        <Container>
          <div className='grid grid-cols-[3fr,1fr] items-center pr-3'>
          <div className='flex items-center gap-14 mr-[218px]'>
            <Image
             src={Logo}
             alt='logo'
            />
            <nav>
              <ul>
                <li className='flex items-center gap-10'>
                  <ItemMenu name='Para você'/>
                  <ItemMenu name='Para empresas'/>
                  <ItemMenu name='Serviços'/>
                  <ItemMenu name='Ajuda'/>
                </li>
              </ul>
            </nav>
          </div>
          <div className='absolute right-0 mr-[230px]'>
            <Search/>  
          </div>
          <button className='absolute right-0 top-0 flex items-center gap-4 bg-primary-blue h-full px-10'>
              <Image src={IconUser} alt='Icon user' />
              <span className='text-white font-bold'>Acessar conta</span>
          </button>
          </div>
        </Container>
    </header>
  )
}

export default Header
