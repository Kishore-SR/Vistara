
export interface TravelBuddy {
  id: string;
  user: {
    name: string;
    avatar: string;
    age?: number;
    gender?: string;
  };
  destination: string;
  fromDate: string;
  toDate: string;
  interests: string[];
  message: string;
}

export const travelBuddies: TravelBuddy[] = [
  {
    id: "tb-001",
    user: {
      name: "Ankit Sharma",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      age: 28,
      gender: "Male"
    },
    destination: "Hampi, Karnataka",
    fromDate: "Dec 15, 2023",
    toDate: "Dec 22, 2023",
    interests: ["Photography", "History", "Architecture", "Hiking"],
    message: "Looking for 2-3 travel companions to explore the ancient ruins of Hampi. Planning to rent bicycles to explore the vast area and capture some amazing sunset shots!"
  },
  {
    id: "tb-002",
    user: {
      name: "Priya Mehta",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      age: 25,
      gender: "Female"
    },
    destination: "Kerala Backwaters",
    fromDate: "Jan 5, 2024",
    toDate: "Jan 12, 2024",
    interests: ["Culture", "Food", "Nature", "Yoga"],
    message: "Planning a relaxing houseboat trip through the Kerala backwaters, followed by some Ayurvedic spa experiences. Would love to share the costs and experiences with like-minded travelers!"
  },
  {
    id: "tb-003",
    user: {
      name: "Rajiv Singh",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      age: 34,
      gender: "Male"
    },
    destination: "Varanasi, Uttar Pradesh",
    fromDate: "Nov 20, 2023",
    toDate: "Nov 27, 2023",
    interests: ["Spirituality", "Photography", "History", "Food"],
    message: "Seeking travel companions for a spiritual and cultural journey to Varanasi. Will be exploring the ghats, attending the Ganga Aarti, and visiting nearby Buddhist sites like Sarnath."
  },
  {
    id: "tb-004",
    user: {
      name: "Meera Patel",
      avatar: "https://randomuser.me/api/portraits/women/74.jpg",
      age: 31,
      gender: "Female"
    },
    destination: "Rajasthan Circuit",
    fromDate: "Dec 10, 2023",
    toDate: "Dec 24, 2023",
    interests: ["Architecture", "History", "Shopping", "Desert Safari"],
    message: "Planning a 2-week trip covering Jaipur, Jodhpur, Udaipur, and Jaisalmer. Looking for 2-4 people to join and share transportation costs. Will be staying in heritage hotels and exploring palaces, forts, and local markets."
  },
  {
    id: "tb-005",
    user: {
      name: "Arun Kumar",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      age: 27,
      gender: "Male"
    },
    destination: "Spiti Valley, Himachal Pradesh",
    fromDate: "Jun 5, 2024",
    toDate: "Jun 15, 2024",
    interests: ["Trekking", "Photography", "Buddhism", "Adventure"],
    message: "Organizing a road trip to Spiti Valley next summer. Need 3-4 adventure enthusiasts to share the journey. Will be visiting Key Monastery, Chandratal Lake, and doing some short treks. Previous high-altitude experience preferred."
  },
  {
    id: "tb-006",
    user: {
      name: "Neha Reddy",
      avatar: "https://randomuser.me/api/portraits/women/58.jpg",
      age: 29,
      gender: "Female"
    },
    destination: "Mysore & Coorg, Karnataka",
    fromDate: "Feb 2, 2024",
    toDate: "Feb 9, 2024",
    interests: ["Culture", "Coffee Plantations", "Wildlife", "Food"],
    message: "Planning a week-long trip to explore Mysore Palace, Coorg coffee estates, and some wildlife sanctuaries. Looking for 2-3 travel companions to share the experience and costs. I speak English, Hindi, and Kannada which will be helpful throughout the trip."
  }
];
