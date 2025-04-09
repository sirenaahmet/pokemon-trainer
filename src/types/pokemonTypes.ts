export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type?: PokeType[];
  weight?: number;
  stats?: PokeStats[];
  url?: string;
  sprites?: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

export type PokeType = {
  slot: number;
  type: {
    name: string;
  };
};

export type PokeStats = {
  stat: {
    name: string;
  };
  base_stat: number;
};
