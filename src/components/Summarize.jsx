import { useEffect, useState } from "react";
import { linkIcon, loader, copy, tick } from "../assets/index";
import { useLazyGetSummaryQuery } from "../services/summarize";

const Summarize = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [urlHistory, setUrlHistory] = useState([]);

  const [copied, setCopied] = useState("");

  //RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  //Fetches the data and adds it to the article object, also pushes the data to the newUrlHistory array of objects
  const handleSubmit = async (e) => {
    setArticle((prev) => ({ ...prev, url: "" }));
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    setArticle((prev) => ({ ...prev, summary: data.summary || data }));

    const newUrlHistory = [
      ...urlHistory, // Copy the existing history
      {
        url: article.url,
        summary: data.summary,
      },
    ];
    localStorage.setItem("urlHistory", JSON.stringify(urlHistory));
    setUrlHistory(newUrlHistory);
  };

  const handleLinkClick = (url, summary) => {
    setArticle((prev) => ({ ...prev, url, summary }));
    
  };

  const handleCopy = (url) => {
    setCopied(url);
    navigator.clipboard.writeText(url);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const storedUrlHistory = JSON.parse(localStorage.getItem("urlHistory"));
    if (storedUrlHistory) {
      setUrlHistory(storedUrlHistory);
    }
  }, []);
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
            value={article.url}
            onChange={(e) =>
              setArticle((prev) => ({ ...prev, url: e.target.value }))
            }
          />
        </div>
        <div className="cursor-pointer">⮐</div>
      </form>

      <section>
        <div className="flex flex-col justify-center w-[80%] m-auto pt-5 gap-2">
          {urlHistory.map((url, i) => (
            <div key={i} className="flex gap-2">
              <img
                src={copied === url.url ? tick : copy}
                alt="copy"
                className="cursor-pointer"
                onClick={() => handleCopy(url.url)}
              />
              <h1
                className="text-blue-700 font-medium text-sm truncate cursor-pointer"
                onClick={() => handleLinkClick(url.url, url.summary)}
              >
                {url.url}
              </h1>
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
            <p className="mt-10 px-4">{article.summary}</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Summarize;
