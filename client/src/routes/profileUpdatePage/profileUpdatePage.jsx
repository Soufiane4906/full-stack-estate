import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useContext, useState } from "react";
import "./profileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import Select from "react-select";
import "react-country-state-city/dist/react-country-state-city.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faGlobeAmericas,
  faPhone,
  faImage,
  faIdCard,
  faBank,
} from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Map from "../../components/map/Map";

const pointsOfInterestOptions = [
  { value: "museums", label: "Museums" },
  { value: "historical_sites", label: "Historical Sites" },
  { value: "parks", label: "Parks" },
  { value: "restaurants", label: "Restaurants" },
];
const languageOptions = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "es", label: "Spanish" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
  { value: "ar", label: "Arabic" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "ru", label: "Russian" },
  { value: "tr", label: "Turkish" },
  { value: "vi", label: "Vietnamese" },
  { value: "ur", label: "Urdu" },
  { value: "fa", label: "Persian" },
  { value: "sw", label: "Swahili" },
  { value: "nl", label: "Dutch" },
  { value: "fi", label: "Finnish" },
  { value: "sv", label: "Swedish" },
  { value: "no", label: "Norwegian" },
  { value: "da", label: "Danish" },
  { value: "is", label: "Icelandic" },
  { value: "pl", label: "Polish" },
  { value: "cs", label: "Czech" },
  { value: "hu", label: "Hungarian" },
  { value: "ro", label: "Romanian" },
  { value: "bg", label: "Bulgarian" },
  { value: "el", label: "Greek" },
  { value: "he", label: "Hebrew" },
  { value: "ur", label: "Urdu" },
  { value: "hi", label: "Hindi" },
  { value: "bn", label: "Bengali" },
  { value: "ru", label: "Russian" },
  { value: "tr", label: "Turkish" },
  { value: "vi", label: "Vietnamese" },
  { value: "ur", label: "Urdu" },
  { value: "fa", label: "Persian" },
  { value: "sw", label: "Swahili" },
  { value: "nl", label: "Dutch" },
  { value: "fi", label: "Finnish" },
  { value: "sv", label: "Swedish" },
  { value: "no", label: "Norwegian" },

  // Add more languages as needed
];
function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);


  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [country, setCountry] = useState({
    id: currentUser.country,
    name: currentUser.countryName,
  });
  const [state, setState] = useState({
    id: currentUser.state,
    name: currentUser.stateName,
  });
  const [city, setCity] = useState({
    id: currentUser.city,
    name: currentUser.cityName,
  });

  const [pointsOfInterest, setPointsOfInterest] = useState(
    currentUser.pointsOfInterest || []
  );
  const [languages, setLanguages] = useState(currentUser.languages || []);

  const navigate = useNavigate();

  // Function to fetch current location coordinates
  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          document.getElementsByName("latitude")[0].value = latitude;
          document.getElementsByName("longitude")[0].value = longitude;
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleLanguageChange = (selectedOptions) => {
    setLanguages(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };

  const handlePointsOfInterestChange = (selectedOptions) => {
    setPointsOfInterest(
      selectedOptions ? selectedOptions.map((option) => option.value) : []
    );
  };
  const [value, setValue] = useState(currentUser.biographie || "");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const {
      username,
      email,
      password,
      latitude,
      longitude,
      telephone,
      identificationImage,
      bankAccountIdentifier,
    } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        biographie : value,
        avatar: avatar[0],
        latitude,
        longitude,
        country: country.name,
        state: state.name,
        city: city.name,
        languages,
        pointsOfInterest,
        telephone,
        identificationImage,
        bankAccountIdentifier,
      });
      debugger;
      updateUser(res.data);
      //console user data
      console.log(res.data);
      const pointsOfInterestString = pointsOfInterest.join(",");
      const url = `/list?countryName=${country.name}&stateName=${
        state.name
      }&cityName=${city.name}&pointsOfInterest=${encodeURIComponent(
        pointsOfInterestString
      )}&time=${encodeURIComponent(
        formData.get("time")
      )}&date=${encodeURIComponent(formData.get("date"))}`;
      //navigate(url);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <div className="container profileUpdatePage">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <h1>Update Profile</h1>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="username">
                  <FontAwesomeIcon icon={faUser} /> Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  defaultValue={currentUser.username}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  defaultValue={currentUser.email}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="password">
                  <FontAwesomeIcon icon={faLock} /> New Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="telephone">
                  <FontAwesomeIcon icon={faPhone} /> Telephone
                </label>
                <input
                  name="telephone"
                  type="text"
                  className="form-control"
                  defaultValue={currentUser.telephone || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-12">
              <label htmlFor="biographie">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value}
              defaultValue={currentUser.biographie}
              />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="latitude">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Latitude
                </label>
                <input
                  name="latitude"
                  type="text"
                  className="form-control"
                  defaultValue={currentUser.latitude || ""}
                />
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={fetchCurrentLocation}
                >
                  Use Current Location
                </button>
              </div>
              <div className="col-md-6">
                <label htmlFor="longitude">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Longitude
                </label>
                <input
                  name="longitude"
                  type="text"
                  className="form-control"
                  defaultValue={currentUser.longitude || ""}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="country">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Country
                </label>
                <CountrySelect
                  onChange={(country) =>
                    setCountry({ id: country.id, name: country.name })
                  }
                  placeHolder="Select Country"
                  showFlag={true}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="state">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> State
                </label>
                <StateSelect
                  countryid={country.id}
                  onChange={(state) =>
                    setState({ id: state.id, name: state.name })
                  }
                  placeHolder="Select State"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="city">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> City
                </label>
                <CitySelect
                  countryid={country.id}
                  stateid={state.id}
                  onChange={(city) => setCity({ id: city.id, name: city.name })}
                  placeHolder="Select City"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="languages">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Languages
                </label>
                <Select
                  onChange={handleLanguageChange}
                  options={languageOptions}
                  isMulti
                  placeholder="Select Languages"
                  defaultValue={languages.map((poi) => ({
                    value: poi,
                    label: languageOptions.find(
                      (option) => option.value === poi
                    ).label,
                  }))}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="pointsOfInterest">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Points of Interest
                </label>
                <Select
                  isMulti
                  options={pointsOfInterestOptions}
                  onChange={handlePointsOfInterestChange}
                  placeHolder="Select Points of Interest"
                  defaultValue={pointsOfInterest.map((poi) => ({
                    value: poi,
                    label: pointsOfInterestOptions.find(
                      (option) => option.value === poi
                    ).label,
                  }))}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="identificationImage">
                  <FontAwesomeIcon icon={faIdCard} /> Identification Image
                </label>
                <UploadWidget onUpload={setAvatar} />
              </div>
              <div className="col-md-6">
                <label htmlFor="bankAccountIdentifier">
                  <FontAwesomeIcon icon={faBank} /> Bank Account Identifier
                </label>
                <input
                  name="bankAccountIdentifier"
                  type="text"
                  className="form-control"
                  defaultValue={currentUser.bankAccountIdentifier || ""}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label htmlFor="map">
                  <FontAwesomeIcon icon={faGlobeAmericas} /> Map
                </label>
                <Map
                  items={[
                    {
                      id: currentUser.id,
                      latitude: currentUser.latitude || '',
                      longitude: currentUser.longitude || '',
                    },
                  ]}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary w-100">
                  Update Profile
                </button>
              </div>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
          </form>{" "}
        </div>
        <div className="col-md-4">
          <img
            src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
            alt=""
            className="avatar img-fluid rounded-circle"
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
    </div>
  );
}

export default ProfileUpdatePage;
