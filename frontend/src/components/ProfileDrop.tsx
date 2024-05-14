import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import useClick from "../hooks/useClick";
import toast from "react-hot-toast";

interface User {
  name : string
}

const ProfileDrop = ({name} : User) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

 
  useClick({
    ref: ref,
    handler: () => setOpen(false) // Handler function to close the dropdown
  });


  if (!name) return null;

  return (
    <div className="relative">
      <button onClick={() => setOpen(true)} className="flex items-center gap-x-1">
        <Avatar name={name} />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </button>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800 bg-slate-700 text-white"
          ref={ref}
        >
          <Link to="/blogs" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
              <VscDashboard className="text-lg" />
              Blogs
            </div>
          </Link>
          <div
            onClick={() => {
              // handle logout here
              localStorage.removeItem('token');
              setOpen(false);
              navigate('/');
              toast.success('Logout successfully');
            }}
            className="flex cursor-pointer w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDrop;
