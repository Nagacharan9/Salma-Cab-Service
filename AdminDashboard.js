import React, { useState, useEffect } from "react";
import { getAllRides, addRide, deleteRide } from "../api/mockApi";

function AdminDashboard() {
  const [rides, setRides] = useState([]);
  const [newRide, setNewRide] = useState({ from: "", to: "", date: "", driver: "", seats: 4 });

  useEffect(() => {
    async function fetchRides() {
      const allRides = await getAllRides();
      setRides(allRides);
    }
    fetchRides();
  }, []);

  const handleAddRide = async (e) => {
    e.preventDefault();
    await addRide(newRide);
    setRides(await getAllRides());
    setNewRide({ from: "", to: "", date: "", driver: "", seats: 4 });
  };

  const handleDelete = async (id) => {
    await deleteRide(id);
    setRides(await getAllRides());
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h3>Add New Ride</h3>
      <form onSubmit={handleAddRide}>
        <input
          type="text"
          placeholder="From"
          value={newRide.from}
          onChange={(e) => setNewRide({ ...newRide, from: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={newRide.to}
          onChange={(e) => setNewRide({ ...newRide, to: e.target.value })}
          required
        />
        <input
          type="date"
          value={newRide.date}
          onChange={(e) => setNewRide({ ...newRide, date: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Name"
          value={newRide.driver}
          onChange={(e) => setNewRide({ ...newRide, driver: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Seats"
          value={newRide.seats}
          min={1}
          max={8}
          onChange={(e) => setNewRide({ ...newRide, seats: Number(e.target.value) })}
          required
        />
        <button type="submit">Add Ride</button>
      </form>
      <h3>All Rides</h3>
      <ul>
        {rides.map((ride) => (
          <li key={ride.id} style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
            {ride.from} → {ride.to} | {ride.date} | Driver: {ride.driver} | Seats: {ride.seats}
            <button style={{ marginLeft: "10px" }} onClick={() => handleDelete(ride.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
