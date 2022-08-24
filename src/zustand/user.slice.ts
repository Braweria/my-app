import { StateCreator } from "zustand";
import { PETS, PetsValues } from "./pet.slice";

type User = {
  name: string;
  favouritePet: PetsValues;
};

export type UserActions = {
  setUser: (user: User) => void;
  setFavouritePet: (favouritePet: PetsValues) => void;
};

export type UserSlice = {
  user: {
    isLoading: boolean;
    data: User;
  };
} & UserActions;

export const createUserSlice: StateCreator<UserSlice> = (set, get) => ({
  user: {
    isLoading: false,
    data: {
      name: "",
      favouritePet: PETS.DOG,
    },
  },
  setUser: (user) => {
    set((state) => ({ ...state, user: { ...state.user, data: { ...user } } }));
  },
  setFavouritePet: (favouritePet) => {
    console.log("setter", favouritePet);
    set((state) => ({
      ...state,
      user: { ...state.user, data: { ...state.user.data, favouritePet } },
    }));
  },
});
