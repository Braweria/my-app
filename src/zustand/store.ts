// @ts-nocheck

import { subscribeWithSelector } from "zustand/middleware";
import create from "zustand";
import { PetSlice, createPetSlice, PETS } from "./pet.slice";
import { UserSlice, createUserSlice } from "./user.slice";

export type Store = PetSlice & UserSlice;

export const useStore = create<Store>(
  subscribeWithSelector((...utils) => ({
    ...createPetSlice(...utils),
    ...createUserSlice(...utils),
  }))
);

export const unscubscribeFavouritePet = useStore.subscribe(
  (state) => [state.fetchPets, state.user.data.favouritePet],
  ([fetchPets, favouritePet]) => {
    const url =
      favouritePet === PETS.DOG
        ? "https://placedog.net/500/500"
        : "http://placekitten.com/500/500";

    fetchPets(url);
  },
  {
    equalityFn: ([, pets], [, newPets]) => pets === newPets,
  }
);
