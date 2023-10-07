import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import dotenv from "dotenv";

// dotenv.config();

const Home = () => {
  const [cats, setCats] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(" https://api.thecatapi.com/v1/breeds");
        const data = await res.json();
        setCats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogData();
  }, []);

  const searchForCat = async () => {
    try {
      const res = await fetch(
        ` https://api.thecatapi.com/v1/breeds/search?q=${text}`
      );
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchForCat();
  };

  return (
    <>
      {!cats ? (
        <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl h-screen font-bold uppercase">
          Loading.....
        </h1>
      ) : (
        <>
          <section className="p-8 max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="flex items-center justify-center text-white text-center px-5 text-3xl   font-bold uppercase">
                The Cat Breed
              </h1>
              <p className="my-8 text-white">
                This Application is Powered By{" "}
                <a
                  href="https://thedogapi.com"
                  className="text-indigo-600 underline active:text-orange-500"
                >
                  The Cat App
                </a>
              </p>
              <form
                onSubmit={handleSubmit}
                action=""
                className="max-w-xl mx-auto "
                autoComplete="off"
              >
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search For Cat Breed"
                  className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </form>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2  xl:grid-cols-3  my-12  lg:my-20">
              {cats.map((cat, i) => {
                return (
                  <Link
                    to={`/${cat.name}`}
                    key={i}
                    className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200"
                  >
                    <article>
                      <img
                        src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                        alt={cat.name}
                        loading="lazy"
                        className="rounded md:h-72 w-full object-cover"
                      />
                      <h3 className="text-white text-lg font-bold mt-4">
                        {cat.name}
                      </h3>
                      <p className="text-slate-400">
                        They're Very Good at Being {cat.temperament}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
