import "./Header.css";
import axios from "axios";

const Searchbar = ({ isSearch, hide, search, setSearch, setSearchResult }) => {
  const handleClick = () => {
    hide(!isSearch);
  };
  const handleSearch = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/api/users/?search=" + search
    );
    console.log(data);
    setSearchResult([...data]);
  };
  return (
    <div className={`side-menu ${isSearch ? "open" : ""}`}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="button" value="Hide menu" onClick={() => handleClick()} />
      <input type="button" value="Search" onClick={() => handleSearch()} />
      {/* Récupérer les données. */}
    </div>
  );
};

export default Searchbar;
