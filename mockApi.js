// Mock data and functions for demo purposes

let rides = [
  { id: 1, from: "Mumbai", to: "Pune", date: "2025-09-20", driver: "Amit", seats: 3 },
  { id: 2, from: "Delhi", to: "Agra", date: "2025-09-21", driver: "Priya", seats: 2 },
];

export async function searchRides(from, to, date) {
  return rides.filter(
    (ride) =>
      ride.from.toLowerCase().includes(from.toLowerCase()) &&
      ride.to.toLowerCase().includes(to.toLowerCase()) &&
      ride.date === date
  );
}

export async function getAllRides() {
  return rides;
}

export async function addRide(ride) {
  rides.push({ ...ride, id: Date.now() });
}

export async function deleteRide(id) {
  rides = rides.filter((ride) => ride.id !== id);
}
