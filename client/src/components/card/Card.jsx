import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.avatar} alt={item.username} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.username}</Link>
        </h2>
        <p className="email">
          <img src="/email.png" alt="email" />
          <span>{item.email}</span>
        </p>
        <p className="biographie">{item.biographie}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/language.png" alt="languages" />
              <span>{item.languages.join(", ") || "No languages listed"}</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
