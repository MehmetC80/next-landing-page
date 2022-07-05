import Image from 'next/image';

export const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
      <Image src='/images/banner01.jpg' layout='fill' objectFit='cover' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg   text-white '>
          Not sure where to go? Perfect.
        </p>
        <button
          className='text-purple-900 bg-white shadow-lg font-bold my-3 rounded-full px-10 py-4
         hover:shadow-black active:scale-90 transition duration-150'
        >
          I'am flexable
        </button>
      </div>
    </div>
  );
};
