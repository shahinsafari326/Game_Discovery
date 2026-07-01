import useGameQueryStore from "../contexts/useGameQueryStore";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();
  const platforms = data?.results;
  if (error) return null;

  return (
    <select
      className="rounded-md border px-3 py-2 mb-4"
      onChange={(e) =>
        setPlatformId(e.target.value === "all" ? null : Number(e.target.value))
      }
    >
      <option value="all">Platforms</option>
      {platforms?.map((platform) => (
        <option className="bg-gray-100" key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};

export default PlatformSelector;
