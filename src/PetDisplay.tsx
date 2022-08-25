import { useStore } from "./zustand/store";

export const PetDisplay = () => {
  const petSrc = useStore((state) => state.pet.data);

  return (
    <div>
      <img src={petSrc} />
    </div>
  );
};
