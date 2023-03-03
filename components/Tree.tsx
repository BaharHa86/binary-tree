interface TreeProps {
  value?: string;
  left?: any;
  right?: any;
}

function Tree({ value, left, right }: TreeProps) {
  return (
    <div className="flex flex-wrap w-auto items-start justify-center">
      <div className="flex items-start justify-center">
        <div className="w-20 rounded-full font-sans text-base border-2 border-violet-400 h-20 flex items-center justify-center m-2 relative">
          {value}
          {left && (
            <div className="border-dashed border-x-2 border-violet-400 h-10 absolute top-14 -left-3 rotate-45"></div>
          )}
          {right && (
            <div className="border-dashed border-x-2 border-violet-400 h-10 absolute top-14 -right-3 -rotate-45"></div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap w-full items-start justify-center ">
        <div className="flex flex-wrap w-1/2 items-center justify-center relative ">
          {left && <Tree {...left} />}
        </div>

        <div className="flex flex-wrap w-1/2 items-center justify-center relative ">
          {right && <Tree {...right} />}
        </div>
      </div>
    </div>
  );
}

export default Tree;
