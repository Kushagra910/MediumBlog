import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { BlogDetails } from "../components/BlogDetails";
import { Navbar } from "../components/Navbar";
import { BlogDetailsSkeleton } from "../components/BlogsSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({
    id: id || "",
  });
  console.log(blog);
  if (loading || !blog) {
    return (
      <div>
        <div className="w-full border-b pb-3 bg-slate-400">
          <Navbar name={"kushagra"} />
        </div>
        <div className="flex flex-col min-w-min max-w-xl w-11/12 mx-auto mt-5 pt-5">
          <BlogDetailsSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};
