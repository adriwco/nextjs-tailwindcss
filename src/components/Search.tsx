import React from 'react'
import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

const Search = () => {
  return (
      <label className='flex items-center gap-4'>
        <Image src={IconSearch} alt='Search'/> 
        <input type="text" className='bg-transparent outline-none text-white placeholder:text-white pr-5' placeholder='Buscar...'/>
      </label>
  )
}

export default Search
