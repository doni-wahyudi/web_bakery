export const products = [
  // Cakes
  {
    id: 1,
    name: "Classic Birthday Cake",
    category: "cakes",
    description: "A beautifully decorated birthday cake with buttercream frosting, available in chocolate, vanilla, or red velvet.",
    price: "Starting from Rp 250.000",
    image: "/images/birthday-cake.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Elegant Wedding Cake",
    category: "cakes",
    description: "Multi-tiered wedding cake with fondant, custom floral decorations, and elegant design tailored to your special day.",
    price: "Starting from Rp 1.500.000",
    image: "/images/wedding-cake.png",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Custom Design Cake",
    category: "cakes",
    description: "Fully customized cake for any occasion. Choose your flavor, design, and decorations. Perfect for themed parties.",
    price: "Starting from Rp 350.000",
    image: "/images/birthday-cake.png",
    badge: "Custom",
  },

  // Pastries
  {
    id: 4,
    name: "Butter Croissant",
    category: "pastries",
    description: "Flaky, golden, and buttery croissant baked to perfection every morning. A French classic with authentic taste.",
    price: "Rp 25.000",
    image: "/images/croissants.png",
    badge: "Fresh Daily",
  },
  {
    id: 5,
    name: "French Pastry Box",
    category: "pastries",
    description: "Assorted box of éclairs, fruit tarts, cream puffs, and mille-feuille. Perfect as a gift or for afternoon tea.",
    price: "Rp 180.000",
    image: "/images/pastries.png",
    badge: "Popular",
  },
  {
    id: 6,
    name: "Chocolate Éclair",
    category: "pastries",
    description: "Light choux pastry filled with rich vanilla cream and topped with a glossy chocolate ganache.",
    price: "Rp 30.000",
    image: "/images/pastries.png",
    badge: "",
  },

  // Bread
  {
    id: 7,
    name: "Artisan Sourdough",
    category: "bread",
    description: "Naturally leavened sourdough with a crispy crust and chewy interior. Made with our 3-year-old starter.",
    price: "Rp 65.000",
    image: "/images/artisan-bread.png",
    badge: "Artisan",
  },
  {
    id: 8,
    name: "Whole Wheat Loaf",
    category: "bread",
    description: "Healthy whole wheat bread made with premium flour, perfect for daily sandwiches and toast.",
    price: "Rp 45.000",
    image: "/images/artisan-bread.png",
    badge: "",
  },

  // Cookies
  {
    id: 9,
    name: "Assorted Cookie Box",
    category: "cookies",
    description: "A box of 12 handcrafted cookies including chocolate chip, double chocolate, oatmeal raisin, and snickerdoodle.",
    price: "Rp 120.000",
    image: "/images/cookies.png",
    badge: "Gift Set",
  },
  {
    id: 10,
    name: "Chocolate Chip Cookies",
    category: "cookies",
    description: "Classic chunky chocolate chip cookies with crispy edges and a soft, chewy center. 6 pieces per pack.",
    price: "Rp 55.000",
    image: "/images/cookies.png",
    badge: "Best Seller",
  },

  // Cupcakes
  {
    id: 11,
    name: "Gourmet Cupcakes",
    category: "cupcakes",
    description: "Beautiful cupcakes with swirled buttercream in pastel colors. Available in vanilla, chocolate, and strawberry.",
    price: "Rp 35.000 / pc",
    image: "/images/cupcakes.png",
    badge: "Popular",
  },
  {
    id: 12,
    name: "Cupcake Box (12 pcs)",
    category: "cupcakes",
    description: "Assorted box of 12 gourmet cupcakes, perfect for parties, office celebrations, or as a sweet gift.",
    price: "Rp 350.000",
    image: "/images/cupcakes.png",
    badge: "Party Pack",
  },
];

export const categories = [
  { id: "all", label: "All Products", icon: "🍰" },
  { id: "cakes", label: "Cakes", icon: "🎂" },
  { id: "pastries", label: "Pastries", icon: "🥐" },
  { id: "bread", label: "Bread", icon: "🍞" },
  { id: "cookies", label: "Cookies", icon: "🍪" },
  { id: "cupcakes", label: "Cupcakes", icon: "🧁" },
];

export const featuredProducts = products.filter(p =>
  [1, 2, 4, 5, 11, 9].includes(p.id)
);
