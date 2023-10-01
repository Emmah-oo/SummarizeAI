import { logo } from "../assets/index";
import Summarize from "../components/Summarize";

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <header className="flex items-center justify-between px-6 py-3">
        <div>
          <img src={logo} alt="Summarize" className="'w-28 object-contain'" />
        </div>
        <div>
          <button
            className="bg-black text-white px-3 py-2 rounded-md"
            onClick={() =>
              window.open(
                "https://github.com/Emmah-oo/SummarizeAI",
                "_blank"
              )
            }
          >
            Github
          </button>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-center my-10 text-center">
          <h1 className="text-5xl font-bold">
            Summarize <br /> Articles with <br />{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              {" "}
              OpenAI GPT-4{" "}
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center text-center text-lg text-slate-600 px-4">
          <p>
            Summarize your reading with summarize, an open-source article
            summarizer that transforms lengthy articles into clear and concise
            summary
          </p>
        </div>
      </section>

      <section>
        <Summarize />
      </section>
    </div>
  );
};

export default Home;
