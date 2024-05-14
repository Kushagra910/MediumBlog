import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-300 flex flex-col mt-5 gap-2 w-full">
      {/* top-line */}
      <Link to={`/blog/${id}`}>
        <div className="cursor-pointer">
          <div className="flex items-center gap-1">
            <Avatar name={authorName} />{" "}
            <span className="text-md font-medium">{authorName}</span>{" "}
            <p className=" text-slate-500 font-normal">
              {" "}
              &#xb7; {publishedDate}
            </p>
          </div>
        </div>
        {/* mid-content */}
        <div className="flex flex-col gap-1">
          <div className="font-bold text-xl">{title}</div>
          <div className="font-semibold text-md text-slate-700">
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </div>
        </div>
      </Link>
      {/* share-settings buttons */}
      <div className="flex justify-between">
        <div className="text-slate-600 text-sm">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
        {/* buttons */}
        <div className="flex gap-2 justify-evenly items-center w-40 mb-5">
          <div>
            <FaShareAlt size={20} style={{ color: "gray" }} />
          </div>
          <div>
            <IoIosRemoveCircleOutline size={24} style={{ color: "gray" }} />
          </div>
          <div>
            <BsThreeDots size={24} style={{ color: "gray" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Avatar = ({ name }: { name: string }) => {
  let image = `https://api.dicebear.com/8.x/initials/svg?seed=${name}`;
  return (
    <div className="h-8 w-8 flex">
      <img className="rounded-full" src={image} alt="Avatar" />
    </div>
  );
};
