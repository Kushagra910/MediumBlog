
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import ProfileDrop from "./ProfileDrop";

export const Navbar = ({ name }: { name: string }) => {

  const token = localStorage.getItem('token');
  return (
    <div className="flex items-center justify-between md:mx-20 pt-3 pb-2 ">
      {/* logo,title */}
      <Link to="/">
        <div className="flex gap-1  md:gap-2 items-center cursor-pointer">
          <img
            src="../../public/7127198_medium_medium logo_logo_icon.png"
            className=" h-10 w-12 md:h-14 md:w-16"
          />
          <p className="cusrsor-pointer font-extrabold text-xl md:text-3xl ">Medium</p>
        </div>
      </Link>
      <div className="flex  md:gap-5 items-center">
        {/* publish */}
        {token && (
          <Link to={"/publish"}>
            {" "}
            <button
              type="button"
              className="text-white bg-gradient-to-r from-slate-600 via-slate-700 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  text-sm px-3 md:px-5 py-2 me-2 rounded-2xl text-center"
            >
              New
            </button>
          </Link>
        )}
        {/* settings */}
        {token && (
          <span className="cursor-pointer">
            <IoIosSettings size={24}/>
          </span>
        )}
        
        {/* notification */}
        {token && (
          <span className="cursor-pointer">
            <IoIosNotifications size={24} />
          </span>
        )}
        {/* avatar */}
        {/* {token && (
            <Link to={"/blogs"}>  <div>
            <Avatar name={name} />
          </div></Link> 
        )} */}
        {token && <ProfileDrop name={name}/>}

        {/* when not signed in so login & signup button should be shown */}
        {!token && (
          <div>
            <Link to={"/signin"}>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 me-2 md:mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 me-2 md:mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
