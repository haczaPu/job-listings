import React from "react";

const FilterBar = ({ filterTags, handleClear, handleRemoveTag }) => {
  return (
    <nav>
      <div className="filters">
        {filterTags.map((tag, i) => (
          <div className="filter-tag" key={i}>
            <div>{tag}</div>
            <button onClick={handleRemoveTag}>
              <img src="../images/icon-remove.svg" alt="" />
            </button>
          </div>
        ))}
      </div>
      <button className="btn-clear" onClick={handleClear}>
        clear
      </button>
    </nav>
  );
};

export default FilterBar;
