"use strict"

import React, { useState } from "react";
import "./SearchForm.css";

/**
 *Renders and control form for search value to be used in parent componene's filter
 *
 *props: intialSearch, handleSearch(see parent)
 *state: search
 *
 *[JobsContainer, CompaniesContainer] -> SearchForm
 */
function SearchForm({ initialSearch, handleSearch, formType }) {
  const [search, setSearch] = useState(initialSearch);

  function handleChange(evt) {
    const { value } = evt.target;
    setSearch(value);
    handleSubmit(evt);
  }

  // Sends search back to parent component
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(search);
  }

  return (
    <div className="SearchForm search-container">
      <form className="Search-bar" onSubmit={handleSubmit}>
        <input
          id="search-bar-query"
          name="search-bar"
          className="form-control"
          placeholder={`Enter ${formType} search..`}
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
}

export default SearchForm;
