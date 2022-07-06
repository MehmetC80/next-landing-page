import Image from 'next/image';
export const SmallCard = ({ idCode, title, rank }) => {
  return (
    <div
      className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-slate-200
     transition transform duration-150 hover:scale-105 ease-out'
    >
      {/* Left */}
      <div className='relative h-40 w-40 '>
        <Image
          className='rounded-lg'
          src={`http://edwardtanguay.netlify.app/share/images/books/${idCode}.png`}
          layout='fill'
        />
      </div>
      {/* Right */}
      <div>
        <h2>{title}</h2>
        <h3 className='text-gray-500'>{rank}</h3>
      </div>
    </div>
  );
};
