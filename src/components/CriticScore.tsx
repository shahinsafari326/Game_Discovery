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
const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium bg-${color}-100 text-${color}-700`}
    >
      {score}
    </span>
  );
};

export default CriticScore;
