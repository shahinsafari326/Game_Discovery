import useGenres from "../hooks/useGenres";
import { Spinner } from "./Spinner";

const GenresList = () => {
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
            <span className=" bg-clip-text text-sm font-extrabold">
              {genre.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;
