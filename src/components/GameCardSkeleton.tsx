import { CARD_IMAGE_SIZE } from "./GameCard";

/**
 * h-5 → height (like Chakra height="20px")
    w-32 → width (adjust as needed)
    bg-gray-200 → skeleton base color
    rounded → soft edges
    animate-pulse → loading animation (key replacement for Chakra Skeleton)
 */
const GameCardSkeleton = () => {
  return (
    <div
      className={` ${CARD_IMAGE_SIZE} bg-gray-200 rounded animate-pulse`}
    ></div>
  );
};

export default GameCardSkeleton;
