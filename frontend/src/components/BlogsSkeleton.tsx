export const BlogsSkeleton = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="border-b border-slate-300 flex flex-col mt-5 gap-2 w-full cursor-pointer">
        {/* top-line */}
        <div>
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          </div>
        </div>
        {/* mid-content */}
        <div className="flex flex-col gap-1">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="font-semibold text-md text-slate-700">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
        </div>
        {/* share-settings buttons */}
        <div className="flex justify-between">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          {/* buttons */}
          <div className="flex justify-evenly w-40 mb-5">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          </div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const BlogDetailsSkeleton = () => {
  return  (
   
<div role="status" className=" animate-pulse w-full">


      <div className="flex justify-center w-full">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-5xl mt-12 gap-3">
          <div className=" col-span-8">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          </div>
          <div className="col-span-4">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="flex gap-4 items-center">
              <div>
              <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                </span>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>


  )
};
