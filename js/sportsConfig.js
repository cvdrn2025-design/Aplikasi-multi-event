// js/sportsConfig.js
export const sportsConfig = {
  football: {
    name: "Sepak Bola / Futsal",
    formats: ["Single Elimination", "Setengah Kompetisi"],
    subCategories: ["Futsal Putra", "Futsal Putri"]
  },
  basketball: {
    name: "Bola Basket",
    formats: ["Single Elimination", "Double Elimination"],
    subCategories: ["3x3", "5v5"]
  }
};

console.log('sportsConfig loaded:', sportsConfig);
