'use client';
import Link from 'next/link';

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      className='bg-purple-300 hover:shadow-xl transition-shadow rounded-xl border border-orange-200 px-6 py-5 text-center'
    >
      <h2 className='text-2xl font-semibold capitalize text-gray-800'>
        {name}
      </h2>
    </Link>
  );
}
