import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from '@heroicons/react/solid';

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10 '>
      {/* Left */}
      <div className='relative flex items-center h-12 cursor-pointer my-auto'>
        <Image
          src='/images/linux-logo.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle */}
      <div className='flex items-center border-2 rounded-full py-2 md:first-line:border-2 md:shadow-sm'>
        <input
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='start your search'
        />
        <SearchIcon className='hidden md:inline-flex h-8  bg-red-800 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />
        <div className='flex items-center space-x-2 border-2 rounded-full p-2'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};
