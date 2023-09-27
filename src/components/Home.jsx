import { logo } from "../assets/index";

const Home = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-6 py-3">
        <div>
          <img src={logo} alt="Summarize" className="'w-28 object-contain'" />
        </div>
        <div>
          <a href="">
            <button className="black_btn">Github</button>
          </a>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-center my-10 text-center">
          <h1 className="text-5xl font-bold">
            Summarize <br /> Articles with <br />{" "}
            <h1 className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent;">
              {" "}
              OpenAI GPT-4{" "}
            </h1>
          </h1>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
