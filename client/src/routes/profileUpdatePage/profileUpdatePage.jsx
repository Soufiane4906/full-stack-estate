import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  // Function to fetch current location coordinates
  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          document.getElementById("latitude").value = latitude;
          document.getElementById("longitude").value = longitude;
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const {
      username,
      email,
      password,
      latitude,
      longitude,
      country,
      state,
      city,
      languages,
      pointsOfInterest,
      telephone,
      identificationImage,
      bankAccountIdentifier,
    } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
        latitude,
        longitude,
        country,
        state,
        city,
        languages: languages.split(",").map((lang) => lang.trim()),
        pointsOfInterest: pointsOfInterest
          .split(",")
          .map((point) => point.trim()),
        telephone,
        identificationImage,
        bankAccountIdentifier,
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser.username}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser.email}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <div className="item">
            <label htmlFor="latitude">Latitude</label>
            <input
              id="latitude"
              name="latitude"
              type="text"
              defaultValue={currentUser.latitude || ""}
            />
            <button type="button" onClick={fetchCurrentLocation}>
              Use Current Location
            </button>
          </div>
          <div className="item">
            <label htmlFor="longitude">Longitude</label>
            <input
              id="longitude"
              name="longitude"
              type="text"
              defaultValue={currentUser.longitude || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              defaultValue={currentUser.country || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              defaultValue={currentUser.state || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              defaultValue={currentUser.city || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="languages">Languages (comma-separated)</label>
            <input
              id="languages"
              name="languages"
              type="text"
              defaultValue={currentUser.languages?.join(", ") || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="pointsOfInterest">
              Points of Interest (comma-separated)
            </label>
            <input
              id="pointsOfInterest"
              name="pointsOfInterest"
              type="text"
              defaultValue={currentUser.pointsOfInterest?.join(", ") || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="telephone">Telephone</label>
            <input
              id="telephone"
              name="telephone"
              type="text"
              defaultValue={currentUser.telephone || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="identificationImage">Identification Image</label>
            <input
              id="identificationImage"
              name="identificationImage"
              type="text"
              defaultValue={currentUser.identificationImage || ""}
            />
          </div>
          <div className="item">
            <label htmlFor="bankAccountIdentifier">
              Bank Account Identifier
            </label>
            <input
              id="bankAccountIdentifier"
              name="bankAccountIdentifier"
              type="text"
              defaultValue={currentUser.bankAccountIdentifier || ""}
            />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "lamadev",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
