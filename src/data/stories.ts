
export interface Story {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  author: {
    name: string;
    avatar?: string;
  };
  postedAt: string;
  likes: number;
  comments: number;
  categories: string[];
  content?: string;
  media?: {
    type: 'image' | 'video';
    url: string;
    caption?: string;
  }[];
}

export const stories: Story[] = [
  {
    id: "hampi-adventure",
    title: "My Journey Through the Ancient Ruins of Hampi",
    excerpt: "Exploring the boulder-strewn landscape and magnificent temples of the Vijayanagara Empire.",
    thumbnail: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    author: {
      name: "Priya Sharma",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    postedAt: "3 days ago",
    likes: 342,
    comments: 28,
    categories: ["Historical", "Adventure"],
    content: "My journey to Hampi was a step back in time. Walking through the ancient ruins, I could almost hear the echoes of the bustling bazaars that once thrived here. The Virupaksha Temple stands tall, a testament to the architectural genius of the Vijayanagara era. Climbing up Matanga Hill at sunset offered panoramic views of the entire landscape - a sea of boulders interspersed with temple complexes and the Tungabhadra River snaking through. The coracle boat ride on the river was another highlight, spinning around in these circular boats as our guide shared stories of the ancient kingdom.",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
        caption: "The magnificent ruins against a dramatic sky"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&q=80",
        caption: "The iconic stone chariot at Vittala Temple"
      },
      {
        type: "video",
        url: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
        caption: "Coracle ride on the Tungabhadra River"
      }
    ]
  },
  {
    id: "backwaters-kerala",
    title: "Serenity on the Backwaters of Kerala",
    excerpt: "A tranquil houseboat journey through the emerald waters of God's Own Country.",
    thumbnail: "https://images.unsplash.com/photo-1492693429561-1c283eb1b2e2?auto=format&fit=crop&q=80",
    author: {
      name: "Rahul Menon",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    postedAt: "1 week ago",
    likes: 578,
    comments: 45,
    categories: ["Natural", "Relaxation"]
  },
  {
    id: "rajasthan-forts",
    title: "The Majestic Forts of Rajasthan",
    excerpt: "Exploring the royal heritage and architectural splendor of Rajasthan's mighty fortresses.",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
    author: {
      name: "Arjun Singh",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    postedAt: "2 weeks ago",
    likes: 415,
    comments: 32,
    categories: ["Historical", "Architecture"]
  },
  {
    id: "mysore-dasara",
    title: "Celebrating Mysore Dasara: A Royal Affair",
    excerpt: "Witnessing the grandeur of Karnataka's most famous festival with its illuminated palace and processions.",
    thumbnail: "https://images.unsplash.com/photo-1602313987641-21840659c71d?auto=format&fit=crop&q=80",
    author: {
      name: "Lakshmi Devi",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    postedAt: "1 month ago",
    likes: 629,
    comments: 53,
    categories: ["Festival", "Cultural"]
  },
  {
    id: "ladakh-monasteries",
    title: "Ancient Monasteries of Ladakh",
    excerpt: "A spiritual journey through the high-altitude Buddhist monasteries nestled in the Himalayas.",
    thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    author: {
      name: "Tenzin Dorje",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    postedAt: "2 months ago",
    likes: 382,
    comments: 29,
    categories: ["Spiritual", "Mountain"]
  },
  {
    id: "orissa-crafts",
    title: "The Living Crafts Traditions of Odisha",
    excerpt: "Discovering the skillful artisans and their timeless craft traditions in eastern India.",
    thumbnail: "https://images.unsplash.com/photo-1561355790-ce7fd2ff3419?auto=format&fit=crop&q=80",
    author: {
      name: "Ananya Pattnaik",
      avatar: "https://randomuser.me/api/portraits/women/89.jpg"
    },
    postedAt: "3 months ago",
    likes: 287,
    comments: 24,
    categories: ["Crafts", "Cultural"]
  }
];
