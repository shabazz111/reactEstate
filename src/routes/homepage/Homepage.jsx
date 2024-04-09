import SearchBar from "../../components/searchBar/SearchBar";
import "./Homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Find Real Estate & Get Your Dream Place </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            cum similique obcaecati debitis culpa. Quae, quod! Repellat magnam
            quasi similique neque nisi, officia delectus fuga voluptatem atque
            culpa autem consequatur.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
