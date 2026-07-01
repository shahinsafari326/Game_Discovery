import useGameQueryStore from "../contexts/useGameQueryStore";
import useGenres from "../hooks/useGenre";
import { Spinner } from "./Spinner";

const GenresList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;
  const genres = data?.results;

  return (
    <ul className="space-y-1">
      {genres?.map((genre) => (
        <li key={genre.id}>
          <div className="flex items-center gap-2 ">
            <img
              src={genre.image_background}
              alt={genre.name}
              className="h-10 w-10 rounded-xl object-contain"
            />

            <button
              onClick={() => setGenreId(genre.id)}
              className={`text-grey-600 hover:underline ${selectedGenreId === genre.id ? "font-bold" : ""}`}
            >
              {genre.name}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
