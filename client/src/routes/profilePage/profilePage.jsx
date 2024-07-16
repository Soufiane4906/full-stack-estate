import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import Chat from "../../components/chat/Chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
  faImage,
  faIdCard,
  faSignOutAlt,
  faMapPin,
  faLanguage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./profilePage.scss";

function ProfilePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h1>User Information</h1>
              <Link to="/profile/update">
                <button className="btn btn-primary">Update Profile</button>
              </Link>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={currentUser.avatar || "/noavatar.jpg"}
                  alt=""
                  className="rounded-circle me-3"
                  width="80"
                  height="80"
                />
                <h2>{currentUser.username}</h2>
              </div>
              <ul className="list-group">
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  E-mail: {currentUser.email}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  Latitude: {currentUser.latitude || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                  Longitude: {currentUser.longitude || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faGlobe} className="me-2" />
                  Country: {currentUser.country || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faMapPin} className="me-2" />
                  State: {currentUser.state || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faMapPin} className="me-2" />
                  City: {currentUser.city || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faLanguage} className="me-2" />
                  Languages: {currentUser.languages.join(", ") || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faStar} className="me-2" />
                  Points of Interest: {currentUser.pointsOfInterest.join(", ") || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faPhone} className="me-2" />
                  Telephone: {currentUser.telephone || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faImage} className="me-2" />
                  Identification Image: {currentUser.identificationImage || "N/A"}
                </li>
                <li className="list-group-item">
                  <FontAwesomeIcon icon={faIdCard} className="me-2" />
                  Bank Account Identifier: {currentUser.bankAccountIdentifier || "N/A"}
                </li>
              </ul>
              <button className="btn btn-danger mt-3" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h2>Chat</h2>
            </div>
            <div className="card-body">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
