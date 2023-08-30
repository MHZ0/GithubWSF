
type Props = {    //DEFINING THE TYPE FOR THE SearchBar PROPS
  searchText: string;
  setSearchText: (searchText: string) => void;
};

const SearchBar = ({ searchText, setSearchText }: Props) => { 
  return (
    <div className="w-full my-4">
      <input
        type="text"
        className="w-full px-2 py-1 border rounded "
        placeholder=" Find a repository..."
        onChange={(e) => setSearchText(e.target.value)}   //SETTING THE SEARCH TEXT TO THE VALUE OF THE INPUT
      />
    </div>
  );
};

export default SearchBar;
