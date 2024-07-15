import { useState } from "react";
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

  const handleLanguageChange = (selectedOptions) => {
    setLanguages(selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  const handlePointsOfInterestChange = (selectedOptions) => {
    setPointsOfInterest(selectedOptions ? selectedOptions.map(option => option.value) : []);
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
          placeHolder="Select Country"
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
          placeHolder="Select State"
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
          placeHolder="Select Languages"
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
        <h6>Preferred Time</h6>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Select Time"
        />
      </div>

      <button className="submit-btn">Find Guide</button>
    </div>
  );
}

export default SearchBar;
