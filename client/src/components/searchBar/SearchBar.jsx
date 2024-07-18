import { useState } from "react";
import { Link } from "react-router-dom";
import "./searchBar.scss";
import { CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import Select from "react-select";
import "react-country-state-city/dist/react-country-state-city.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faClock, faCalendarAlt,  faGlobeAmericas, faMapMarkerAlt, faMapMarker,faStar, faSearch, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const pointsOfInterestOptions = [
  { value: "museums", label: "Museums" },
  { value: "historical_sites", label: "Historical Sites" },
  { value: "parks", label: "Parks" },
  { value: "restaurants", label: "Restaurants" },
];

function SearchBar() {
  const [countryId, setCountryId] = useState(null);
  const [stateId, setStateId] = useState(null);
  const [cityId, setCityId] = useState(null);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");
  const [languages, setLanguages] = useState([""]);
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleLanguageChange = (selectedOptions) => {
    setLanguages(selectedOptions ? selectedOptions.map(option => option.label) : []);
  };

  const handlePointsOfInterestChange = (selectedOptions) => {
    setPointsOfInterest(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  // Function to construct the query string
  const constructQuery = () => {
    const params = new URLSearchParams();

    if (countryName) params.append("country", countryName);
    if (stateName) params.append("stateName", stateName);
    if (cityName) params.append("cityName", cityName);
    if (languages.length > 0) params.append("languages", languages.join(","));
    if (pointsOfInterest.length > 0) params.append("pointsOfInterest", pointsOfInterest.join(","));
    if (time) params.append("time", time);
    if (date) params.append("date", date);

    return params.toString();
  };

  return (

    <div className="search-bar container">
      <h2>Find Your Guide Now !</h2>
      <div className="row">
        <div className="col-md-4 form-group">
        <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Choose The Country</h6>
          <CountrySelect
            onChange={(country) => {
              setCountryId(country.id);
              setCountryName(country.name);
            }}
            showFlag={true}
            placeHolder="Select Country"

          />
        </div>

        <div className="col-md-4 form-group">
          <h6> <FontAwesomeIcon icon={faMapLocationDot}/> Select The  State</h6>
          <StateSelect
            countryid={countryId}
            onChange={(state) => {
              setStateId(state.id);
              setStateName(state.name);

            }}
            placeHolder="Select State"

          />
        </div>

        <div className="col-md-4 form-group">
        <h6> <FontAwesomeIcon icon={faMapMarkerAlt}/> Pick The City</h6>
          <CitySelect
            countryid={countryId}
            stateid={stateId}
            onChange={(city) => {
              setCityId(city.id);
              setCityName(city.name);
            }}
            placeHolder="Select City"
          />
        </div>

        <div className="col-md-4 form-group">
          <h6><FontAwesomeIcon icon={faGlobeAmericas} /> Languages You Speak ?
</h6>
          <LanguageSelect
            onChange={handleLanguageChange}
            displayNative={true}



          />
        </div>

        <div className="col-md-4 form-group">
        <h6><FontAwesomeIcon icon={faStar} />Your Points of Interest ?</h6>
          <Select
            isMulti
            options={pointsOfInterestOptions}
            onChange={handlePointsOfInterestChange}
            displayNative={true}
placeholder="Points of Interest"

          />
        </div>

        {/* <div className="col-md-4 form-group">
        <h6><FontAwesomeIcon icon={faCalendarAlt} /> Preferred Date</h6>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control"
            placeholder="Select Date"
          />
        </div>

        <div className="col-md-4 form-group">
        <h6><FontAwesomeIcon icon={faClock} /> Preferred Time</h6>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="form-control"
            placeholder="Select Time"
          />
        </div> */}


        <div className="col-md-4 text-center">
          <Link to={`/list?${constructQuery()}`}>
            <button className="submit-btn btn btn-primary mt-3"> <FontAwesomeIcon icon={faSearch} /> Search</button>
          </Link>
        </div>
      </div> </div>

  );
}

export default SearchBar;
