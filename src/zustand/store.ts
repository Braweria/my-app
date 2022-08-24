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

// export const useStore = create<Store>(
//   subscribeWithSelector(() => (...utils) => ({
//     ...createPetSlice(...utils),
//     ...createUserSlice(...utils),
//   }))
// );

export const unscubribeFavouritePet = useStore.subscribe(
  (state) => {
    console.log("I got changed", state);

    const url =
      state.user.data.favouritePet === PETS.DOG
        ? "https://placedog.net/500"
        : "http://placekitten.com/500/500";

    state.fetchPets(url);
  },
  (state) => state.user.data.favouritePet
);
