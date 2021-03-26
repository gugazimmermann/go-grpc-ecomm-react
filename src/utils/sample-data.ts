import { Category, Product } from "../interfaces";

export const sampleCategoryData: Category[] = [
  { id: 1, name: "Books", parent: 0 },
  { id: 2, name: "Accessories", parent: 0 },
  { id: 3, name: "AD&D", parent: 1 },
  { id: 4, name: "World of Darkness", parent: 1 },
  { id: 5, name: "GURPS", parent: 1 },
  { id: 6, name: "Core", parent: 3 },
  { id: 7, name: "Dragonlance", parent: 3 },
  { id: 8, name: "Forgotten Realms", parent: 3 },
  { id: 9, name: "Planescape", parent: 3 },
  { id: 10, name: "Vampire", parent: 4 },
  { id: 11, name: "Werewolf", parent: 4 },
];

export const sampleProductData: Product[] = [
  { id: 1, name: "Dices Pack", quantity: 50, value: 5.2, category: 2 },
  { id: 2, name: "d10 Dice", quantity: 47, value: 5.2, category: 2 },
  { id: 3, name: "Special d10 Dice Pack", quantity: 15, value: 10.5, category: 2 },
  { id: 4, name: "Cemmorative Dices", quantity: 0, value: 21.99, category: 2 },

  { id: 5, name: "Basic Set", quantity: 8, value: 15.35, category: 5 },
  { id: 6, name: "Fantasy", quantity: 5, value: 11.5, category: 5 },
  { id: 7, name: "Cyberworld", quantity: 7, value: 11.5, category: 5 },
  { id: 8, name: "Horror", quantity: 0, value: 11.5, category: 5 },
  { id: 9, name: "Magic", quantity: 0, value: 11.5, category: 5 },
  { id: 10, name: "Supers", quantity: 1, value: 11.5, category: 5 },
  { id: 11, name: "Ultra-Tech", quantity: 1, value: 11.5, category: 5 },

  { id: 12, name: "Player's Handbook", quantity: 10, value: 12.99, category: 6 },
  { id: 13, name: "Dungeon Master Guide", quantity: 8, value: 10.99, category: 6 },
  { id: 14, name: "Monstrous Manual", quantity: 9, value: 15.99, category: 6 },
  { id: 15, name: "Book of Artifacts", quantity: 1, value: 17.75, category: 6 },
  { id: 16, name: "Monstrous Compendium - Fiend Folio Appendix", quantity: 12, value: 9.0, category: 6 },
  { id: 17, name: "Monstrous Compendium - Outer Planes Appendix", quantity: 0, value: 8.0, category: 6 },
  { id: 18, name: "Monstrous Compendium Volume 1", quantity: 15, value: 10.0, category: 6 },
  { id: 19, name: "Monstrous Compendium Volume 2", quantity: 4, value: 10.0, category: 6 },
  { id: 20, name: "Tome of Magic", quantity: 1, value: 12.99, category: 6 },

  { id: 21, name: "Dragon Dawn", quantity: 7, value: 11.5, category: 7 },
  { id: 22, name: "Dragon Knight", quantity: 5, value: 11.5, category: 7 },
  { id: 23, name: "Dragons Rest", quantity: 5, value: 11.5, category: 7 },
  { id: 24, name: "Classics Volume 1", quantity: 0, value: 12.2, category: 7 },
  { id: 25, name: "Classics Volume 2", quantity: 0, value: 12.2, category: 7 },
  { id: 26, name: "Classics Volume 3", quantity: 0, value: 12.2, category: 7 },
  { id: 27, name: "Monstrous Compendium - Dragonlance", quantity: 1, value: 21.0, category: 7 },
  { id: 28, name: "Player's Guide to the Dragonlance Campaign", quantity: 3, value: 30.0, category: 7 },
  { id: 29, name: "Tales of the Lance", quantity: 1, value: 7.35, category: 7 },

  { id: 30, name: "Player's Guide to the Forgotten Realms", quantity: 5, value: 11.5, category: 8 },
  { id: 31, name: "Volo's Guide to the Sword Coast", quantity: 10, value: 11.5, category: 8 },
  { id: 32, name: "Volo's Guide to Waterdeep", quantity: 3, value: 11.5, category: 8 },
  { id: 33, name: "The North - Guide to the Savage Frontier", quantity: 1, value: 11.5, category: 8 },
  { id: 34, name: "Powers and Pantheons", quantity: 12, value: 11.5, category: 8 },
  { id: 35, name: "Heroes' Lorebook", quantity: 4, value: 11.5, category: 8 },
  { id: 36, name: "Faiths & Avatars", quantity: 7, value: 11.5, category: 8 },
  { id: 37, name: "Drizzt Do'Urden's Guide to the Underdark", quantity: 7, value: 11.5, category: 8 },
  { id: 38, name: "Cormanthyr", quantity: 2, value: 11.5, category: 8 },
  { id: 39, name: "Cormyr", quantity: 1, value: 11.5, category: 8 },

  { id: 40, name: "A Guide to the Astral Plane", quantity: 3, value: 8.25, category: 9 },
  { id: 41, name: "A Guide to the Ethereal Plane", quantity: 6, value: 7.33, category: 9 },
  { id: 42, name: "A Player's Primer to the Outlands", quantity: 8, value: 11.45, category: 9 },
  { id: 43, name: "Dead Gods", quantity: 2, value: 5.5, category: 9 },
  { id: 44, name: "Faction War", quantity: 1, value: 13.99, category: 9 },
  { id: 45, name: "Faces of Evil, The Fiends", quantity: 9, value: 11.5, category: 9 },
  { id: 46, name: "Hellbound, The Blood War", quantity: 3, value: 10.25, category: 9 },
  { id: 47, name: "In the Abyss", quantity: 5, value: 12.25, category: 9 },
  { id: 48, name: "In the Cage, A Guide to Sigil", quantity: 0, value: 9.9, category: 9 },
  { id: 49, name: "The Factol's Manifesto", quantity: 0, value: 9.9, category: 9 },
  { id: 50, name: "The Inner Planes", quantity: 0, value: 15.0, category: 9 },
  { id: 51, name: "The Planewalkers Handbook", quantity: 1, value: 12.0, category: 9 },
  { id: 52, name: "Uncaged, Faces of Sigil", quantity: 1, value: 9.0, category: 9 },

  { id: 53, name: "Vampire the Masquerade - 2nd Edition", quantity: 15, value: 15.99, category: 10 },
  { id: 54, name: "Clanbook Brujah", quantity: 12, value: 11.0, category: 10 },
  { id: 55, name: "Clanbook Gangrel", quantity: 15, value: 11.0, category: 10 },
  { id: 56, name: "Clanbook Giovanni", quantity: 9, value: 13.0, category: 10 },
  { id: 57, name: "Clanbook Malkavian", quantity: 7, value: 11.0, category: 10 },
  { id: 58, name: "Clanbook Nosferatu", quantity: 10, value: 11.0, category: 10 },
  { id: 59, name: "Clanbook Toreador", quantity: 5, value: 11.0, category: 10 },
  { id: 60, name: "Clanbook Tremere", quantity: 7, value: 11.0, category: 10 },
  { id: 61, name: "Clanbook Ventrue", quantity: 8, value: 11.0, category: 10 },

  { id: 62, name: "Werewolf the Apocalypse - 2nd Edition", quantity: 8, value: 15.99, category: 11 },
  { id: 63, name: "TribeBook Black Furies", quantity: 3, value: 11.5, category: 11 },
  { id: 64, name: "TribeBook Bone Gnawers", quantity: 7, value: 11.5, category: 11 },
  { id: 65, name: "TribeBook Children of Gaia", quantity: 5, value: 11.5, category: 11 },
  { id: 66, name: "TribeBook Fianna", quantity: 6, value: 11.5, category: 11 },
  { id: 67, name: "TribeBook Get Of Fenris", quantity: 1, value: 11.5, category: 11 },
  { id: 68, name: "TribeBook Glass Walkers", quantity: 0, value: 11.5, category: 11 },
  { id: 69, name: "TribeBook Red Talons", quantity: 3, value: 11.5, category: 11 },
  { id: 70, name: "TribeBook Shadow Lords", quantity: 2, value: 11.5, category: 11 },
  { id: 71, name: "TribeBook Silent Striders", quantity: 7, value: 11.5, category: 11 },
  { id: 72, name: "TribeBook Silver Fangs", quantity: 2, value: 11.5, category: 11 },
  { id: 73, name: "TribeBook Stargazers", quantity: 3, value: 11.5, category: 11 },
  { id: 74, name: "TribeBook Uktena", quantity: 4, value: 11.5, category: 11 },
  { id: 75, name: "TribeBook Wendigo", quantity: 9, value: 11.5, category: 11 },
  { id: 76, name: "Book Of The Wyrm", quantity: 7, value: 11.5, category: 11 },
  { id: 77, name: "Players Guide To Garou", quantity: 3, value: 11.5, category: 11 },
  { id: 78, name: "Project Twilight", quantity: 7, value: 11.5, category: 11 },
  { id: 79, name: "Umbra", quantity: 1, value: 11.5, category: 11 },
  { id: 80, name: "Umbra - The Velvet Shadows", quantity: 1, value: 11.5, category: 11 },
];
