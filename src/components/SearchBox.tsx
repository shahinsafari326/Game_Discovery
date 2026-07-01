import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useGameQueryStore from "../contexts/useGameQueryStore";

const SearchBox = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // dont submit the form to server
        if (ref.current) {
          setSearchText(ref.current.value);
        }
      }}
      className="relative flex-1"
    >
      <div className=" relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          ref={ref}
          type="text"
          placeholder="Search games..."
          className="w-full rounded-md border py-2 pl-10 pr-3"
        />
      </div>
    </form>
  );
};

export default SearchBox;
