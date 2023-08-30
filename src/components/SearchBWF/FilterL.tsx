const FilterL = () => {
  return (                      //CREATING A DRPODOWN FILTER MENU 
    <select
      className="w-24 px-2 py-1 border rounded md:w-48 "
    >
      <option value="All">All</option>
      <option value="Typescript">Typescript</option>
      <option value="saab">JavaScript</option>
      <option value="JavaScript">CSS</option>
      <option value="CSS">C#</option>
    </select>
  );
};

export default FilterL;
