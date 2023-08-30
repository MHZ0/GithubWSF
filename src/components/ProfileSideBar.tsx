import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import octokit from "../Githubclient/GithubC";


type orgavatar = {
  avatar_url: string;
};


const ProfileSideBar = () => {
  //EXTRACTING THE SEARCH PARAMS FROM THE URL
  function useQue() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]); //USING THE MEMO HOOK TO STORE THE SEARCH PARAMS
  }
  const params = useQue();
  const user = params.get("user")  ; //EXTRACTING THE USER PARAMS FOR THE ProfileSideBar COMPONENT

  const fetchProfileData = async () => {
    //FOR THE USAGE OF REACT QUERY TO FETCH THE PROFILE DATA DYNAMICALLY
    const response = await axios.get(`https://api.github.com/users/${user}`);
    return response.data;
  };

  const fetchOrganizations = async () => {
    //FOR THE USAGE OF REACT QUERY TO FETCH THE ORGANIZATION DATA
    const response = await axios.get(
      `https://api.github.com/users/${user}/orgs`
    );
    return response.data;
  };

  const fetchStarred = async () => {
    //FOR THE USAGE OF REACT QUERY TO FETCH THE ORGANIZATION DATA
    const response = await axios.get(
      `https://api.github.com/users/${user}/starred`
    );
    return response.data;
  };

  const getdata = async () => {
    //TO GET THE AUTHENTICATED USER DATA
    const response = await octokit.request("GET /user",{});  
      return response.data;
  };

  const { 
    data: pdata,
     } = useQuery(["profileData"], fetchProfileData); //USING THE REACT QUERY TO FETCH PROFILE DATA

  const {
    data: orgData,
  } = useQuery(["orgData"], fetchOrganizations); //USING THE REACT QUERY TO FETCH ORGANIZATION DATA

  const {
    data: starredData,
  } = useQuery(["starredData"], fetchStarred); //USING THE REACT QUERY TO FETCH STARRED REPOS AND COUNT THEM LATER 

  const {
    data: octokitdata,
  } = useQuery(["octdata"], getdata);

  const starredDataLength = starredData ? starredData.length : 0;    //GETTING THE LENGTH OF THE STARRED DATA
  console.log("starred Repos number",starredDataLength);

  const showifauth = (user?.toLocaleLowerCase() ) === (octokitdata?.login.toLocaleLowerCase()) ; //CHECKING IF THE USER IS AUTHENTICATED OR NOT
  console.log("Authenticated ? : ",showifauth);

  return (
    <div className="container w-full max-w-xl p-12 md:w-1/3">
     <div className="flex justify-center">
      <img
        alt="AVATAR"
        src={pdata?.avatar_url}
        className="w-50 h-50 mx-auto border border-gray-400 rounded-full md:mx-0 width-full "
      />
     </div>
      <div className="flex flex-col items-center w-full md:items-start">
        <h1 className="flex justify-start my-2 text-3xl font-bold ">
          {pdata?.name}
        </h1>
        <h2 className="flex justify-start mb-5 text-xl text-gray-500">
          {" "}
          {pdata?.login}
        </h2>
        <p className="max-w-md font-normal text-left ">{pdata?.bio}</p>
          <button className="px-2 py-1 my-5 mx-auto font-semibold border rounded w-60">
            Follow
          </button>
      </div>

      <div className="flex justify-start gap-1 mb-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
        <span>{pdata?.followers} followers -</span>
        <span>{pdata?.following} following -</span>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        <span>{starredDataLength}</span>
      </div>
      <p className="text-left mb-3 ">{showifauth && ( octokitdata?.email)}</p>
      <div className="border-t ">
        <h1 className="flex text-left my-4 text-xl font-semibold ">
          Organizations
        </h1>
        <div className="flex justify-start gap-1">
          {orgData?.map((org: orgavatar, index: number) => (
            <img
              key={index}
              alt="ORG"
              src={org.avatar_url}
              width="30"
              height="30"
              className="border border-gray-200 rounded-full width-full "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
