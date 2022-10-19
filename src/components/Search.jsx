const Search = ({ searchValue, setSearchValue }) => {
  return (
    <input className="inputSearch"
      type="text"
      value={searchValue}
      placeholder="Search..."
      onChange={(event) => setSearchValue(event.target.value)}
    />
  );
};

export default Search;
