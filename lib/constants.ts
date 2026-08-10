export interface Flavour {
  id: string;
  name: string;
  tagline: string;
  volume: string;
  price: string;
  priceNum: number;
  description: string;
  image: string;
  color: string;
  gradient: string;
  accentColor: string;
  bgGlow: string;
  tastingNotes: string[];
  brix: string;
  origin: string;
  vitamins: string[];
}

export const FLAVOURS: Flavour[] = [
  {
    id: "mango-bliss",
    name: "Mango Bliss",
    tagline: "Warm Sunlight & Royal Alphonso",
    volume: "250 ml",
    price: "₹249",
    priceNum: 249,
    description: "Sun-ripened Alphonso mangoes cold-pressed within hours of harvest for velvety texture and intense tropical aroma.",
    image: "/pr1/mango.png",
    color: "#F4A623",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    accentColor: "#F4A623",
    bgGlow: "rgba(244, 166, 35, 0.15)",
    tastingNotes: ["Honey Nectar", "Velvety Pulp", "Golden Sunshine"],
    brix: "16° Brix",
    origin: "Ratnagiri & MP Groves",
    vitamins: ["Vitamin A", "Vitamin C", "Folate"]
  },
  {
    id: "guava-glow",
    name: "Guava Glow",
    tagline: "Pink Tropical Floral Nectar",
    volume: "250 ml",
    price: "₹229",
    priceNum: 229,
    description: "Crisp pink guava gently pressed to preserve delicate botanical floral notes and lush, refreshing sweetness.",
    image: "/pr1/guava.png",
    color: "#F78CA2",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accentColor: "#F78CA2",
    bgGlow: "rgba(247, 140, 162, 0.15)",
    tastingNotes: ["Floral Blossom", "Pink Velvet", "Lush Citrus Touch"],
    brix: "14° Brix",
    origin: "Bhopal Orchards, MP",
    vitamins: ["4x Vitamin C", "Lyco-Nutrients", "Potassium"]
  },
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    tagline: "Rich Garden Berry Symphony",
    volume: "250 ml",
    price: "₹269",
    priceNum: 269,
    description: "Hand-harvested ruby red strawberries cold-pressed raw to capture pure garden freshness and vibrant natural ruby red tones.",
    image: "/pr1/strawberry.png",
    color: "#E53935",
    gradient: "from-red-600/20 via-rose-700/10 to-transparent",
    accentColor: "#E53935",
    bgGlow: "rgba(229, 57, 53, 0.15)",
    tastingNotes: ["Wild Ruby Berry", "Garden Dew", "Subtle Tart Precision"],
    brix: "13° Brix",
    origin: "Mahabaleshwar Orchards",
    vitamins: ["Antioxidants", "Vitamin C", "Manganese"]
  },
  {
    id: "mixed-berry-bliss",
    name: "Mixed Berry Bliss",
    tagline: "Royal Purple Dusk & Forest Berries",
    volume: "250 ml",
    price: "₹299",
    priceNum: 299,
    description: "An opulent blend of dark blackberries, blueberries, wild raspberries, and Concord grapes for a complex, decadent flavor profile.",
    image: "/pr1/mixed-berry.png",
    color: "#6B3A91",
    gradient: "from-purple-700/20 via-indigo-900/10 to-transparent",
    accentColor: "#6B3A91",
    bgGlow: "rgba(107, 58, 145, 0.18)",
    tastingNotes: ["Dark Forest Berry", "Velvety Grape", "Complex Tannins"],
    brix: "15° Brix",
    origin: "Himalayan Foothills",
    vitamins: ["Anthocyanins", "Polyphenols", "Vitamin K"]
  }
];

export interface CraftFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  xPercent: number;
  yPercent: number;
  highlightText: string;
}

