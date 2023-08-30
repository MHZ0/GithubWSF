import Overview from "./Overview";
import Repositories from "./Repositories";
import Projects from "./Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import RepoResPage from "../RepoResPage";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full gap-4 px-8 overflow-auto border-b-2 border-gray-200 md:px-16">
        <NavLink
          to="/Overv"
          className={(
            { isActive, isPending }) =>  //SETTING THE ACTIVE AND PENDING STATE (STYLING HERE) OF THE NAV LINK FOR THE COMPONENT
            isPending
              ? ""
              : isActive
              ? "border-b-2 border-orange-400 font-semibold"
              : "cursor-pointer hover:bg-gray-100"
          }
        >
          <Overview />
        </NavLink>
        <NavLink
          to="/RepoResPage"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-b-2 border-orange-400 font-semibold"
              : "cursor-pointer hover:bg-gray-100"
          }
        >
          <Repositories />
        </NavLink>
        <NavLink
          to="/Proj"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "border-b-2 border-orange-400 font-semibold"
              : "cursor-pointer hover:bg-gray-100"
          }
        >
          <Projects />
        </NavLink>
      </nav>

      <Routes>
        <Route path="/RepoResPage" Component={RepoResPage} />{" "}  {/*SETTING THE ROUTE FOR THE REPO PAGE */}
      </Routes>
    </>
  );
};
export default Navbar;
