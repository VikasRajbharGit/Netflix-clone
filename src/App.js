import "./App.css";
import Row from "./Row";
import YTRow from "./YTRow";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <YTRow
        title="Pets & Animals"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=15&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />
      <YTRow
        title="Entertainment"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=24&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />
      <YTRow
        title="News & Politics"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=25&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />
      <YTRow
        title="Music"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=10&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />
      <YTRow
        title="Science & Technology"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=28&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />
      <YTRow
        title="Most Popular"
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      />

      {/* <Row
        title="Netflix Originals"
        isLargeRow={true}
        fetchUrl={
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyDLH5PrPuybjbNVzN8YbeansUMWru1XqAI"
        }
      /> */}
      {/* <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
