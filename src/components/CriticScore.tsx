interface CriticScoreProps {
  score: number;
}

/**
 * inline-flex → keeps it inline like Chakra Badge
    items-center → vertical alignment
    px-2 py-0.5 → padding (badge shape)
    rounded-md → rounded corners
    text-xs → small text like badges
    font-medium → slightly bold
    bg-blue-100 → light background
    text-blue-700 → readable contrast text
 */

/**
 * we need color map so tailwind wont mess with our dynamic class names.
 *  Tailwind needs to see all the class names in the source code to generate the corresponding CSS.
 * If we construct class names dynamically (e.g., using template literals),
 *  Tailwind won't recognize them and won't generate the necessary styles.
 *  By defining a color map with all possible class combinations,
 *  we ensure that Tailwind can detect and include those styles in the final CSS output.
 */
const colorMap = {
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  red: "bg-red-100 text-red-700",
};

const CriticScore = ({ score }: CriticScoreProps) => {
  const color =
    score >= 75 ? colorMap.green : score >= 50 ? colorMap.yellow : colorMap.red;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium ${color}`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
