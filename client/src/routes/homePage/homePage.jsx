import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Perfect Travel Guide</h1>
          <p>
            Discover the best guides to make your trips unforgettable. Whether you're looking for cultural insights, adventure, or just a local companion, we connect you with the right guide for your needs.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Guides Available</h2>
            </div>
          </div>
          {/* Adding additional content to potentially exceed viewport height */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra justo vel sapien
            vehicula tincidunt. Nulla facilisi. Nunc consectetur, libero vitae ullamcorper
            sollicitudin, eros arcu vestibulum ipsum, sed tempor augue sem eu dui.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nullam lacinia gravida felis, nec euismod nisi tempus ac. Nullam fermentum ligula id
            nunc pharetra, nec ultricies dolor convallis.
          </p>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.svg" alt="Travel background" />
      </div>
    </div>
  );
}

export default HomePage;
