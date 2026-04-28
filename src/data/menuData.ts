// Menu data extracted from the documents
export interface MenuItem {
  name: string;
  description?: string;
  price: number;
  category: string;
  tags?: string[];
  origin?: string;
}

export interface MenuCategory {
  name: string;
  emoji?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title: string;
  description?: string;
  categories: MenuCategory[];
}

// Breakfast Menu
export const breakfastMenu: MenuSection = {
  title: "Breakfast Menu",
  description: "Start your day right with our fresh, energizing breakfast options",
  categories: [
    {
      name: "Classic Breakfasts",
      emoji: "🍳",
      items: [
        { name: "Farmhouse Breakfast", description: "Two farm-fresh eggs cooked your way, applewood-smoked bacon or breakfast sausage, golden hash browns, and toasted sourdough with butter", price: 1850, category: "classic" },
        { name: "Buttermilk Pancake Stack", description: "Three fluffy pancakes served with whipped butter and warm maple syrup. Add blueberries or chocolate chips for KSh 300", price: 1250, category: "classic" },
        { name: "Traditional French Toast", description: "Thick-cut brioche dipped in vanilla-cinnamon batter, griddled to perfection, finished with powdered sugar and fresh berries", price: 1450, category: "classic" },
      ]
    },
    {
      name: "Lighter & Healthy Options",
      emoji: "🥑",
      items: [
        { name: "Avocado Toast", description: "Smashed avocado, cherry tomatoes, radish, microgreens, and chili flakes on toasted multigrain bread. Add a poached egg for KSh 375", price: 1200, category: "healthy" },
        { name: "Greek Yogurt Parfait", description: "Creamy Greek yogurt layered with house-made granola, seasonal fruit, and local honey", price: 1425, category: "healthy" },
        { name: "Steel-Cut Oatmeal", description: "Slow-cooked oats topped with brown sugar, dried cranberries, and toasted almonds", price: 1350, category: "healthy" },
      ]
    },
    {
      name: "Signature Plates",
      emoji: "⭐",
      items: [
        { name: "Eggs Benedict", description: "Two poached eggs on toasted English muffins with Canadian bacon and house-made hollandaise, served with breakfast potatoes", price: 2400, category: "signature" },
        { name: "Breakfast Burrito", description: "Scrambled eggs, chorizo sausage, roasted potatoes, cheddar cheese, and pico de gallo wrapped in a warm flour tortilla. Served with salsa verde", price: 2175, category: "signature" },
        { name: "Smoked Salmon Scramble", description: "Soft-scrambled eggs with smoked salmon, cream cheese, chives, and red onion, served with toasted bagel slices", price: 2550, category: "signature" },
      ]
    },
    {
      name: "Traditional Favorites",
      emoji: "🇰🇪",
      items: [
        { name: "Full Kenyan Breakfast", description: "Two eggs cooked to your liking, beef or pork sausages, crispy bacon, sautéed tomatoes, baked beans, and toasted bread served with butter", price: 1200, category: "traditional" },
        { name: "Uji wa Wimbi (Millet Porridge)", description: "Warm, nourishing traditional porridge, lightly sweetened and served plain or with milk", price: 300, category: "traditional" },
        { name: "Sweet Potatoes & Nduma", description: "Boiled sweet potatoes and arrowroots served with tea or coffee", price: 350, category: "traditional" },
        { name: "Eggs & Chapati", description: "Two eggs (fried or scrambled) served with freshly made chapati", price: 250, category: "traditional" },
        { name: "Sausage & Chapati", description: "Grilled beef sausage served with warm chapati and kachumbari", price: 300, category: "traditional" },
        { name: "Masala Beans & Toast", description: "Slow-cooked beans in mild masala spices, served with buttered toast", price: 400, category: "traditional" },
      ]
    },
    {
      name: "Bakery & Sides",
      emoji: "🍞",
      items: [
        { name: "Freshly Baked Croissant (2 pcs)", description: "Buttery, flaky, and baked daily", price: 550, category: "sides" },
        { name: "Bacon or Sausage (2 pcs)", price: 450, category: "sides" },
        { name: "Seasonal Fresh Fruit", price: 350, category: "sides" },
        { name: "Toast (White, Wheat, or Sourdough)", price: 250, category: "sides" },
        { name: "Chapati (2 pcs)", description: "Soft, pan-fried flatbread made fresh daily", price: 100, category: "sides" },
        { name: "Mandazi (3 pcs)", description: "Lightly sweetened coconut doughnuts, fluffy on the inside and golden outside", price: 150, category: "sides" },
      ]
    },
    {
      name: "Hot Beverages",
      emoji: "☕",
      items: [
        { name: "Kenyan Tea (Chai)", description: "Traditional black tea brewed with milk and spices", price: 200, category: "beverage" },
        { name: "African Coffee", description: "Freshly brewed Kenyan coffee", price: 250, category: "beverage" },
        { name: "Hot Chocolate", price: 250, category: "beverage" },
        { name: "Espresso / Cappuccino / Latte (Medium)", price: 450, category: "beverage" },
        { name: "Espresso / Cappuccino / Latte (Large)", price: 600, category: "beverage" },
      ]
    },
    {
      name: "Cold Beverages",
      emoji: "🥤",
      items: [
        { name: "Fresh Juice (Mango, Passion, Orange)", price: 300, category: "beverage" },
        { name: "Mala (Fermented Milk)", price: 250, category: "beverage" },
      ]
    }
  ]
};

