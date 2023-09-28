import { useState } from "react";
import { linkIcon, loader, copy, tick } from "../assets/index";
import { useLazyGetSummaryQuery } from "../services/summarize";

const Summarize = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [urlHistory, setUrlHistory] = useState([]);

  //RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: url });
    setSummary(data.summary);

    console.log(data);

    const newUrl = [...urlHistory, url];
    setUrlHistory(newUrl);
  };

  const handleLinkClick = (url) => {
    setUrl(url);
    handleSubmit();
  };
  return (
    <div className="mb-5">
      <form
        className="flex items-center justify-between w-[80%] m-auto mt-10 px-3 py-2 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center gap-2 w-[100%]">
          <img src={linkIcon} alt="" />
          <input
            type="url"
            placeholder="Enter a URL"
            className="outline-none w-[100%]"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="cursor-pointer">⮐</div>
      </form>

      <section>
        <div className="flex flex-col justify-center w-[80%] m-auto pt-5 gap-2">
          {urlHistory.map((url, i) => (
            <div
              key={i}
              className="flex gap-2 cursor-pointer"
              onClick={() => handleLinkClick(url)}
            >
              <img src={copy || tick} alt="copy" className="cursor-pointer" />
              <h1>{url}</h1>
            </div>
          ))}
        </div>
      </section>

      <section className="py-15 px-4">
        <div className="flex justify-center">
          {isFetching ? (
            <img src={loader} alt="loading" className="w-10 mt-10" />
          ) : error ? (
            <p className="mt-10">An error occurred</p>
          ) : (
            <p className="mt-10 px-4">{summary}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Summarize;
