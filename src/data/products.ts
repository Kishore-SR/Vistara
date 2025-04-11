
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  artisan: {
    name: string;
    location: string;
    bio?: string;
    image?: string;
  };
  category: string;
  likes: number;
  details?: string;
  materials?: string[];
  dimensions?: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: "chanderi-saree",
    name: "Handwoven Chanderi Silk Saree",
    image: "https://images.unsplash.com/photo-1608916874844-9c5e9717f0c1?auto=format&fit=crop&q=80",
    description: "Elegant handwoven silk saree with traditional Chanderi craftsmanship featuring gold zari work.",
    price: 6800,
    artisan: {
      name: "Rashmi Sharma",
      location: "Chanderi, Madhya Pradesh",
      bio: "Rashmi has been weaving Chanderi sarees for over 30 years, learning the craft from her mother. She specializes in traditional motifs and is known for her fine zari work.",
      image: "https://randomuser.me/api/portraits/women/62.jpg"
    },
    category: "Textiles",
    likes: 243,
    details: "This exquisite Chanderi silk saree is handwoven using traditional techniques that have been passed down through generations. The saree features intricate zari work in gold, with motifs inspired by Madhya Pradesh's architectural heritage. Chanderi sarees are known for their sheer texture, lightweight feel, and subtle sheen, making them perfect for both special occasions and elegant everyday wear.",
    materials: ["Silk", "Cotton", "Gold Zari"],
    dimensions: "5.5 meters length x 1.1 meters width",
    gallery: [
      "https://images.unsplash.com/photo-1608916874844-9c5e9717f0c1?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597983073453-ef06cfc2240e?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1683220367836-07e4e6046a91?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "bidri-vase",
    name: "Bidriware Decorative Vase",
    image: "https://images.unsplash.com/photo-1493762324809-94ca2c05c8d4?auto=format&fit=crop&q=80",
    description: "Handcrafted metal vase with intricate silver inlay work using the ancient Bidri technique.",
    price: 4500,
    artisan: {
      name: "Ibraheem Khan",
      location: "Bidar, Karnataka",
      image: "https://randomuser.me/api/portraits/men/79.jpg"
    },
    category: "Metalwork",
    likes: 187
  },
  {
    id: "blue-pottery",
    name: "Jaipur Blue Pottery Tea Set",
    image: "https://images.unsplash.com/photo-1588866343291-bad04c17a4a4?auto=format&fit=crop&q=80",
    description: "Vibrant hand-painted ceramic tea set with traditional Jaipur blue pottery designs.",
    price: 3200,
    artisan: {
      name: "Deepak Prajapati",
      location: "Jaipur, Rajasthan",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    category: "Pottery",
    likes: 312
  },
  {
    id: "madhubani-painting",
    name: "Traditional Madhubani Painting",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80",
    description: "Authentic Madhubani painting depicting rural life and mythological scenes on handmade paper.",
    price: 2800,
    artisan: {
      name: "Savita Devi",
      location: "Madhubani, Bihar",
      image: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    category: "Painting",
    likes: 267
  },
  {
    id: "pashmina-shawl",
    name: "Hand-embroidered Pashmina Shawl",
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80",
    description: "Luxurious pashmina shawl with delicate hand embroidery from Kashmir Valley.",
    price: 8500,
    artisan: {
      name: "Abdul Majid",
      location: "Srinagar, Kashmir",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    category: "Textiles",
    likes: 429
  },
  {
    id: "dokra-figurine",
    name: "Dokra Bronze Tribal Figurine",
    image: "https://images.unsplash.com/photo-1629622814670-548eb7da0a3e?auto=format&fit=crop&q=80",
    description: "Traditional lost-wax bronze casting figurine representing tribal folk art.",
    price: 3800,
    artisan: {
      name: "Binod Mahato",
      location: "Bastar, Chhattisgarh",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    category: "Sculpture",
    likes: 195
  },
  {
    id: "sandalwood-carving",
    name: "Mysore Sandalwood Carved Elephant",
    image: "https://images.unsplash.com/photo-1569587112025-0d36589d6533?auto=format&fit=crop&q=80",
    description: "Intricately carved sandalwood elephant sculpture with traditional designs.",
    price: 12500,
    artisan: {
      name: "Venkatesh Iyer",
      location: "Mysore, Karnataka",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    category: "Woodwork",
    likes: 354
  },
  {
    id: "phulkari-dupatta",
    name: "Phulkari Embroidered Dupatta",
    image: "https://images.unsplash.com/photo-1589294961991-b72edda4aeb0?auto=format&fit=crop&q=80",
    description: "Vibrant hand-embroidered cotton dupatta with traditional Punjabi phulkari work.",
    price: 2200,
    artisan: {
      name: "Harpreet Kaur",
      location: "Patiala, Punjab",
      image: "https://randomuser.me/api/portraits/women/29.jpg"
    },
    category: "Textiles",
    likes: 276
  }
];
