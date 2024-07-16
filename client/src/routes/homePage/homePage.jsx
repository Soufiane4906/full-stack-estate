import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faStar, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./homePage.scss";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="homePage container-fluid">
      <div className="row ">
        <div className="col-lg-7 textContainer">
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
              <h2>Awards Gained <FontAwesomeIcon icon={faMedal} className="ms-2" /></h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Guides Available</h2>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra justo vel sapien vehicula tincidunt. Nulla facilisi. Nunc consectetur, libero vitae ullamcorper sollicitudin, eros arcu vestibulum ipsum, sed tempor augue sem eu dui.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam lacinia gravida felis, nec euismod nisi tempus ac. Nullam fermentum ligula id nunc pharetra, nec ultricies dolor convallis.
          </p>
          <div className="reviews">
            <h2>Reviews & Shared Experiences</h2>
            <div className="review">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <p>“Amazing experience with our guide, very knowledgeable and friendly!” - John D.</p>
            </div>
            <div className="review">
              <FontAwesomeIcon icon={faStar} className="me-2" />
              <p>“Our guide made the trip unforgettable. Highly recommend!” - Sarah K.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5 imgContainer">
          <img src="/bg.svg" alt="Travel background" />
          <div className="steps">
            <h2>How to Reserve a Guide</h2>
            <ul>
              <li>
                <h3>1. Pick Your Destination</h3>
                <p>Choose the place you want to visit and find the available guides in that area.</p>
              </li>
              <li>
                <h3>2. Select a Guide</h3>
                <p>Browse through the profiles and select the guide that best matches your needs.</p>
              </li>
              <li>
                <h3>3. Make a Reservation</h3>
                <p>Fill in the necessary details and reserve your guide for the chosen dates.</p>
              </li>
              <li>
                <h3>4. Payment Methods</h3>
                <p>Pay securely using your preferred payment method.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
