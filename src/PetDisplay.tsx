import { useStore } from "./zustand/store";

export const PetDisplay = () => {
  const petSrc = useStore((state) => state.pet.data);

  return <div>{petSrc && <img src={petSrc} alt="pet" />}</div>;
};
