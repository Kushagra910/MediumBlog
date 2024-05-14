

export const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col  items-center justify-center leading-4">
      <div className="flex flex-col justify-center max-w-[80%]">
        <div className="text-3xl font-bold max-w-2xl">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </div>
        <div className="text-xl flex font-bold flex-col justify-start mt-3">
          <p className="">Jules Winnfield</p>
          <p className="text-slate-500">CEO | Acme Inc</p>
        </div>
      </div>
    </div>
  );
};
