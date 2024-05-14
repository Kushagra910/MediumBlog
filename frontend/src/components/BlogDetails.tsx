import { Navbar } from "./Navbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const BlogDetails = ({ blog }: { blog: Blog | any  }) => {
  const authorName = blog?.author?.name;
  return (
    <div>
      <div className="w-full border-b pb-3 bg-slate-400">
        <Navbar name={authorName} />
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-5xl mt-12 gap-3">
          <div className=" col-span-8">
            <div className="text-3xl font-extrabold leading-9">
              {blog.title}
            </div>
            <div className="text-slate-400 font-medium mb-2 mt-1">
              Posted on 12-may-2024
            </div>
            <div className="text-slate-600 font-medium leading-6">
              {blog.content}
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-700 font-medium mb-3 text-lg">
              Author
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <Avatar name={blog?.author?.name} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">
                  {blog.author.name || "Anonymus"}
                </span>
                <p className="text-slate-500 font-medium">
                  Random catch phrase about the author's ability to grab the
                  attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
