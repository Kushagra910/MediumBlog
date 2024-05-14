import { BlogCard } from "../components/BlogCard";
import { BlogsSkeleton } from "../components/BlogsSkeleton";
import { Navbar } from "../components/Navbar";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <div className="w-full border-b pb-3 bg-slate-400">
          <Navbar name={"kushagra"} />
        </div>
        <div className="flex flex-col min-w-min max-w-xl w-11/12 mx-auto mt-5 pt-5">
          <BlogsSkeleton />
          <BlogsSkeleton />
          <BlogsSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="w-full border-b pb-3 bg-slate-400">
        <Navbar name={"kushagra"} />
      </div>
      <div className="flex flex-col min-w-min max-w-xl w-11/12 mx-auto mt-5 pt-5">
        {blogs?.map((blog) => {
          return (
            <BlogCard
              key={blog?.id}
              id={blog?.id}
              authorName={blog?.author.name || "Authorname"}
              title={blog?.title}
              content={blog?.content}
              publishedDate={"13-05-2024"}
            />
          );
        })}
      </div>
    </div>
  );
};
