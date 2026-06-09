import usePlatforms from "../hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelect: (platform: string) => void;
}

const PlatformSelector = ({ onSelect }: PlatformSelectorProps) => {
  const { data: platforms, error } = usePlatforms();
  if (error) return null;

  return (
    <select
      className="rounded-md border px-3 py-2 mb-4"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="all">All Platforms</option>
      {platforms?.map((platform) => (
        <option className="bg-gray-100" key={platform.id} value={platform.name}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
