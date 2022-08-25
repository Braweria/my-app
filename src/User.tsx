import { FavouritePetButton } from "./FavouritePetButton";
import { useStore } from "./zustand/store";

type UserProps = {
  name: string;
};

export const User = ({ name }: UserProps) => {
  const userName = useStore((state) => state.user.data.name);
  const setUser = useStore((state) => state.setUser);

  function onChangeName(name: string) {
    setUser({ name });
  }

  return (
    <div>
      <p>Hello {userName ?? ""}</p>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={userName ?? ""}
        onChange={(event) => onChangeName(event.target.value)}
      />
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
