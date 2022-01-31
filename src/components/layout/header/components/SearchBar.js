const SearchBar = () => {
  return (
    <form className="search-bar flex-row flex-grow justify-start">
      <input
        className="search-bar__field flex-nowrap flex-shrink"
        type="text"
      />
      <input className="btn btn--primary" type="submit" />
    </form>
  );
};

export default SearchBar;
