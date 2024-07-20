import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faStar,
  faMapMarkerAlt,
  faClock,
  faMapLocation,
  faPersonBooth,
  faPersonCircleCheck,
  faExclamation,
  faArrowUp,
  faSitemap,
  faStepForward,
  faArrowUp19,
  faArrowDown19,
  faCommentAlt,
  faMessage,
  faStarHalf,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.scss";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="section">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center titre">
              <img src="/logo.png" alt="Logo" height="40" />
              <p>
                <span className="text-light"> Your Place To </span> Discover The
                Best Guides{" "}
                <span className="ders">
                  {" "}
                  To Make Your Trips Unforgettable .
                </span>{" "}
                <br />
                <span className="ders">We Connect You </span>With The Right
                Guide <span className="text-light"> For Your Needs !</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homePage container-fluid">
        <div className="col-md-12 ">
          <div className="col-md-12 textContainer">
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>
                  4+ <FontAwesomeIcon icon={faArrowUp} className="ms-2" />
                </h1>
                <h2>Years of Experience</h2>
              </div>
              <div className="box">
                <h1>
                  +45 <FontAwesomeIcon icon={faMapLocation} className="ms-2" />
                </h1>
                <h2>Countries</h2>
              </div>
              <div className="box">
                <h1>
                  2000+{" "}
                  <FontAwesomeIcon
                    icon={faPersonCircleCheck}
                    className="ms-2"
                  />
                </h1>
                <h2>Guides Available</h2>
              </div>
            </div>

            <div className="reviews container">
              <h2>
                {" "}
                <FontAwesomeIcon icon={faCommentAlt} className="ms-2 comment" />
                Reviews & Shared Experiences
              </h2>
              <div className="row">
                <div className=" col-lg-4 review">
                  <img src="/noavatar.jpg" className="avt"></img>

                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />

                  <p>
                    “Amazing experience with our guide, very knowledgeable and
                    friendly!” -<span className="star">John D.</span>
                  </p>
                </div>
                <div className="col-lg-4 review">
                  <img src="/noavatar.jpg" className="avt"></img>

                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />

                  <p>
                    “I couldn't realise that I could find someone who speak my
                    language and be my trip's companion!” -{" "}
                    <span className="star">Lee-Jan D</span>.
                  </p>
                </div>
                <div className="col-lg-4 review">
                  <img src="/noavatar.jpg" className="avt"></img>

                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className="me-2 star"
                  />

                  <p>
                    “Our guide made the trip unforgettable. Highly recommend!” -{" "}
                    <span className="star">Sarah K.</span>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className=" col-lg-4 review">
                  <img src="/noavatar.jpg" className="avt"></img>
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />

                  <p>
                    “Amazing experience with our guide, very knowledgeable and
                    friendly!” -<span className="star">John D.</span>
                  </p>
                </div>
                <div className="col-lg-4  review">
                  <img src="/noavatar.jpg" className="avt"></img>

                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />

                  <p>
                    “I couldn't realise that I could find someone who speak my
                    language and be my trip's companion!” -{" "}
                    <span className="star">Lee-Jan D</span>.
                  </p>
                </div>
                <div className="col-lg-4  review">
                  <img src="/noavatar.jpg" className="avt"></img>

                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon icon={faStar} className="me-2 star" />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className="me-2 star"
                  />

                  <p>
                    “Our guide made the trip unforgettable. Highly recommend!” -{" "}
                    <span className="star">Sarah K.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="section-why">
        {" "}
        <div className="row">
          <div className="col-lg-6 ">
            <div className="section2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="section-title">Why Choose GeeDers ?</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="box">
                      <FontAwesomeIcon icon={faMedal} className="icon" />
                      <h3>Quality Guides</h3>
                      <p>
                        Our guides are experienced professionals who will make
                        your trip unforgettable.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box">
                      <FontAwesomeIcon icon={faClock} className="icon" />
                      <h3>Save Time</h3>
                      <p>
                        Forget about spending hours planning your trip. Our
                        guides will take care of everything.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="box">
                      <FontAwesomeIcon icon={faSitemap} className="icon" />
                      <h3>Local Insights</h3>
                      <p>
                        Discover hidden gems and local secrets with the help of
                        our guides.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {" "}
            <div className="steps">
              <h2>
                {" "}
                <FontAwesomeIcon className="ms-2 " />
                Meet your guide in 5 steps{" "}
                <FontAwesomeIcon icon={faArrowDown19} className="ms-2 " />
              </h2>
              <ol>
                <li>
                  <h5>
                     Choose the place you want to visit and find the available
                    guides in that area.
                  </h5>
                </li>
                <li>
                  <h5>
                    Browse through the profiles and select the guide that
                    best matches your needs.
                  </h5>
                </li>
                <li>
                  <h5>
                     Fill in the necessary details and reserve your guide for
                    the chosen dates.
                  </h5>
                </li>
                <li>
                  <h5>Pay securely using your preferred payment method .</h5>
                </li>
                <li>
                  <h5>
                     Use Chat to coordinate with your guide until your meeting
                    .
                  </h5>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="footer">
       
          <div className="row">
            <div className="col-lg-4">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pharetra justo vel sapien vehicula tincidunt. Nulla facilisi.
                Nunc consectetur, libero vitae ullamcorper sollicitudin, eros
                arcu vestibulum ipsum, sed tempor augue sem eu dui.
              </p>
            </div>
            <div className="col-lg-4">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Guides</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h3>Contact Us</h3>
              <p>
                123 Main Street <br />
                New York, NY 10001 <br />
                (555) 555-5555 <br />
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
            </div>
          </div>
        </div>

    </div>
  );
}

export default HomePage;
