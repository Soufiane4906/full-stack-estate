import "./profilePage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import Chat from "../../components/chat/Chat";

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
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <div className="avatar">
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            </div>
            <div className="userDetails">
              <div className="field">
                <span className="label">Username:</span>
                <span className="value">{currentUser.username}</span>
              </div>
              <div className="field">
                <span className="label">E-mail:</span>
                <span className="value">{currentUser.email}</span>
              </div>
              <div className="field">
                <span className="label">Latitude:</span>
                <span className="value">{currentUser.latitude || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Longitude:</span>
                <span className="value">{currentUser.longitude || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Country:</span>
                <span className="value">{currentUser.country || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">State:</span>
                <span className="value">{currentUser.state || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">City:</span>
                <span className="value">{currentUser.city || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Languages:</span>
                <span className="value">{currentUser.languages.join(", ") || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Points of Interest:</span>
                <span className="value">{currentUser.pointsOfInterest.join(", ") || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Telephone:</span>
                <span className="value">{currentUser.telephone || "N/A"}</span>
              </div>
              {/* <div className="field">
                <span className="label">Identification Image:</span>
                <span className="value">{currentUser.identificationImage || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Avatar Image:</span>
                <span className="value">{currentUser.avatar || "N/A"}</span>
              </div> */}
              <div className="field">
                <span className="label">Bank Account Identifier:</span>
                <span className="value">{currentUser.bankAccountIdentifier || "N/A"}</span>
              </div>
              <div className="field">
                <span className="label">Selected Price:</span>
                <span className="value green ">{currentUser.price + "$" || "N/A"}</span>
              </div>
              {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
