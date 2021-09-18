import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_img_url = "https://image.tmdb.org/t/p/original";
function YTRow({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hover, setHover] = useState({ hovering: false, id: "" });
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.items);
      setMovies(request.data.items);
      return request;
    }
    console.log(fetchUrl);
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl == movie.id) {
      setTrailerUrl("");
    } else {
      setTrailerUrl(movie.id);
      console.log(`https://www.youtube.com/watch?v=${movie.id}`);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <div className="row_poster">
              <div>
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  //   className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  src={movie.snippet.thumbnails.medium.url}
                  alt={movie.snippet.title}
                />
                <div className="videoTitle">
                  <h5>{movie.snippet.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {trailerUrl && (
        <div>
          <button
            className={"close_button"}
            onClick={() => {
              setTrailerUrl("");
            }}
          >
            Close
          </button>

          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default YTRow;
