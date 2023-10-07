import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleCat = () => {
  const [cat, setcat] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleCatData = async () => {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/breeds/search?q=${name}`
        );
        const data = await res.json();
        setcat(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCatData();
  }, [name]);

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen p-14">
        {cat.map((item, i) => {
          return (
            <div
              key={i}
              className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center"
            >
              <article className="mr-4">
                <img
                  src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
                  alt={item.name}
                  className="rounded-lg"
                />
              </article>
              <article>
                <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
                  {item.name}
                </h1>
                <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
                  {item.description}
                </p>

                <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
                  <li className="py-1" >
                    <span className="font-bold text-slate-400">
                      Behaviour :
                    </span>{" "}
                    {item.temperament}
                  </li>
                  <li className="py-1" >
                    <span className="font-bold text-slate-400">Weight : </span>
                    {item.weight.metric} Kgs
                  </li>
                  <li className="py-1" >
                    <span className="font-bold text-slate-400">Origin :</span>{" "}
                    {item.origin}
                  </li>
                  <li className="py-1" >
                    <span className="font-bold text-slate-400">
                      Life-Span :
                    </span>{" "}
                    {item.life_span}
                  </li>
                </ul>
                <Link
                  to="/"
                  className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white  hover:bg-slate-500  transition-all duration-200"
                >
                  &larr; BACK
                </Link>
              </article>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default SingleCat;
