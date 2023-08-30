import { RepoData } from "../RepoResPage";


type RepoProps = {   //DEFINING THE TYPE FOR THE REPO PROPS
  repo: RepoData;
};

const Repo = ({ repo }: RepoProps) => {              {/*CREATING A REPO COMPONENT TO DISPLAY THE REPO DATA*/}
  return (
   <div className="flex flex-col items-start w-full gap-2 px-2 border-b-2 border-gray-100 md:px-16">
    <div className="flex mt-5 items-center justify-between w-full">
      <h2 className="text-xl font-semibold text-blue-600 text-left">{repo.name}</h2>
      <button className="flex justify-center items-center gap-1 text-sm font-semibold px-2 py-1 border rounded w-20 ">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
      Star</button>
    </div>
    <p className="text-left text-xs text-gray-500 font-semibold ">{"Forked from "}{repo.forks_url.split("/repos/")[1].split("/forks")[0]}</p>
    <p className="mt-2 text-medium font-semibold text-left text-gray-500">{repo.description}</p>
    <div className="flex items-center w-full gap-5 mt-2">
      <div className="flex items-center overflow-hidden">
        <span className="text-sm mb-5 font-medium text-xs text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">{repo.language}</span>
      </div>
      <div className="flex items-center font-medium text-xs text-gray-600 gap-1 mb-5">
        {repo.forks_count}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke-width="1.5" 
          stroke="currentColor" className="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      </div>
      <div className="flex items-center mb-5 overflow-hidden">
        <span className="text-xs font-medium text-gray-600 whitespace-nowrap overflow-hidden overflow-ellipsis">
          Updated on {repo.updated_at.slice(0, 10)}
        </span>
      </div>
    </div>
  </div>
);
};

export default Repo;
