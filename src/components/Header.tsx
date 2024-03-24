import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import Arrow from '@/assets/arrow-down.svg'

const Header = () => {
  return (
    <header className='w-full h-20 bg-primary-orange'>
      <div>
        <div>
          <div>
            <Image
             src={Logo}
             alt='logo'
            />
            <nav>
              <ul>
                <li>
                  <button>
                    <span>Para você</span>
                    <Image
                      src={Arrow}
                      alt='Arrow dropdown'
                    />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
