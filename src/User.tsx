import { PetsValues, PETS } from "./zustand/pet.slice";
import { useStore } from "./zustand/store";

type UserProps = {
  name: string;
  favouritePet: PetsValues;
};

export const User = ({ name, favouritePet }: UserProps) => {
  const setFavouritePet = useStore((state) => state.setFavouritePet);

  function onChangeName(name: string) {
    // setter
  }

  function onChangePet(pet: PetsValues) {
    setFavouritePet(pet);
  }

  return (
    <div>
      <p>Hello User</p>
      <input type="text" name="name" placeholder="Your Name" />
      <br />
      <fieldset>
        <legend>Your favourite pet</legend>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
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
      </fieldset>
    </div>
  );
};
