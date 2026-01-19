import SearchBar from "./SearchBar";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="header">
      <h1>Project Showcase</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </header>
  );
}