// Lunch Menu
export const lunchMenu: MenuSection = {
  title: "Lunch Menu",
  description: "Build Your Plate Choose 1 Base + 1 Protein + 1–2 Sides + Sauce",
  categories: [
    {
      name: "Bases",
      emoji: "🍚",
      items: [
        { name: "Steamed Basmati Rice", origin: "Indian", price: 200, category: "base" },
        { name: "Jollof Rice", origin: "West African", price: 350, category: "base" },
        { name: "Pilau Rice", origin: "Swahili", price: 350, category: "base" },
        { name: "Fried Rice", origin: "Asian", price: 300, category: "base" },
        { name: "Plain Pasta", origin: "Italian", price: 250, category: "base" },
        { name: "Mashed Potatoes", origin: "Continental", price: 250, category: "base" },
        { name: "Ugali", origin: "East African", price: 150, category: "base" },
        { name: "Soft Tacos (2 pcs)", origin: "Mexican", price: 300, category: "base" },
      ]
    },
    {
      name: "Proteins",
      emoji: "🍗",
      items: [
        { name: "Grilled Chicken Breast", origin: "Mediterranean", price: 500, category: "protein" },
        { name: "Chicken Tikka", origin: "Indian", price: 650, category: "protein" },
        { name: "Beef Stir-Fry", origin: "Asian", price: 600, category: "protein" },
        { name: "Slow-Cooked Beef Stew", origin: "African", price: 600, category: "protein" },
        { name: "Grilled Lamb Kofta", origin: "Middle Eastern", price: 850, category: "protein" },
        { name: "Pan-Seared Fish Fillet", origin: "Continental", price: 700, category: "protein" },
        { name: "Peri-Peri Chicken", origin: "Portuguese", price: 650, category: "protein" },
        { name: "Falafel (4 pcs)", origin: "Middle Eastern", tags: ["Vegan"], price: 550, category: "protein" },
      ]
    },
    {
      name: "Vegetables & Sides",
      emoji: "🥦",
      items: [
        { name: "Steamed Seasonal Vegetables", price: 200, category: "side" },
        { name: "Sautéed Spinach", origin: "African Style", price: 250, category: "side" },
        { name: "Coleslaw", origin: "American", price: 150, category: "side" },
        { name: "Kachumbari", origin: "East African", price: 150, category: "side" },
        { name: "Roasted Potatoes", origin: "European", price: 250, category: "side" },
        { name: "Grilled Vegetables", origin: "Mediterranean", price: 300, category: "side" },
        { name: "Refried Beans", origin: "Mexican", price: 350, category: "side" },
      ]
    },
    {
      name: "Salads",
      emoji: "🥗",
      items: [
        { name: "Caesar Salad", price: 550, category: "salad" },
        { name: "Greek Salad", price: 500, category: "salad" },
        { name: "Asian Slaw", price: 450, category: "salad" },
        { name: "Quinoa & Avocado Salad", price: 500, category: "salad" },
      ]
    },
    {
      name: "Sauces & Toppings",
      emoji: "🌶",
      items: [
        { name: "Creamy Mushroom Sauce", price: 150, category: "sauce" },
        { name: "Peri-Peri Sauce", price: 150, category: "sauce" },
        { name: "Teriyaki Glaze", price: 150, category: "sauce" },
        { name: "Tomato Salsa", price: 100, category: "sauce" },
        { name: "Garlic Yogurt Sauce", price: 150, category: "sauce" },
        { name: "Chimichurri", price: 150, category: "sauce" },
      ]
    },
    {
      name: "Extras",
      emoji: "➕",
      items: [
        { name: "Chapati", price: 80, category: "extra" },
        { name: "Garlic Bread", price: 150, category: "extra" },
        { name: "Naan Bread", price: 200, category: "extra" },
        { name: "Fries", price: 250, category: "extra" },
      ]
    },
    {
      name: "Beverages",
      emoji: "🥤",
      items: [
        { name: "Fresh Juice", price: 250, category: "beverage" },
        { name: "Soft Drinks", price: 150, category: "beverage" },
        { name: "Iced Tea", price: 300, category: "beverage" },
        { name: "Bottled Water", price: 100, category: "beverage" },
      ]
    }
  ]
};

