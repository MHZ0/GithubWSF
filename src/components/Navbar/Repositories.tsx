
const Repositories = () => {           //THIS IS THE COMPONENT THAT IS BEING IMPORTED IN THE NAVBAR COMPONENT 

  // const repoNumber = localStorage.getItem("repoNumber"); //GETTING THE REPO NUMBER FROM THE LOCAL STORAGE
  // const octRepoNumber = localStorage.getItem("octRepoNumber"); //GETTING THE AUTHENTICATED USER REPO NUMBER FROM THE LOCAL STORAGE
  // const showifauth = localStorage.getItem("showifauth"); //GETTING THE AUTHENTICATED USER FROM THE LOCAL STORAGE

  // const sif = (showifauth) ? JSON.parse(showifauth.toLowerCase(), (key, value) => {
  //   if (value == 'true') return true;
  //   if (value == 'false') return false;
  //   return value;
  // }) : undefined ;

  // console.log("This user Authenticated ?////// : ",sif);

  return (
    <div className="px-2 py-3 mx-2 wrapper ">
      <div className="flex items-center justify-center ">
        <div className="m-1">
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
              d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
            />
          </svg>
        </div>
          <span className="m-1">Repositories</span>
          {/*<p className="">{ (showifauth) ? octRepoNumber : repoNumber }</p>*/}
      </div>
    </div>
  );
};

export default Repositories;
