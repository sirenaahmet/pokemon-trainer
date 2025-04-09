'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useTrainer } from '@/app/context/TrainerContext';

import { Pokemon, PokeStats } from '@/types/pokemonTypes';

export function PokemonCard({ id, name, type, image, weight, stats }: Pokemon) {
  const { team, addPokemonToTeam, removePokemonFromTeam } = useTrainer();
  const inTeam = team.some((p) => p.name === name);

  return (
    <div className='relative bg-gradient-to-br from-[#A7C7E7] via-[#B0D9F3] to-[#C1E4F4] border-4 border-[#A7C7E7] hover:border-[#B0D9F3] hover:shadow-xl rounded-3xl px-6 py-5 text-center'>
      <button
        onClick={(e) => {
          e.preventDefault();
          inTeam
            ? removePokemonFromTeam({ id, name, type, image })
            : addPokemonToTeam({ id, name, type, image });
        }}
        className='z-10 absolute top-2 right-2 text-white bg-white p-2 rounded-full shadow-md hover:bg-orange-300'
      >
        {inTeam ? '➖' : '➕'}
      </button>

      <Link href={`/${name}`}>
        <h2 className='text-3xl font-extrabold capitalize text-[#4A90E2] drop-shadow-md mb-4'>
          {name}
        </h2>

        <div className='relative w-40 h-40 min-w-[160px] mx-auto mt-4 mb-4 transform hover:scale-125 transition-all duration-300 ease-in-out'>
          <Image
            src={image}
            width={200}
            height={200}
            alt={name}
            className='relative z-10 object-contain'
          />
        </div>

        <div className='flex gap-2 justify-center flex-wrap mb-4'>
          {type &&
            type.map((typeObj) => (
              <div
                key={typeObj.slot}
                className='bg-[#E3F2FD] px-4 py-2 rounded-full text-sm font-semibold text-[#4A90E2] shadow-md border border-[#A7C7E7]'
              >
                {typeObj.type.name}
              </div>
            ))}
        </div>

        <div className='flex flex-col mb-4 gap-2'>
          {weight && (
            <div className='flex justify-between py-1 gap-20'>
              <p className='text-lg font-medium text-gray-700'>Weight</p>
              <p className='text-xl font-semibold text-gray-900'>{weight}</p>
            </div>
          )}
          {stats &&
            stats.map((statobj: PokeStats) => (
              <div
                key={statobj.stat.name}
                className='flex justify-between py-1 gap-20'
              >
                <p className='text-lg font-medium text-gray-700 capitalize'>
                  {statobj.stat.name}
                </p>
                <p className='text-xl font-semibold text-gray-900'>
                  {statobj.base_stat}
                </p>
              </div>
            ))}
        </div>
      </Link>
    </div>
  );
}
