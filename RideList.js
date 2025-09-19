import React from "react";

function RideList({ rides }) {
  if (!rides.length) {
    return <div>No rides found. Try changing your search.</div>;
  }
  return (
    <div>
      <h2>Available Rides</h2>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
            <strong>{ride.from}</strong> → <strong>{ride.to}</strong> <br />
            Date: {ride.date} <br />
            Driver: {ride.driver} <br />
            Seats Available: {ride.seats}
            <br />
            <button>Book Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RideList;
