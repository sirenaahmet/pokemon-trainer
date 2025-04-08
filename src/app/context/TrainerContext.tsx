'use client'

import { Pokemon } from "@/app/components/PokemonList";
import { useContext } from "react";
import { createContext } from "react";
import { ReactNode } from "react";
import { useState } from "react";


type TrainerContextType = {
  team: Pokemon[];
  addPokemonToTeam: (pokemon: Pokemon) => void;
  removePokemonFromTeam: (pokemon: Pokemon) => void;
};

const TrainerContext = createContext<TrainerContextType>({} as TrainerContextType);

export const TrainerProvider = ({ children }: { children: ReactNode }) => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addPokemonToTeam = (pokemon: Pokemon) => {
    setTeam((previous) => {
      if( previous.find((p) => p.id === pokemon.id)) return previous;
      else return [...previous, pokemon];
    })
  }

  const removePokemonFromTeam = (pokemon: Pokemon) => {
    setTeam((previous) =>
      previous.filter((p) => p.id !== pokemon.id))
  }


  return (
    <TrainerContext.Provider value={{ team, addPokemonToTeam, removePokemonFromTeam }}>
      {children}
    </TrainerContext.Provider>
  )
}

export const useTrainer = () => {
  const context = useContext(TrainerContext);
  return context;
}
