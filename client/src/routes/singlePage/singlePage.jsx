import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

function SinglePage() {
  const getLanguageFlag = (language) => {
    switch (language) {
      case 'fr':
        return 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg';
      case 'es':
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg';
        case 'de':
          return 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg';
        case 'it':
          return 'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg';
        case 'pt':
          return 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg';
        case 'ru':
          return 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg';
        case 'zh':
          return 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg';
        case 'ja':
          return 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg';
        case 'ko':
          return 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg';
        case 'ar':
          return 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_Saudi_Arabia.svg';
        case 'hi':
          return 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg';
        case 'tr':
          return 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg';
        case 'nl':
          return 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg';
        case 'pl':
          return 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg';
        case 'id':
          return 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg';
        case 'th':
          return 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg';
        case 'vi':
          return 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg';
        case 'sv':
          return 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg';
       case 'en':
          return 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg';



      // Add more cases for other languages

      default:
        return '';
    }
  };

  const handleStripePayment = () => {
    navigate('/checkout', { state: { amount: guide.price * 100 } }); // assuming price is in dollars
  };

  const guide = useLoaderData();
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="singlePage container">
      <div className="details container ">
        <div className="wrapper">
        <p className="title">Guide Profile</p>

          <div className="info">
            <div className="top">

            <div className="user">
                <img src={guide.avatar} alt="User avatar" />
                <span>{guide.username}</span>
                <div className="price">${guide.price} / hour</div>
              </div>
              <div className="guide">
                <div className="address">
                  <img src="/pin.png" alt="Location pin" />
                  <span>{guide.country} {guide.city}, {guide.state} </span>
                </div>
              </div>

              <div className="buttons">

              <button className="btn btn-submit btn-primary mt-4" onClick={handleStripePayment}>

                  Pay Now
                </button>

              </div>
            </div>
            <div className="biography">
              <p><strong>Biography:</strong></p>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(guide.biographie) }} />
            </div>
            <div className="details col-md-6">
              <p><strong>Country:</strong> {guide.country}</p>
              <p><strong>State:</strong> {guide.state}</p>
              <p><strong>City:</strong> {guide.city}</p>
              <p><strong>Languages:</strong> {guide.languages.map(lang => (
              <img src={getLanguageFlag(lang)} alt={lang} className="flagIcon" key={lang} />
            ))}</p>  <p><strong>Points of Interest:</strong> {guide.pointsOfInterest.join(", ") || "No points of interest listed"}</p>
            </div>
            

          </div>
        </div>
      </div>
      <div className="features container ">
        <div className="wrapper">
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[guide]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
