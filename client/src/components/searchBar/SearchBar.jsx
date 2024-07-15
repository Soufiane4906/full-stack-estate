import { useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import "./searchBar.scss";
import { CitySelect, CountrySelect, StateSelect, LanguageSelect } from "react-country-state-city";
import Select from "react-select";
import "react-country-state-city/dist/react-country-state-city.css";

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
  const [languages, setLanguages] = useState([]);
  const [pointsOfInterest, setPointsOfInterest] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleLanguageChange = (selectedOptions) => {
    setLanguages(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handlePointsOfInterestChange = (selectedOptions) => {
    setPointsOfInterest(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  // Function to construct the query string
  const constructQuery = () => {
    const params = new URLSearchParams();

    if (countryId) params.append("countryId", countryId);
    if (stateId) params.append("stateId", stateId);
    if (cityId) params.append("cityId", cityId);
    if (languages.length > 0) params.append("languages", languages.join(","));
    if (pointsOfInterest.length > 0) params.append("pointsOfInterest", pointsOfInterest.join(","));
    if (time) params.append("time", time);

    return params.toString();
  };

  return (
    <div className="search-bar">
      <h2>Find Your Perfect Guide</h2>
      
      <div className="form-group">
        <h6>Choose Your Country</h6>
        <CountrySelect
          onChange={(country) => {
            setCountryId(country.id);
          }}
          showFlag={true}
        />
      </div>

      <div className="form-group">
        <h6>Select Your State</h6>
        <StateSelect
          countryid={countryId}
          onChange={(state) => {
            setStateId(state.id);
          }}
        />
      </div>

      <div className="form-group">
        <h6>Pick Your City</h6>
        <CitySelect
          countryid={countryId}
          stateid={stateId}
          onChange={(city) => {
            setCityId(city.id);
          }}
          placeHolder="Select City"
        />
      </div>

      <div className="form-group">
        <h6>Languages You Speak</h6>
        <LanguageSelect
          isMulti
          onChange={handleLanguageChange}
          displayNative={true}
        />
      </div>

      <div className="form-group">
        <h6>Your Points of Interest</h6>
        <Select
          isMulti
          options={pointsOfInterestOptions}
          onChange={handlePointsOfInterestChange}
          placeholder="Select Points of Interest"
        />
      </div>

<div className="form-group">
  <h6>Preferred Date</h6>
  <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    placeholder="Select Date"
  />
</div>
<div className="form-group">
  <h6>Preferred Time</h6>
  <input
    type="time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
    placeholder="Select Time"
  />
</div>


      <Link to={`/list?${constructQuery()}`}>
        <button className="submit-btn">Find Guide</button>
      </Link>
    </div>
  );
}

export default SearchBar;
