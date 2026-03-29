const menuData = [
  // ===== MAIN COURSE =====
  {
    id: 1,
    name: "Bloom Burger",
    category: "Main Course",
    image: "/images/bloom-burger.jpg",
    description: "Juicy grilled burger with cheddar, lettuce, and signature sauce.",
    price: 8.99,
    rating: 4.9,
    badge: "Best Seller",
    tag: "Savory"
  },
  {
    id: 2,
    name: "Garden Pasta",
    category: "Main Course",
    image: "/images/garden-pasta.jpg",
    description: "Creamy herb pasta with fresh vegetables and parmesan.",
    price: 9.50,
    rating: 4.6,
    badge: "Vegan",
    tag: "Healthy"
  },
  {
    id: 3,
    name: "Emerald Forest Risotto",
    category: "Main Course",
    image: "/images/emerald-forest-risotto.jpg",
    description: "A creamy arborio rice infused with wild garlic, topped with crispy kale, toasted pine nuts, and edible micro-flowers.",
    price: 12.50,
    rating: 4.8,
    badge: "Chef’s Choice",
    tag: "Savory"
  },
  {
    id: 4,
    name: "Golden Garlic Steak",
    category: "Main Course",
    image: "/images/golden-garlic-steak.jpg",
    description: "A juicy, pan-seared steak topped with a crown of crispy roasted garlic cloves and a shimmering herb butter.",
    price: 15.99,
    rating: 4.9,
    badge: "Best Seller",
    tag: "Savory"
  },
  {
    id: 5,
    name: "Ocean Pearl Salmon",
    category: "Main Course",
    image: "/images/ocean-pearl-salmon.jpg",
    description: "A perfectly grilled salmon fillet served over a 'pearl' couscous salad with bright lemon zest and fresh dill.",
    price: 14.50,
    rating: 4.8,
    badge: "Healthy Choice",
    tag: "Seafood"
  },
  {
    id: 6,
    name: "Harvest Chicken Roast",
    category: "Main Course",
    image: "/images/harvest-chicken-roast.jpg",
    description: "Tender roasted chicken breast served with honey-glazed baby carrots and a rich, velvety pumpkin puree.",
    price: 13.75,
    rating: 4.7,
    badge: "Popular",
    tag: "Comfort"
  },

  // ===== SALADS =====
  {
    id: 7,
    name: "Crab Salad",
    category: "Salads",
    image: "/images/crab-salad.jpg",
    description: "Fresh crab meat tossed with crisp greens, cherry tomatoes, and citrus vinaigrette.",
    price: 10.50,
    rating: 4.8,
    badge: "Chef’s Choice",
    tag: "Seafood"
  },
  {
    id: 8,
    name: "Salmon Salad",
    category: "Salads",
    image: "/images/salmon-salad.jpg",
    description: "Grilled salmon served on a bed of mixed greens with avocado, cucumbers, and lemon dressing.",
    price: 11.25,
    rating: 4.9,
    badge: "Healthy Choice",
    tag: "Seafood"
  },
  {
    id: 9,
    name: "Chicken Avocado Salad",
    category: "Salads",
    image: "/images/chicken-avocado-salad.jpg",
    description: "Tender grilled chicken with creamy avocado, cherry tomatoes, and balsamic drizzle.",
    price: 9.99,
    rating: 4.7,
    badge: "Popular",
    tag: "Protein"
  },
  {
    id: 10,
    name: "Chicken Caesar Salad",
    category: "Salads",
    image: "/images/chicken-caesar-salad.jpg",
    description: "Classic Caesar salad topped with grilled chicken, parmesan, and crunchy croutons.",
    price: 9.50,
    rating: 4.6,
    badge: "Classic",
    tag: "Protein"
  },

  // ===== DRINKS =====
  {
    id: 11,
    name: "Iced Latte Bloom",
    category: "Drinks",
    image: "/images/iced-latte.jpg",
    description: "A creamy iced latte with soft vanilla notes and rich espresso.",
    price: 4.99,
    rating: 4.8,
    badge: "Popular",
    tag: "Cold"
  },
  {
    id: 12,
    name: "Rose Lemonade",
    category: "Drinks",
    image: "/images/rose-lemonade.jpg",
    description: "Refreshing sparkling lemonade infused with rose petals.",
    price: 3.75,
    rating: 4.7,
    badge: "New",
    tag: "Fresh"
  },
  {
    id: 13,
    name: "Vanilla Dream",
    category: "Drinks",
    image: "/images/vanilla-dream.jpg",
    description: "A silky-smooth vanilla bean cream served in a chilled glass. Topped with a crunchy sugar nest and a delicate white chocolate flower.",
    price: 4.95,
    rating: 4.7,
    badge: "Chef’s Choice",
    tag: "Creamy"
  },
  {
    id: 14,
    name: "Sunrise Citrine Spritz",
    category: "Drinks",
    image: "/images/sunrise-citrine-spritz.jpg",
    description: "A layered mocktail of blood orange juice, sparkling elderflower, and a dash of turmeric for a glowing golden hue.",
    price: 5.25,
    rating: 4.7,
    badge: "New",
    tag: "Refreshing"
  },

  // ===== DESSERTS =====
  {
    id: 15,
    name: "Berry Cheesecake",
    category: "Desserts",
    image: "/images/berry-cheesecake.jpg",
    description: "Silky cheesecake topped with fresh berries and berry glaze.",
    price: 5.75,
    rating: 4.9,
    badge: "Sweet Pick",
    tag: "Dessert"
  },
  {
    id: 16,
    name: "Midnight Galaxy Sphere",
    category: "Desserts",
    image: "/images/midnight-galaxy-sphere.jpg",
    description: "A dark chocolate shell with a hand-painted nebula finish, filled with a rich blackberry mousse and a popping-candy center.",
    price: 5.75,
    rating: 4.9,
    badge: "Sweet Pick",
    tag: "Dessert"
  },
  {
  id: 18,
  name: "Lavender Honey Panna Cotta",
  category: "Desserts",
  image: "/images/lavender-honey-panna-cotta.jpg",
  description: "Creamy panna cotta infused with delicate lavender and topped with a golden honey drizzle and edible flowers.",
  price: 6.25,
  rating: 4.8,
  badge: "New",
  tag: "Elegant"
},
  {
    id: 17,
    name: "Velvet Truffle Nest",
    category: "Desserts",
    image: "/images/velvet-truffle-nest.jpg",
    description: "Decadent dark chocolate ganache 'eggs' resting in a spun-sugar nest with sea salt caramel drizzle.",
    price: 6.00,
    rating: 4.9,
    badge: "Sweet Pick",
    tag: "Chocolate"
  }
];

export default menuData;