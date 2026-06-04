import UseGenres from "../hooks/UseGenres";

const GenresList = () => {
  const { genres, error, isLoading } = UseGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
