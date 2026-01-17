import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [loading, setLoding] = useState(false);

  const didFetch = useRef(false);

  const fetchJoke = async () => {
    try {
      setLoding(true);
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await res.json();
      console.log(data);

      setSetup(data.setup);

      setTimeout(() => {
        setPunchline(data.punchline);
        setLoding(false);
      }, 3000);
    } catch (error) {
      alert("error when fetching" + error);
    }
  };

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;
    fetchJoke();
  }, []);

  const randomJokeBtn = async () => {
    fetchJoke();
  };
  return (
    <div className="h-screen flex justify-center items-center  bg-linear-to-r  from-sky-300 via-sky-200 to-sky-400 ">
      <div className="w-full max-w-2xl  flex justify-center items-center flex-col gap-4 bg-white h-64 rounded-2xl shadow-2xl ">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Jokes</h1>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-3">
          {loading ? (
            <>
              <SkeletonLoader />{" "}
            </>
          ) : (
            <>
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="w-full italic text-lg">{setup}</p>
                <p className="w-full italic text-lg">{punchline}</p>
              </div>
            </>
          )}
          <button
            onClick={() => randomJokeBtn()}
            disabled={loading}
            className={`px-6 py-2 border-0 text-white font-bold rounded-md bg-linear-to-r from-sky-300 to-sky-400  transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-110  ${loading ? "cursor-not-allowed" : ""} `}
          >
            Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col gap-3 w-full px-6 justify-center items-center">
      <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
      <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse"></div>
    </div>
  );
};
