import { logo } from "../assets/index";
import Summarize from "../components/Summarize"

const Home = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-3">
        <div>
          <img src={logo} alt="Summarize" className="'w-28 object-contain'" />
        </div>
        <div>
          <a href="">
            <button className="">Github</button>
          </a>
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
        <div className="flex items-center justify-center text-center text-lg text-slate-600">
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
