import { FavouritePetButton } from "./FavouritePetButton";
import { useStore } from "./zustand/store";

type UserProps = {
  name: string;
};

export const User = ({ name }: UserProps) => {
  const setFavouritePet = useStore((state) => state.setFavouritePet);

  function onChangeName(name: string) {
    // setter
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
          <FavouritePetButton />
        </div>
      </fieldset>
    </div>
  );
};
