import SearchBar from "./SearchBWF/SearchBar";
import { useState, useMemo } from "react";
import FilterT from "./SearchBWF/FilterT";
import Filterl from "./SearchBWF/FilterL";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Repo from "./SearchBWF/Repo";
import { useLocation } from "react-router-dom";
import octokit from "../Githubclient/GithubC";

export type RepoData = {
  //DEFINING THE TYPE FOR THE REPO DATA
  name: string;
  language: string;
  description: string;
  updated_at: string;
  forks_url: string;
  forks_count: number;
};

const RepoResPage = () => {
 
  function useQue() {
    //EXTRACTING THE SEARCH PARAMS FROM THE URL
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]); //USING THE MEMO HOOK TO STORE THE SEARCH PARAMS
  }

  const [searchText, setSearchText] = useState<string>(""); //SETTING THE STATE FOR THE SEARCH TEXT
  const params = useQue();

  const user = params.get("user") || "mhz0" ; //EXTRACTING THE USER PARAMS FOR THE ProfileSideBar COMPONENT
  
  console.log("the user is ",user);

  const fetchRepoData = async () => {
    //FOR THE USAGE OF REACT QUERY TO FETCH THE REPO DATA
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    return response.data;
  };

  const { data, isLoading, isError } = useQuery(["repoData"], fetchRepoData); //USING THE REACT QUERY TO FETCH REPO DATA
  const repoNumber = data?.length; //GETTING THE REPO NUMBER
  console.log("Repositories number",repoNumber);

  const fetchAuthUser = async () => {
    //TO GET THE AUTHENTICATED USER DATA
    const result = await octokit.request("GET /user", {
    });
    return result.data;
  };

  const { data: authUData} = useQuery(["authUData"], fetchAuthUser);  //USING THE REACT QUERY TO FETCH AUTHENTICATED USER 
  console.log("Authenticated User",authUData?.login.toLocaleLowerCase());   //GETTING THE AUTHENTICATED USER

  const fetchoctRepos = async () => {
    //TO GET THE AUTHENTICATED USER REPO DATA
    const result = await octokit.request("GET /user/repos", {
    });
    return result.data;
  };

  const { data: octRepoData } = useQuery(["octrepoData"], fetchoctRepos);//USING THE REACT QUERY TO FETCH REPO DATA FROM OCTOKIT
  const showifauth = (user?.toLocaleLowerCase() ) === (authUData?.login.toLocaleLowerCase()); //CHECKING IF THE USER IS AUTHENTICATED 
  console.log("This user Authenticated ? : ",showifauth);

  const octRepoNumber = octRepoData?.length;            //GETTING THE AUTHENTICATED USER REPO NUMBER 
  console.log("Auth User Repos number",octRepoNumber);  

  //localStorage.setItem("repoNumber", JSON.stringify(repoNumber)); //STORING THE REPO NUMBER IN THE LOCAL STORAGE
  //localStorage.setItem("octRepoNumber", JSON.stringify(octRepoNumber)); //STORING THE AUTHENTICATED USER REPO NUMBER IN THE LOCAL STORAGE
  //localStorage.setItem("showifauth", JSON.stringify(showifauth)); //STORING THE STARRED REPO NUMBER IN THE LOCAL STORAGE

  return ( 
    <>                    {/*HANDLING DATA LAODING AND ERRORS*/}
      <div className="container items-end w-full px-8 mx-auto max-w-7xl md:px-16 ">
        {isLoading && (
          <div className="flex items-center justify-center w-full h-96">
            <h1 className="text-2xl font-semibold text-blue-600">Loading...</h1>
          </div>
        )}
        {!isLoading && isError && (
          <div className="flex items-center justify-center w-full h-96">
            <h1 className="text-2xl font-semibold text-red-600">
              No github user found...
            </h1>
          </div>
        )}
        {!isLoading && !isError && data?.length === 0 && (
          <div className="flex items-center justify-center w-full h-96">
            <h1 className="text-2xl font-semibold text-red-600">
              No repositories found...
            </h1>
          </div>
        )}
        {!isLoading && !isError && (
          <>
            <div className="flex items-center justify-center w-full gap-4 border-b md:gap-6">
              {/*PASSING THE SEARCH TEXT TO THE SEARCH BAR */}
              <SearchBar
                searchText={searchText}
                setSearchText={setSearchText}
              />
              <div className="flex w-full gap-1 md:gap-3">
                <FilterT />
                <Filterl />
              </div>
            </div>
            { ( showifauth === false)?(data //MAPPING THE DATA TO THE REPO COMPONENT IF THE USER IS NOT AUTHENTICATED
              .filter((repo: RepoData) => {
                return repo.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              })
              .map((repo: RepoData, index: number) => (  
                <Repo key={index} repo={repo}  />
              ))) 
              : (octRepoData !=null )? octRepoData.filter((repo: any) => { //MAPPING THE DATA TO THE REPO COMPONENT IF THE USER IS AUTHENTICATED
                return repo.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              })
              .map((repo: any, index: number) => (
                <Repo key={index} repo={repo}  />
              )): undefined }
          </>
        )}
      </div>
    </>
  );
};

export default RepoResPage;
 