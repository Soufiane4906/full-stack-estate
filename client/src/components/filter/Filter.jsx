import { useState } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    countryName: '',
    stateName: '',
    cityName: '',
    pointsOfInterest: '',
    time: '',
    date: ''
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("cityName")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="countryName">Country</label>
          <input
            type="text"
            id="countryName"
            name="countryName"
            placeholder="Country"
            onChange={handleChange}
            defaultValue={query.countryName}
          />
        </div>
        <div className="item">
          <label htmlFor="stateName">State</label>
          <input
            type="text"
            id="stateName"
            name="stateName"
            placeholder="State"
            onChange={handleChange}
            defaultValue={query.stateName}
          />
        </div>
        <div className="item">
          <label htmlFor="cityName">City</label>
          <input
            type="text"
            id="cityName"
            name="cityName"
            placeholder="City"
            onChange={handleChange}
            defaultValue={query.cityName}
          />
        </div>
        <div className="item">
          <label htmlFor="pointsOfInterest">Points of Interest</label>
          <input
            type="text"
            id="pointsOfInterest"
            name="pointsOfInterest"
            placeholder="Points of Interest (comma separated)"
            onChange={handleChange}
            defaultValue={query.pointsOfInterest}
          />
        </div>
        <div className="item">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleChange}
            defaultValue={query.time}
          />
        </div>
        <div className="item">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            defaultValue={query.date}
          />
        </div>
      </div>
      <div className="bottom">
        <button onClick={handleFilter}>
          <img src="/search.png" alt="Search" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