// Dinner Menu
export const dinnerMenu: MenuSection = {
  title: "Dinner Menu",
  description: "Create Your Perfect Plate Choose a Base + Protein + Sides + Sauce",
  categories: [
    {
      name: "Bases & Carbohydrates",
      emoji: "🍚",
      items: [
        { name: "Steamed Basmati Rice", origin: "Indian", price: 200, category: "base" },
        { name: "Jollof Rice", origin: "West African", price: 350, category: "base" },
        { name: "Pilau Rice", origin: "Swahili", price: 350, category: "base" },
        { name: "Truffle Mashed Potatoes", origin: "French", price: 450, category: "base" },
        { name: "Buttered Couscous", origin: "North African", price: 400, category: "base" },
        { name: "Plain Linguine Pasta", origin: "Italian", price: 450, category: "base" },
        { name: "Ugali", origin: "East African", price: 150, category: "base" },
        { name: "Roasted Baby Potatoes", origin: "European", price: 350, category: "base" },
      ]
    },
    {
      name: "Proteins",
      emoji: "🥩",
      items: [
        { name: "Grilled Beef Sirloin Steak", origin: "Continental", price: 1250, category: "protein" },
        { name: "Slow-Braised Beef Short Ribs", origin: "American", price: 1500, category: "protein" },
        { name: "Grilled Chicken Supreme", origin: "French", price: 850, category: "protein" },
        { name: "Chicken Tikka Masala", origin: "Indian", price: 1000, category: "protein" },
        { name: "Peri-Peri Chicken Thighs", origin: "Portuguese", price: 950, category: "protein" },
        { name: "Pan-Seared Salmon Fillet", origin: "Scandinavian", price: 1700, category: "protein" },
        { name: "Grilled King Prawns", origin: "Mediterranean", price: 1600, category: "protein" },
        { name: "Lamb Kofta Skewers", origin: "Middle Eastern", price: 1300, category: "protein" },
        { name: "Crispy Tofu Steak", origin: "Asian", tags: ["Vegan"], price: 900, category: "protein" },
      ]
    },
    {
      name: "Vegetables & Sides",
      emoji: "🥦",
      items: [
        { name: "Seasonal Steamed Vegetables", price: 200, category: "side" },
        { name: "Sautéed Spinach with Garlic", origin: "African", price: 250, category: "side" },
        { name: "Ratatouille", origin: "French", price: 450, category: "side" },
        { name: "Grilled Mediterranean Vegetables", price: 350, category: "side" },
        { name: "Creamed Spinach", origin: "American", price: 300, category: "side" },
        { name: "Kachumbari Salad", origin: "East African", price: 150, category: "side" },
        { name: "Asian Stir-Fried Greens", price: 350, category: "side" },
      ]
    },
    {
      name: "Salads",
      emoji: "🥗",
      items: [
        { name: "Caesar Salad", price: 550, category: "salad" },
        { name: "Greek Salad", price: 500, category: "salad" },
        { name: "Caprese Salad", origin: "Italian", price: 600, category: "salad" },
        { name: "Quinoa, Avocado & Citrus Salad", price: 500, category: "salad" },
      ]
    },
    {
      name: "Sauces & Finishing Touches",
      emoji: "🍷",
      items: [
        { name: "Peppercorn Sauce", price: 200, category: "sauce" },
        { name: "Mushroom & Thyme Sauce", price: 200, category: "sauce" },
        { name: "Chimichurri", origin: "South American", price: 180, category: "sauce" },
        { name: "Teriyaki Glaze", origin: "Japanese", price: 180, category: "sauce" },
        { name: "Peri-Peri Sauce", price: 150, category: "sauce" },
        { name: "Garlic Butter", price: 150, category: "sauce" },
      ]
    },
    {
      name: "Breads & Extras",
      emoji: "🍞",
      items: [
        { name: "Garlic Bread", price: 150, category: "extra" },
        { name: "Naan Bread", price: 200, category: "extra" },
        { name: "Dinner Rolls (2 pcs)", price: 200, category: "extra" },
        { name: "Fries", price: 250, category: "extra" },
      ]
    },
    {
      name: "Desserts",
      emoji: "🍰",
      items: [
        { name: "Chocolate Lava Cake", price: 550, category: "dessert" },
        { name: "Crème Brûlée", price: 700, category: "dessert" },
        { name: "Fresh Fruit Platter", price: 350, category: "dessert" },
        { name: "Cheesecake", price: 700, category: "dessert" },
      ]
    },
    {
      name: "Beverages",
      emoji: "🥤",
      items: [
        { name: "Fresh Juice", price: 250, category: "beverage" },
        { name: "Soft Drinks", price: 150, category: "beverage" },
        { name: "Mocktails", price: 450, category: "beverage" },
        { name: "Bottled Water", price: 100, category: "beverage" },
      ]
    }
  ]
};

