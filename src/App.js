import "./style/style.css";
import { useEffect, useState } from "react";
import JobList from "./components/JobList";
import FilterBar from "./components/FilterBar";
import Data from "./data/data.json";

const App = () => {
  const [filterTags, setFilterTags] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const offers = Data;

  // Filtering offers
  useEffect(() => {
    const newFilteredOffers = offers.filter(offer => {
      const tags = [offer.level, offer.role].concat(offer.tools, offer.languages);
      return filterTags.every(t => tags.includes(t));
    });
    setFilteredOffers(newFilteredOffers);
  }, [filterTags, offers]);

  //Clear filter tags
  const handleClear = () => {
    setFilterTags([]);
  };

  //Add filetr tags
  const handleAddTag = e => {
    if (filterTags.includes(e.target.textContent)) {
      return;
    }
    setFilterTags([...filterTags, e.target.textContent]);
  };

  //Remove filter tags

  const handleRemoveTag = e => {
    let newFilterTags = filterTags.filter(value => {
      return value !== e.currentTarget.parentElement.childNodes[0].textContent;
    });
    setFilterTags(newFilterTags);
  };

  return (
    <div className="App">
      <header>
        <FilterBar
          filterTags={filterTags}
          setFilterTags={setFilterTags}
          handleClear={handleClear}
          handleRemoveTag={handleRemoveTag}
        />
      </header>
      <main>
        <JobList filteredOffers={filteredOffers} handleAddTag={handleAddTag} />
      </main>
    </div>
  );
};

export default App;
