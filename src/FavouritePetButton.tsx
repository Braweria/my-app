import { PETS, PetsValues } from "./zustand/pet.slice";
import { useStore } from "./zustand/store";

export const FavouritePetButton = () => {
  const favouritePet = useStore((state) => state.user.data.favouritePet);
  const setFavouritePet = useStore((state) => state.setFavouritePet);

  function onChangePet(pet: PetsValues) {
    setFavouritePet(pet);
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: favouritePet === PETS.CAT ? "green" : "salmon",
        }}
        onClick={() => onChangePet("cat")}
      >
        Cat
      </button>
      <button
        style={{
          backgroundColor: favouritePet === PETS.DOG ? "green" : "salmon",
        }}
        onClick={() => onChangePet("dog")}
      >
        Dog
      </button>
    </div>
  );
};
