const names = [
  "Aarav", "Vihaan", "Ishaan", "Reyansh", "Krishna",
  "Anaya", "Diya", "Saanvi", "Aadhya", "Myra"
];

export const getRandomName = () => {
  return names[Math.floor(Math.random() * names.length)];
};

export const getRandomString = (length = 8) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
};

console.log(getRandomString()); // e.g. "aK9xP2Lm"