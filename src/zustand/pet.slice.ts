import { StateCreator } from "zustand";

export const PETS = {
  CAT: "cat",
  DOG: "dog",
} as const;

export type PetsKeys = keyof typeof PETS;
export type PetsValues = typeof PETS[keyof typeof PETS];

export type PetActions = {
  fetchPets: (url: string) => void;
};

export type PetSlice = {
  pet: {
    isLoading: boolean;
    data: string;
  };
} & PetActions;

export const createPetSlice: StateCreator<PetSlice> = (set, get) => ({
  pet: {
    isLoading: false,
    data: "",
  },
  fetchPets: async (url) => {
    set((state) => ({
      ...state,
      pet: {
        ...state.pet,
        isLoading: true,
      },
    }));
    const response = await fetch(url);
    const data = response.url;
    set((state) => ({
      ...state,
      pet: {
        ...state.pet,
        isLoading: false,
        data,
      },
    }));
  },
});
