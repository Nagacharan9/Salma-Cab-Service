import React, { useState } from "react";
import RideList from "../components/RideList";
import { searchRides } from "../api/mockApi";

function HomePage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [rides, setRides] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchRides(from, to, date);
    setRides(results);
  };

  return (
    <div>
      <h1>Cab Service - Find Your Ride</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <RideList rides={rides} />
    </div>
  );
}

export default HomePage;
