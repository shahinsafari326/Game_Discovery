import useGenres from "../hooks/useGenres";
import { Spinner } from "./Spinner";

interface GenreListProps {
  onSelectGenre: (genreId: number) => void;
}

const GenresList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner />;

  return (
    <ul className="space-y-1">
      {data.map((genre) => (
        <li key={genre.id}>
          <div className="flex items-center gap-2 ">
            <img
              src={genre.image_background}
              alt={genre.name}
              className="h-10 w-10 rounded-xl object-contain"
            />

            <button
              onClick={() => onSelectGenre(genre.id)}
              className="text-blue-600 hover:underline"
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
