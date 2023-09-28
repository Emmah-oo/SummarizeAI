import { linkIcon } from "../assets/index";

const Summarize = () => {
  return (
    <div>
      <form className="flex items-center justify-between w-[80%] m-auto mt-10 px-3 py-2 shadow-md">
        <div className="flex items-center justify-center gap-2">
          <img src={linkIcon} alt="" />
          <input
            type="url"
            placeholder="Enter a URL"
            className="outline-none"
          />
        </div>
        <div className="cursor-pointer">⮐</div>
      </form>
    </div>
  );
};

export default Summarize;