export const BOTTLE_CRAFT_FEATURES: CraftFeature[] = [
  {
    id: "oak-cap",
    title: "Hand-Crafted Oak Cap",
    subtitle: "Sustainable Natural Wood Seal",
    description: "Carved from sustainably harvested solid oak, fitted with an airtight natural silicone gasket to preserve raw cold-pressed vitality without synthetic plastics.",
    xPercent: 50,
    yPercent: 12,
    highlightText: "Natural Oak Seal"
  },
  {
    id: "embossed-glass",
    title: "Botanical Glass Relief",
    subtitle: "Tactile Organic Engraving",
    description: "Intricately molded leaf filigree etched directly into heavy-weight Italian crystal glass, offering a luxurious tactile grip and light diffraction.",
    xPercent: 50,
    yPercent: 32,
    highlightText: "3D Molded Filigree"
  },
  {
    id: "gold-foil",
    title: "24K Gold Stamped Logo",
    subtitle: "Hot-Foil Metallic Emblem",
    description: "The ÉLAN gold leaf insignia is hot-stamped using genuine 24-karat gold foil that catches ambient room light with subtle radiance.",
    xPercent: 50,
    yPercent: 48,
    highlightText: "24K Gold Leaf"
  },
  {
    id: "fruit-window",
    title: "Cold-Pressed Fruit Window",
    subtitle: "Raw Texture Showcase",
    description: "A custom-shaped die-cut window on the label showcases the rich, unfiltered natural color and pulp texture of pure raw fruit.",
    xPercent: 50,
    yPercent: 62,
    highlightText: "Unfiltered Pulp View"
  },
  {
    id: "cotton-label",
    title: "Textured Cotton Paper Label",
    subtitle: "Tactile Sustainability",
    description: "Made from 100% recycled cotton rag fibers, water-resistant yet completely biodegradable with subtle tactile grain.",
    xPercent: 50,
    yPercent: 78,
    highlightText: "100% Recycled Cotton"
  }
];

export const NUTRITION_BENEFITS = [
  {
    id: "real-fruit",
    stat: "100%",
    label: "Real Whole Fruit",
    description: "Zero concentrates, water diluents, or artificial purees.",
    iconName: "Apple"
  },
  {
    id: "cold-pressed",
    stat: "0°C",
    label: "Hydraulic Extraction",
    description: "Extracted under 10,000 lbs of hydraulic pressure without heat degradation.",
    iconName: "ThermometerSnowflake"
  },
  {
    id: "no-added-sugar",
    stat: "0g",
    label: "Added Sugars",
    description: "Naturally sweet from sun-ripened fruit nectar only.",
    iconName: "Ban"
  },
  {
    id: "no-preservatives",
    stat: "0%",
    label: "Chemical Additives",
    description: "No synthetic preservatives, artificial colors, or stabilizer gums.",
    iconName: "ShieldCheck"
  },
  {
    id: "rich-vitamins",
    stat: "4x",
    label: "Daily Vitamin C",
    description: "Bioavailable natural vitamins preserved through cold high-pressure processing.",
    iconName: "Zap"
  },
  {
    id: "eco-friendly",
    stat: "100%",
    label: "Recyclable Glass & Oak",
    description: "Infrequently mined glass and sustainable oak wood closure.",
    iconName: "Leaf"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    title: "Pure Fruit Nectar",
    subtitle: "Harvested at Peak Ripeness in Bhopal",
    image: "/pr2/lineup.png",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: "gallery-2",
    title: "Botanical Craftsmanship",
    subtitle: "Heavy Crystal Glass & Oak",
    image: "/pr2/craft-poster.png",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "gallery-3",
    title: "Alphonso Mango Nectar",
    subtitle: "Golden Sunshine Cold Pressed",
    image: "/pr2/mango-editorial.png",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "gallery-4",
    title: "Tropical Guava Glow",
    subtitle: "Floral Velvet Nectar from Bhopal",
    image: "/pr2/guava-editorial.png",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "gallery-5",
    title: "Wild Berry Harvest",
    subtitle: "Deep Forest Currants & Blueberries",
    image: "/pr2/berry-editorial.png",
    aspectRatio: "aspect-[3/4]"
  }
];
