import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterComp = () => {
  const [serachparams, setSearchParams] = useSearchParams();

  const initialCategoryFilter = serachparams.getAll("category");
  const initialSortBy = serachparams.getAll("sortBy");
  // console.log(initialCategoryFilter)
  const [category, setCategory] = useState(initialCategoryFilter || []);
  const [sortBy, setSortBy] = useState(initialSortBy[0] || "");

  const handleFilterCheckbox = (e) => {
    //check if the value is present,then remove it,else add it .
    // console.log(e.target.value)
    const newCategories = [...category];

    if (newCategories.includes(e.target.value)) {
      //remove it
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };
  // console.log(category);

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    //adding the category in the URL Search Params
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      // console.log(params)
      setSearchParams(params);
    }
  }, [category, serachparams, sortBy]);

  console.log(sortBy);

  return (
    <div>
      <h3>FilterComp</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
            onChange={handleFilterCheckbox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleFilterCheckbox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
            onChange={handleFilterCheckbox}
          />
          <label>Science Friction </label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
            onChange={handleFilterCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sort Comp</h3>
      <div onChange={handleSort}>
        <input type="radio"
         value="asc" 
         name="sortBy"
         defaultChecked={sortBy ==="asc"}
         />
        <label>Ascending</label>
        <input type="radio"
         value="desc"
          name="sortBy"
          defaultChecked={sortBy ==="desc"}
          />
        <label>Decending</label>
      </div>
    </div>
  );
};
