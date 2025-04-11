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
    thumbnail: "https://cisindus.org/wp-content/uploads/2021/10/Hoysaleshwar-Temple_1-1-scaled.jpeg",
    author: {
      name: "Karthik Gowda",
      avatar: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7217.jpg"
    },
    postedAt: "3 days ago",
    likes: 342,
    comments: 28,
    categories: ["Historical", "Architecture"],
    content: "My journey to Belur and Halebidu was like stepping into a stone poetry book. The Chennakeshava Temple at Belur left me speechless with its intricate carvings depicting scenes from the Puranas and Mahabharata. Each bracket figure of celestial maidens (Madanikas) tells a unique story through frozen dance poses. At Halebidu, the Hoysaleswara Temple's star-shaped platform and the detailed depiction of Shiva's life on its walls showcase the pinnacle of Hoysala craftsmanship. The local guide explained how each carving took years to complete, with no two designs being identical among the thousands present. The resilience of these 12th-century masterpieces against invasions and time makes them even more impressive.",
    media: [
      {
        type: "image",
        url: "https://www.india-a2z.com/images/halebidu1.jpg",
        caption: "The magnificent star-shaped platform of Hoysaleswara Temple"
      },
      {
        type: "image",
        url: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticle_images%2F2016%2F01%2F18%2F523779.jpg",
        caption: "Intricate stone carvings depicting celestial dancers"
      },
      {
        type: "image",
        url: "https://i0.wp.com/yatrikaone.com/wp-content/uploads/travel/destination/India/Karnataka/Belur/ChennaKeshava/Entrance/East/E_17_1_987_1_east_entrance_1_rs_wm.jpg",
        caption: "The majestic entrance of Chennakeshava Temple"
      }
    ]
  },
  {
    id: "hampi-vijayanagara",
    title: "Lost City of Hampi: Vijayanagara's Legacy",
    excerpt: "Wandering through the boulder-strewn landscape and magnificent temples of Karnataka's UNESCO World Heritage Site.",
    thumbnail: "https://www.worldatlas.com/r/w960-q80/upload/ff/49/57/shutterstock-1509720656.jpg",
    author: {
      name: "Lakshmi Devi",
      avatar: "https://img.freepik.com/premium-photo/25yearold-indian-woman-s-elegance-golden-saree_878783-16771.jpg"
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
    thumbnail: "https://specialplacesofindia.com/wp-content/uploads/2024/01/Homage-to-Coffee-%E2%80%93-Unique-Coffee-Infused-Experiences.jpg",
    author: {
      name: "Arjun Kodava",
      avatar: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7218.jpg"
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
    thumbnail: "https://i0.wp.com/mysuruinfrahub.com/wp-content/uploads/2023/09/MysuruDasara3.jpg",
    author: {
      name: "Deepa Iyengar",
      avatar: "https://cdn.openart.ai/published/4pSEhEglIwsiwhfTQmbU/qQG-12Dh_9OfU_raw.jpg"
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
    thumbnail: "https://static.india.com/wp-content/uploads/2022/07/Paradise-Beach-Gokarna.jpg",
    author: {
      name: "Praveen Kumar",
      avatar: "https://img.freepik.com/premium-photo/young-smart-indian-businessman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142269.jpg"
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
    thumbnail: "https://thewandertherapy.com/wp-content/uploads/2024/06/9.udupi-cuisine.jpg",
    author: {
      name: "Sumana Hegde",
      avatar: "https://t4.ftcdn.net/jpg/07/98/72/89/360_F_798728945_c7RghNy7K8nSSVYsisEJ7EladuShxT98.jpg"
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
    thumbnail: "https://turuhi.com/storage/story/1-Badami-Caves.jpg",
    author: {
      name: "Vinay Patil",
      avatar: "https://srmap.edu.in/wp-content/uploads/2021/02/manzoor-hassan-1.jpg"
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
    thumbnail: "https://img.veenaworld.com/wp-content/uploads/2024/02/A-Guide-to-Jog-Falls-Karnataka.jpg",
    author: {
      name: "Vani Gowda",
      avatar: "https://i.pinimg.com/736x/91/3f/00/913f00423f75a57b2794d3d039c54e13.jpg"
    },
    postedAt: "5 months ago",
    likes: 405,
    comments: 38,
    categories: ["Natural", "Adventure"]
  }
];