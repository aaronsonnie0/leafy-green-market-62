
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: "plants" | "pots" | "accessories";
  image: string;
  gallery?: string[];
  tags?: string[];
  careDifficulty?: "easy" | "moderate" | "hard";
  lightRequirements?: "low" | "medium" | "high";
  wateringFrequency?: "rarely" | "occasionally" | "regularly";
  featured?: boolean;
  inStock: boolean;
  dimensions?: string;
  material?: string;
};

export const products: Product[] = [
  {
    id: "plant-1",
    name: "Monstera Deliciosa",
    description: "The Swiss cheese plant, known for its large, glossy, perforated leaves. Perfect for adding a tropical touch to any room.",
    price: 39.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["tropical", "popular", "air-purifying"],
    careDifficulty: "easy",
    lightRequirements: "medium",
    wateringFrequency: "occasionally",
    featured: true,
    inStock: true
  },
  {
    id: "plant-2",
    name: "Fiddle Leaf Fig",
    description: "A stunning indoor tree with large, violin-shaped leaves that brings elegance and sophistication to any space.",
    price: 49.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["popular", "statement", "tropical"],
    careDifficulty: "moderate",
    lightRequirements: "high",
    wateringFrequency: "occasionally",
    featured: true,
    inStock: true
  },
  {
    id: "plant-3",
    name: "Snake Plant",
    description: "An easy-care, air-purifying plant with striking upright leaves. Thrives in almost any light condition.",
    price: 29.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["easy-care", "air-purifying", "bedroom-friendly"],
    careDifficulty: "easy",
    lightRequirements: "low",
    wateringFrequency: "rarely",
    featured: false,
    inStock: true
  },
  {
    id: "plant-4",
    name: "Pothos",
    description: "A trailing vine with heart-shaped leaves, perfect for hanging baskets or as a shelf accent.",
    price: 24.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["trailing", "easy-care", "air-purifying"],
    careDifficulty: "easy",
    lightRequirements: "low",
    wateringFrequency: "occasionally",
    featured: false,
    inStock: true
  },
  {
    id: "plant-5",
    name: "Peace Lily",
    description: "Elegant white flowers and glossy green leaves make this air-purifying plant a classic choice.",
    price: 34.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["flowering", "air-purifying", "shade-tolerant"],
    careDifficulty: "easy",
    lightRequirements: "low",
    wateringFrequency: "regularly",
    featured: true,
    inStock: true
  },
  {
    id: "plant-6",
    name: "ZZ Plant",
    description: "With its glossy, dark green leaves, the ZZ Plant is virtually indestructible and perfect for beginners.",
    price: 32.99,
    category: "plants",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["drought-tolerant", "low-light", "easy-care"],
    careDifficulty: "easy",
    lightRequirements: "low",
    wateringFrequency: "rarely",
    featured: false,
    inStock: true
  },
  {
    id: "pot-1",
    name: "Terracotta Pot",
    description: "Classic terracotta pot with a drainage hole, perfect for most houseplants.",
    price: 19.99,
    category: "pots",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["terracotta", "classic", "breathable"],
    material: "Terracotta",
    dimensions: "6\" diameter × 5.5\" height",
    featured: true,
    inStock: true
  },
  {
    id: "pot-2",
    name: "Ceramic White Pot",
    description: "Minimalist white ceramic pot that complements any plant and décor style.",
    price: 24.99,
    category: "pots",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["ceramic", "minimalist", "modern"],
    material: "Ceramic",
    dimensions: "8\" diameter × 7\" height",
    featured: true,
    inStock: true
  },
  {
    id: "pot-3",
    name: "Concrete Planter",
    description: "Industrial-style concrete planter with clean lines and a contemporary feel.",
    price: 29.99,
    category: "pots",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["concrete", "modern", "industrial"],
    material: "Concrete",
    dimensions: "7\" diameter × 6\" height",
    featured: false,
    inStock: true
  },
  {
    id: "pot-4",
    name: "Hanging Ceramic Planter",
    description: "Beautiful hanging planter perfect for trailing plants like pothos or string of pearls.",
    price: 27.99,
    category: "pots",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["hanging", "ceramic", "modern"],
    material: "Ceramic",
    dimensions: "6\" diameter × 4\" height",
    featured: true,
    inStock: true
  },
  {
    id: "accessory-1",
    name: "Plant Mister",
    description: "Elegant brass mister for tropical plants that love humidity.",
    price: 18.99,
    category: "accessories",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["misting", "brass", "gift-idea"],
    material: "Brass",
    dimensions: "10\" height",
    featured: true,
    inStock: true
  },
  {
    id: "accessory-2",
    name: "Watering Can",
    description: "Stylish metal watering can with a narrow spout for precise watering.",
    price: 22.99,
    category: "accessories",
    image: "/lovable-uploads/795a31b9-ff5c-4f98-9544-c4d2548b19ec.png",
    tags: ["watering", "metal", "essential"],
    material: "Powder-coated steel",
    dimensions: "12\" × 5\" × 8\"",
    featured: false,
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
