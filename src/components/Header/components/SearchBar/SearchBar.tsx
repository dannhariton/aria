import { CiSearch } from "react-icons/ci";

export function SearchBar() {
  return (
    <div>
      <input type="search" placeholder="Search this site" />
      <button type="submit">
        <CiSearch />
      </button>
    </div>
  );
}
