import { Link } from "react-router-dom";
import "./card.scss";
import DOMPurify from "dompurify";

function Card({ item }) {
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

  return (

      <div className="card">
        <div className="leftTopCorner">
          <img src={item.avatar} alt={item.username} className="avatar" />
        </div>
        <div className="textContainer">
          <h2 className="title">
            <strong><Link to={`/${item.id}`}>{item.username}</Link></strong>
          </h2>
          <div className="details">
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>State:</strong> {item.state}</p>
            <p><strong>City:</strong> {item.city}</p>
          </div>
          <div
            className="biography"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(item.biographie),
            }}
          ></div>
          <div className="details">
            <p><strong>Languages:</strong> {item.languages.map(lang => (
              <img src={getLanguageFlag(lang)} alt={lang} className="flagIcon" key={lang} />
            ))}</p>
            <p><strong>Points of Interest:</strong> {item.pointsOfInterest.join(", ") || "No points of interest listed"}</p>
          </div>
          <div className="bottom">
            <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="save" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="chat" />
              </div>
            </div>
          </div>
          <button onClick={() => navigate(`/${item.id}`)} className="detailsButton">
            Go to Guide Details
          </button>
        </div>
      </div>
    );
  }


export default Card;
