const FilterT = () => {
  return (                  //CREATING A DRPODOWN FILTER MENU 
      <select 
       className="w-24 px-2 py-1 border rounded md:w-48"
       >
        <option value="ALL">All</option>
        <option value="Public">Public</option>
        <option value="Private">Private</option>
        <option value="Sources">Sources</option>
        <option value="Forks">Forks</option>
      </select>
  );
};

export default FilterT;
