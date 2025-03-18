import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [apiData, setApiData] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  useEffect(() => {
    if (!id) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          setApiData(null);
        }
      })
      .catch((err) => console.error("API error:", err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-arrow"
        onClick={() => {
          navigate(-1);
        }}
      />
      {apiData ? (
        <>
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{apiData.published_at || "No data"}</p>
            <p>{apiData.name || "No data"}</p>
            <p>{apiData.type || "No data"}</p>
          </div>
        </>
      ) : (
        <p>Hech qanday video topilmadi!</p>
      )}
    </div>
  );
};

export default Player;
