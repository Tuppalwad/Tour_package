// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = [
  {
    id: 111,
    name: "City Sightseeing Tour",
    description:
      "Explore the city's famous landmarks and attractions on this guided tour.",
    duration: "3 hours",
    price: "$50",
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  {
    id: 222,
    name: "Wine Tasting Tour",
    description:
      "Visit some of the region's best wineries and sample their finest wines.",
    duration: "6 hours",
    price: "$100",
    location: {
      latitude: 38.2975,
      longitude: -122.2869,
    },
  },
  {
    id: 333,
    name: "Golden Gate Bridge Bike Tour",
    description:
      "Explore the city's famous landmarks and attractions on this guided tour.",
    duration: "3 hours",
    price: "$50",
    location: {
      latitude: 37.8199,
      longitude: -122.4783,
    },
  },
  {
    id: 444,
    name: "Alcatraz Island Tour",
    description:
      "Explore the city's famous landmarks and attractions on this guided tour.",
    duration: "3 hours",
    price: "$50",
    location: {
      latitude: 37.8267,
      longitude: -122.4233,
    },
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
