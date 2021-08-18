import React, { useState } from "react";

/**
 *Renders and control form for search value to be used in parent componene's filter
 *
 *props: intialSearch, handleSearch(see parent)
 *state: search
 *
 *[JobsContainer, CompaniesContainer] -> SearchForm
 */
function SearchForm({ initialSearch, handleSearch }) {
  const [search, setSearch] = useState(initialSearch);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSearch((sData) => ({
      ...sData,
      [name]: value,
    }));
  }

  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch({ ...search });
  }

  //specifies key of the search value
  //ternery operator based off prop passing through
  function titleOrName(initialSearch) {
    let placeholder = Object.keys(initialSearch)[0];
    return placeholder;
  }

  let filterkey = titleOrName(initialSearch);

  return (
    <div className="Search">
      <form className="Search-bar" onSubmit={handleSubmit}>
        <input
          id="search-bar-query"
          name={filterkey}
          className="form-control"
          placeholder={filterkey}
          onChange={handleChange}
          value={search.filterkey}
        />
      </form>
    </div>
  );
}

export default SearchForm;