// Fitness Meal Plans
export interface FitnessPlan {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bases: MenuItem[];
  proteins: MenuItem[];
  vegetables: MenuItem[];
  extras: MenuItem[];
  beverages: MenuItem[];
  readyPlates: MenuItem[];
  philosophy: string[];
}

export const fitnessPlans: FitnessPlan[] = [
  {
    id: "weight-loss",
    name: "Weight Loss",
    description: "Light, balanced meals to support healthy weight management",
    icon: "🌱",
    color: "from-green-500 to-emerald-600",
    bases: [
      { name: "Steamed Brown Rice", origin: "Asian", price: 250, category: "base" },
      { name: "Quinoa", origin: "South American", price: 350, category: "base" },
      { name: "Sweet Potato", origin: "African", price: 250, category: "base" },
      { name: "Cauliflower Rice", description: "Low-Carb Option", price: 300, category: "base" },
      { name: "Mixed Leaf Greens", description: "Salad Base", price: 250, category: "base" },
      { name: "Lentils", origin: "Indian", price: 250, category: "base" },
    ],
    proteins: [
      { name: "Grilled Chicken Breast", origin: "Mediterranean", price: 550, category: "protein" },
      { name: "Grilled Fish Fillet – Tilapia", origin: "African", price: 650, category: "protein" },
      { name: "Pan-Seared Salmon", origin: "Nordic", price: 1200, category: "protein" },
      { name: "Turkey Breast Strips", origin: "American", price: 750, category: "protein" },
      { name: "Boiled Eggs (2 pcs)", price: 150, category: "protein" },
      { name: "Chickpea & Vegetable Curry", origin: "Indian", tags: ["Plant-Based"], price: 500, category: "protein" },
      { name: "Grilled Tofu", origin: "Asian", tags: ["Vegan"], price: 650, category: "protein" },
    ],
    vegetables: [
      { name: "Steamed Broccoli & Carrots", price: 250, category: "vegetable" },
      { name: "Sautéed Spinach", origin: "African Style", price: 200, category: "vegetable" },
      { name: "Stir-Fried Mixed Vegetables", origin: "Asian", price: 250, category: "vegetable" },
      { name: "Grilled Zucchini & Bell Peppers", origin: "Mediterranean", price: 350, category: "vegetable" },
      { name: "Cabbage & Tomato Sauté", price: 200, category: "vegetable" },
      { name: "Kachumbari", origin: "East African Fresh Salad", price: 150, category: "vegetable" },
    ],
    extras: [
      { name: "Avocado Slices", price: 150, category: "extra" },
      { name: "Olive Oil Drizzle", price: 150, category: "extra" },
      { name: "Hummus", origin: "Middle Eastern", price: 200, category: "extra" },
      { name: "Nuts & Seeds Sprinkle", price: 200, category: "extra" },
    ],
    beverages: [
      { name: "Fresh Fruit Smoothie (No Added Sugar)", price: 450, category: "beverage" },
      { name: "Herbal Tea", price: 250, category: "beverage" },
      { name: "Lemon Water", price: 150, category: "beverage" },
      { name: "Bottled Water", price: 100, category: "beverage" },
    ],
    readyPlates: [
      { name: "Grilled Chicken & Greens Salad", price: 950, category: "ready" },
      { name: "Salmon & Avocado Salad", price: 1150, category: "ready" },
      { name: "Quinoa, Chickpea & Veggie Bowl", price: 900, category: "ready" },
      { name: "Lentil & Spinach Stew", price: 800, category: "ready" },
    ],
    philosophy: [
      "Encourages balanced portions & variety",
      "Supports energy, digestion, and long-term habits",
      "Vegetarian & plant-based options included"
    ]
  },
  {
    id: "weight-gain",
    name: "Weight Gain",
    description: "Calorie-dense, nutritious meals for healthy mass building",
    icon: "💪",
    color: "from-orange-500 to-amber-600",
    bases: [
      { name: "White or Brown Rice", origin: "Asian", price: 300, category: "base" },
      { name: "Jollof Rice", origin: "West African", price: 350, category: "base" },
      { name: "Pilau Rice", origin: "Swahili", price: 350, category: "base" },
      { name: "Buttered Mashed Potatoes", origin: "European", price: 350, category: "base" },
      { name: "Whole-Wheat Pasta", origin: "Italian", price: 300, category: "base" },
      { name: "Couscous", origin: "North African", price: 350, category: "base" },
      { name: "Ugali", origin: "East African", price: 150, category: "base" },
      { name: "Chapati (2 pcs)", price: 100, category: "base" },
    ],
    proteins: [
      { name: "Grilled Chicken Thighs", origin: "Mediterranean", price: 650, category: "protein" },
      { name: "Beef Stew", origin: "African Style", price: 450, category: "protein" },
      { name: "Beef Steak", origin: "Continental", price: 950, category: "protein" },
      { name: "Chicken Curry", origin: "Indian", price: 750, category: "protein" },
      { name: "Pan-Seared Salmon", origin: "Nordic", price: 1400, category: "protein" },
      { name: "Grilled Lamb Chops", origin: "Middle Eastern", price: 1250, category: "protein" },
      { name: "Fried Eggs (3 pcs)", price: 150, category: "protein" },
      { name: "Lentil & Chickpea Stew", origin: "Indian", tags: ["Plant-Based"], price: 550, category: "protein" },
      { name: "Grilled Tofu", origin: "Asian", tags: ["Vegan"], price: 750, category: "protein" },
    ],
    vegetables: [
      { name: "Sautéed Spinach with Oil", price: 250, category: "vegetable" },
      { name: "Mixed Stir-Fried Vegetables", price: 300, category: "vegetable" },
      { name: "Grilled Mediterranean Vegetables", price: 350, category: "vegetable" },
      { name: "Cabbage & Carrot Sauté", price: 200, category: "vegetable" },
      { name: "Kachumbari with Avocado", price: 150, category: "vegetable" },
      { name: "Creamed Mushrooms", price: 300, category: "vegetable" },
    ],
    extras: [
      { name: "Avocado Slices", price: 300, category: "extra" },
      { name: "Olive Oil or Garlic Butter Drizzle", price: 150, category: "extra" },
      { name: "Peanut Sauce", origin: "African", price: 250, category: "extra" },
      { name: "Hummus", origin: "Middle Eastern", price: 250, category: "extra" },
      { name: "Cheese Topping", price: 250, category: "extra" },
      { name: "Nuts & Seeds Mix", price: 300, category: "extra" },
    ],
    beverages: [
      { name: "Banana Peanut Butter Smoothie", price: 500, category: "beverage" },
      { name: "Milk-Based Fruit Smoothie", price: 450, category: "beverage" },
      { name: "Protein Shake", price: 550, category: "beverage" },
      { name: "Fresh Juice", price: 300, category: "beverage" },
      { name: "Bottled Water", price: 100, category: "beverage" },
    ],
    readyPlates: [
      { name: "Chicken, Rice & Avocado Bowl", price: 950, category: "ready" },
      { name: "Beef Stew & Mashed Potatoes", price: 850, category: "ready" },
      { name: "Pasta with Creamy Chicken Sauce", price: 850, category: "ready" },
      { name: "Lentil Curry with Chapati", price: 600, category: "ready" },
      { name: "Salmon, Couscous & Veg Bowl", price: 1550, category: "ready" },
    ],
    philosophy: [
      "Encourages gradual, healthy weight gain",
      "Focuses on quality calories, not junk",
      "Suitable for active teens, athletes, and growing bodies",
      "Vegetarian and plant-based options included"
    ]
  },
  {
    id: "bodybuilding",
    name: "Body Building",
    description: "High-protein meals designed for muscle growth and recovery",
    icon: "🏋️",
    color: "from-red-500 to-rose-600",
    bases: [
      { name: "Brown Rice", origin: "Asian", price: 250, category: "base" },
      { name: "Quinoa", origin: "South American", price: 400, category: "base" },
      { name: "Sweet Potato Mash", origin: "African", price: 300, category: "base" },
      { name: "Whole-Wheat Pasta", origin: "Italian", price: 350, category: "base" },
      { name: "Pilau Rice", origin: "Swahili", price: 350, category: "base" },
      { name: "Ugali", origin: "East African", price: 150, category: "base" },
      { name: "Roasted Baby Potatoes", origin: "European", price: 350, category: "base" },
    ],
    proteins: [
      { name: "Grilled Chicken Breast", origin: "Mediterranean", price: 750, category: "protein" },
      { name: "Lean Beef Steak", origin: "Continental", price: 1200, category: "protein" },
      { name: "Beef Mince", origin: "African Style", price: 750, category: "protein" },
      { name: "Pan-Seared Salmon", origin: "Nordic", price: 1400, category: "protein" },
      { name: "Grilled Tilapia Fillet", origin: "African", price: 700, category: "protein" },
      { name: "Turkey Breast Strips", origin: "American", price: 800, category: "protein" },
      { name: "Boiled Eggs (3 pcs)", price: 200, category: "protein" },
      { name: "Chickpea & Lentil Curry", origin: "Indian", tags: ["Plant Protein"], price: 500, category: "protein" },
      { name: "Grilled Tofu Steak", origin: "Asian", tags: ["Vegan"], price: 650, category: "protein" },
    ],
    vegetables: [
      { name: "Steamed Broccoli & Carrots", price: 300, category: "vegetable" },
      { name: "Sautéed Spinach", origin: "African Style", price: 250, category: "vegetable" },
      { name: "Mixed Stir-Fried Vegetables", origin: "Asian", price: 300, category: "vegetable" },
      { name: "Grilled Zucchini & Peppers", origin: "Mediterranean", price: 350, category: "vegetable" },
      { name: "Kachumbari Salad", price: 150, category: "vegetable" },
    ],
    extras: [
      { name: "Avocado Slices", price: 150, category: "extra" },
      { name: "Olive Oil Drizzle", price: 150, category: "extra" },
      { name: "Peanut Sauce", origin: "African", price: 200, category: "extra" },
      { name: "Hummus", origin: "Middle Eastern", price: 250, category: "extra" },
      { name: "Nuts & Seeds Mix", price: 250, category: "extra" },
    ],
    beverages: [
      { name: "Fresh Fruit Smoothie (No Added Sugar)", price: 450, category: "beverage" },
      { name: "Protein Shake (Milk or Plant-Based)", price: 500, category: "beverage" },
      { name: "Fresh Juice", price: 350, category: "beverage" },
      { name: "Bottled Water", price: 100, category: "beverage" },
    ],
    readyPlates: [
      { name: "Grilled Chicken Salad", price: 600, category: "ready" },
      { name: "Tuna & Bean Salad", price: 650, category: "ready" },
      { name: "Quinoa & Chickpea Salad", price: 850, category: "ready" },
    ],
    philosophy: [
      "Designed to support energy, strength, and recovery",
      "Suitable for active lifestyles and athletes",
      "Vegetarian and plant-based options included"
    ]
  },
  {
    id: "keto",
    name: "Keto Diet",
    description: "Low-carb, high-fat meals for ketogenic lifestyle",
    icon: "🥑",
    color: "from-purple-500 to-violet-600",
    bases: [],
    proteins: [
      { name: "Grilled Chicken Thighs", origin: "Mediterranean", price: 650, category: "protein" },
      { name: "Beef Steak", origin: "Continental", price: 1200, category: "protein" },
      { name: "Beef Mince in Herbs", origin: "African", price: 750, category: "protein" },
      { name: "Pan-Seared Salmon", origin: "Nordic", price: 1400, category: "protein" },
      { name: "Grilled Lamb Chops", origin: "Middle Eastern", price: 1500, category: "protein" },
      { name: "Grilled Pork Chops", origin: "European", price: 1100, category: "protein" },
      { name: "Fried Eggs (3 pcs)", price: 150, category: "protein" },
      { name: "Chicken Wings (Dry Rub, No Sauce)", price: 650, category: "protein" },
      { name: "Grilled Halloumi Cheese", origin: "Mediterranean", price: 900, category: "protein" },
    ],
    vegetables: [
      { name: "Sautéed Spinach with Garlic", price: 300, category: "vegetable" },
      { name: "Steamed Broccoli with Butter", price: 350, category: "vegetable" },
      { name: "Cauliflower Mash", description: "Low-Carb Alternative", price: 400, category: "vegetable" },
      { name: "Grilled Zucchini & Peppers", price: 400, category: "vegetable" },
      { name: "Cabbage Stir-Fry", price: 200, category: "vegetable" },
      { name: "Mushroom & Cream Sauté", price: 400, category: "vegetable" },
      { name: "Fresh Kachumbari (No Carbs Added)", price: 150, category: "vegetable" },
    ],
    extras: [
      { name: "Avocado Slices", price: 150, category: "extra" },
      { name: "Olive Oil Drizzle", price: 150, category: "extra" },
      { name: "Garlic Butter", price: 150, category: "extra" },
      { name: "Coconut Cream Sauce", price: 200, category: "extra" },
      { name: "Cheese Topping", price: 250, category: "extra" },
      { name: "Nuts & Seeds Sprinkle", price: 250, category: "extra" },
    ],
    beverages: [
      { name: "Lemon Water", price: 200, category: "beverage" },
      { name: "Herbal Tea", price: 250, category: "beverage" },
      { name: "Black Coffee", price: 250, category: "beverage" },
      { name: "Sparkling Water", price: 250, category: "beverage" },
    ],
    readyPlates: [
      { name: "Salmon, Spinach & Avocado Bowl", price: 1650, category: "ready" },
      { name: "Steak with Cauliflower Mash & Butter", price: 1600, category: "ready" },
      { name: "Chicken Thighs with Creamed Mushrooms", price: 1400, category: "ready" },
      { name: "Lamb Chops with Grilled Veg & Pesto", price: 1750, category: "ready" },
      { name: "Halloumi & Mediterranean Veg Plate", price: 1350, category: "ready" },
    ],
    philosophy: [
      "Focuses on whole foods and healthy fats",
      "Encourages variety and balance",
      "Suitable for active lifestyles and wellness-focused dining",
      "Vegetarian keto options included"
    ]
  },
  {
    id: "vegan",
    name: "Vegan",
    description: "100% plant-based meals with global flavors",
    icon: "🌿",
    color: "from-teal-500 to-cyan-600",
    bases: [
      { name: "Brown Rice", origin: "Asian", price: 300, category: "base" },
      { name: "Coconut Rice", origin: "Caribbean", price: 350, category: "base" },
      { name: "Quinoa", origin: "South American", price: 400, category: "base" },
      { name: "Pilau Rice (Vegan)", origin: "Swahili", price: 350, category: "base" },
      { name: "Whole-Wheat Pasta", origin: "Italian", price: 350, category: "base" },
      { name: "Couscous", origin: "North African", price: 350, category: "base" },
      { name: "Ugali", origin: "East African", price: 150, category: "base" },
      { name: "Roasted Sweet Potatoes", price: 300, category: "base" },
    ],
    proteins: [
      { name: "Chickpea & Spinach Curry", origin: "Indian", price: 550, category: "protein" },
      { name: "Lentil Stew", origin: "African", price: 450, category: "protein" },
      { name: "Grilled Tofu Steak", origin: "Asian", price: 700, category: "protein" },
      { name: "Tempeh Strips", origin: "Indonesian", price: 750, category: "protein" },
      { name: "Black Bean & Corn Mix", origin: "Mexican", price: 600, category: "protein" },
      { name: "Falafel (4 pcs)", origin: "Middle Eastern", price: 550, category: "protein" },
      { name: "Mushroom Stroganoff (Cream-Free)", origin: "European", price: 700, category: "protein" },
    ],
    vegetables: [
      { name: "Steamed Seasonal Vegetables", price: 250, category: "vegetable" },
      { name: "Sautéed Spinach with Garlic", price: 200, category: "vegetable" },
      { name: "Grilled Mediterranean Vegetables", price: 350, category: "vegetable" },
      { name: "Asian Stir-Fried Greens", price: 300, category: "vegetable" },
      { name: "Cabbage & Carrot Sauté", price: 250, category: "vegetable" },
      { name: "Kachumbari", price: 150, category: "vegetable" },
    ],
    extras: [
      { name: "Avocado Slices", price: 150, category: "extra" },
      { name: "Coconut Cream Drizzle", price: 200, category: "extra" },
      { name: "Hummus", origin: "Middle Eastern", price: 250, category: "extra" },
      { name: "Peanut Sauce", origin: "African", price: 250, category: "extra" },
      { name: "Nuts & Seeds Mix", price: 250, category: "extra" },
      { name: "Olive Oil & Herb Dressing", price: 150, category: "extra" },
    ],
    beverages: [
      { name: "Fresh Fruit Smoothie", price: 400, category: "beverage" },
      { name: "Fresh Juice", price: 350, category: "beverage" },
      { name: "Herbal Tea", price: 250, category: "beverage" },
      { name: "Bottled Water", price: 100, category: "beverage" },
    ],
    readyPlates: [
      { name: "Buddha Bowl (Quinoa, Veg, Hummus)", price: 1100, category: "ready" },
      { name: "Vegan Curry with Coconut Rice", price: 1150, category: "ready" },
      { name: "Falafel Plate with Couscous & Salad", price: 1050, category: "ready" },
      { name: "Stir-Fried Tofu & Veg with Rice", price: 1100, category: "ready" },
      { name: "Lentil Stew with Ugali", price: 600, category: "ready" },
    ],
    philosophy: [
      "100% plant-based",
      "Emphasizes global flavors & whole foods",
      "Balanced for everyday energy and enjoyment"
    ]
  }
];

export const formatPrice = (price: number): string => {
  return `KSh ${price.toLocaleString()}`;
};
