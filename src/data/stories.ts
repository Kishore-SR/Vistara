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
    id: "belur-halebidu",
    title: "The Hoysala Marvels: Belur and Halebidu",
    excerpt: "Exploring the intricate stone carvings and architectural splendor of Karnataka's Hoysala temples.",
    thumbnail: "https://images.unsplash.com/photo-1590766229856-211ada32c540?auto=format&fit=crop&q=80",
    author: {
      name: "Karthik Gowda",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    postedAt: "3 days ago",
    likes: 342,
    comments: 28,
    categories: ["Historical", "Architecture"],
    content: "My journey to Belur and Halebidu was like stepping into a stone poetry book. The Chennakeshava Temple at Belur left me speechless with its intricate carvings depicting scenes from the Puranas and Mahabharata. Each bracket figure of celestial maidens (Madanikas) tells a unique story through frozen dance poses. At Halebidu, the Hoysaleswara Temple's star-shaped platform and the detailed depiction of Shiva's life on its walls showcase the pinnacle of Hoysala craftsmanship. The local guide explained how each carving took years to complete, with no two designs being identical among the thousands present. The resilience of these 12th-century masterpieces against invasions and time makes them even more impressive.",
    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1590766229856-211ada32c540?auto=format&fit=crop&q=80",
        caption: "The magnificent star-shaped platform of Hoysaleswara Temple"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1627719172038-611c725962d8?auto=format&fit=crop&q=80",
        caption: "Intricate stone carvings depicting celestial dancers"
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1626196874981-83d1d99a32a3?auto=format&fit=crop&q=80",
        caption: "The majestic entrance of Chennakeshava Temple"
      }
    ]
  },
  {
    id: "hampi-vijayanagara",
    title: "Lost City of Hampi: Vijayanagara's Legacy",
    excerpt: "Wandering through the boulder-strewn landscape and magnificent temples of Karnataka's UNESCO World Heritage Site.",
    thumbnail: "https://images.unsplash.com/photo-1590128584129-06cb32eed4bd?auto=format&fit=crop&q=80",
    author: {
      name: "Lakshmi Devi",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    postedAt: "1 week ago",
    likes: 578,
    comments: 45,
    categories: ["Historical", "Adventure"]
  },
  {
    id: "coorg-coffee",
    title: "Misty Mornings in Coorg's Coffee Plantations",
    excerpt: "Experiencing the aroma and culture of Karnataka's coffee country nestled in the Western Ghats.",
    thumbnail: "https://images.unsplash.com/photo-1556633640-60aa9e50dad4?auto=format&fit=crop&q=80",
    author: {
      name: "Arjun Kodava",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    postedAt: "2 weeks ago",
    likes: 415,
    comments: 32,
    categories: ["Natural", "Cultural"]
  },
  {
    id: "mysore-dasara",
    title: "Celebrating Mysore Dasara: A Royal Affair",
    excerpt: "Witnessing the grandeur of Karnataka's most famous festival with its illuminated palace and majestic processions.",
    thumbnail: "https://images.unsplash.com/photo-1602313987641-21840659c71d?auto=format&fit=crop&q=80",
    author: {
      name: "Deepa Iyengar",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    },
    postedAt: "1 month ago",
    likes: 629,
    comments: 53,
    categories: ["Festival", "Cultural"]
  },
  {
    id: "gokarna-beaches",
    title: "Hidden Beaches of Gokarna",
    excerpt: "Discovering Karnataka's coastal paradise with its pristine beaches, tranquil waters, and spiritual vibes.",
    thumbnail: "https://images.unsplash.com/photo-1599030284356-04d1ca39833c?auto=format&fit=crop&q=80",
    author: {
      name: "Praveen Kumar",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    postedAt: "2 months ago",
    likes: 382,
    comments: 29,
    categories: ["Adventure", "Spiritual"]
  },
  {
    id: "udupi-cuisine",
    title: "Culinary Journey Through Udupi's Traditional Kitchens",
    excerpt: "Exploring the authentic vegetarian delicacies and age-old cooking techniques of coastal Karnataka.",
    thumbnail: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?auto=format&fit=crop&q=80",
    author: {
      name: "Sumana Hegde",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg"
    },
    postedAt: "3 months ago",
    likes: 287,
    comments: 24,
    categories: ["Cuisine", "Cultural"]
  },
  {
    id: "badami-caves",
    title: "The Ancient Rock-Cut Caves of Badami",
    excerpt: "Exploring the magnificent sandstone cave temples carved by the early Chalukyan artisans in North Karnataka.",
    thumbnail: "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&q=80",
    author: {
      name: "Vinay Patil",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    postedAt: "4 months ago",
    likes: 342,
    comments: 31,
    categories: ["Historical", "Architecture"]
  },
  {
    id: "jog-falls",
    title: "Monsoon Magic at Jog Falls",
    excerpt: "Witnessing the raw power and majesty of Karnataka's highest waterfall during peak monsoon season.",
    thumbnail: "https://images.unsplash.com/photo-1628933183605-b198050997c4?auto=format&fit=crop&q=80",
    author: {
      name: "Meera Shenoy",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    postedAt: "5 months ago",
    likes: 405,
    comments: 38,
    categories: ["Natural", "Adventure"]
  }
];