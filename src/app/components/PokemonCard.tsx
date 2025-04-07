'use client';
import Image from 'next/image';
import Link from 'next/link';

import { PokeType } from '@/app/[pokemon]/page';

type PokemonCardProps = {
  name: string;
  type: PokeType[];
  image: string;
};

export function PokemonCard({ name, type, image }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className='bg-gradient-to-br from-[#A7C7E7] via-[#B0D9F3] to-[#C1E4F4] border-4 border-[#A7C7E7] hover:border-[#B0D9F3] hover:shadow-xl rounded-3xl px-6 py-5 text-center transform hover:scale-105 transition-all duration-300 ease-in-out'
    >
      <h2 className='text-3xl font-extrabold capitalize text-[#4A90E2] drop-shadow-md mb-4'>
        {name}
      </h2>

      <div className='relative w-40 h-40 mx-auto mt-4 mb-4'>
        <div className='absolute -inset-2 bg-[#B0D9F3] rounded-full blur-2xl opacity-40 animate-pulse z-0'></div>
        <Image
          src={image}
          width={160}
          height={160}
          alt={name}
          className='relative z-10 object-contain'
        />
      </div>

      <div className='flex gap-2 justify-center flex-wrap'>
        {type.map((typeObj) => (
          <div
            key={typeObj.slot}
            className='bg-[#E3F2FD] px-4 py-2 rounded-full text-sm font-semibold text-[#4A90E2] shadow-md border border-[#A7C7E7]'
          >
            {typeObj.type.name}
          </div>
        ))}
      </div>
    </Link>
  );
}
