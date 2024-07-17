import { useState, useEffect } from "react";
import "./filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    country: '',
    stateName: '',
    cityName: '',
    pointsOfInterest: '',
    time: '',
    date: ''
  });

  useEffect(() => {
    const initialQuery = {
      country: searchParams.get("country") || '',
      stateName: searchParams.get("stateName") || '',
      cityName: searchParams.get("cityName") || '',
      pointsOfInterest: searchParams.get("pointsOfInterest") || '',
      time: searchParams.get("time") || '',
      date: searchParams.get("date") || ''
    };
    setQuery(initialQuery);
  }, [searchParams]);

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    const updatedParams = { ...query };
    Object.keys(updatedParams).forEach(key => {
      if (!updatedParams[key]) {
        delete updatedParams[key];
      }
    });
    setSearchParams(updatedParams);
  };

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("cityName")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={query.country}
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
            value={query.stateName}
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
            value={query.cityName}
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
            value={query.pointsOfInterest}
          />
        </div>
        <div className="item">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            onChange={handleChange}
            value={query.time}
          />
        </div>
        <div className="item">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            value={query.date}
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
