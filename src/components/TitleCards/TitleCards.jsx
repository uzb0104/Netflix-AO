import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category = "popular" }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTE3Y2M3NjMwM2IyNDVkMzgzNzQyMTliMTlkNDhjZSIsIm5iZiI6MTcyOTg1MjIxNy43NDgsInN1YiI6IjY3MWI3MzM5NWJlOWU4NzU5ZGE3MjhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O_ulI5yeGrAHAfjE9LqDdKN20IqSKl9wIDbKMDEU2Vo",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;

    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((response) => setApiData(response.results || []))
      .catch((err) => console.error(err));

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]); // ✅ category o‘zgarsa, API qayta chaqiriladi

  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.length > 0 ? (
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={
                  card.backdrop_path
                    ? "https://image.tmdb.org/t/p/w500" + card.backdrop_path
                    : "default-image.jpg"
                }
                alt=""
              />
              <p>{card.original_title || card.name}</p>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default TitleCards;
