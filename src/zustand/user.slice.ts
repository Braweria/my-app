import { StateCreator } from "zustand";
import { PetsValues } from "./pet.slice";

type User = {
  name: string;
  favouritePet: PetsValues | "";
};

export type UserActions = {
  setUser: (user: Partial<User>) => void;
  setFavouritePet: (favouritePet: PetsValues) => void;
  queryUser: () => void;
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
      favouritePet: "",
    },
  },
  setUser: (user) => {
    set((state) => ({ ...state, user: { ...state.user, data: { ...state.user.data, ...user } } }));
  },
  setFavouritePet: (favouritePet) => {
    console.log("setter", favouritePet);
    set((state) => ({
      ...state,
      user: { ...state.user, data: { ...state.user.data, favouritePet } },
    }));
  },
  queryUser: () => {
    const queryString = window.location.search;
    if (queryString) {
      const parameters = new URLSearchParams(queryString);
      const user = { name: "", favouritePet: "" };
      // @ts-ignore
      for (const [key, value] of parameters) {
        user[key as keyof User] = value;
      }
      get().setUser(user as User);
    }
  },
});
