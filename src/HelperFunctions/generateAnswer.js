const colors = ["red", "blue", "green", "yellow"];

const randomlyChoose = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const generateAnswer = (num) => {
  let res = [];
  for (let i = 0; i < num; i++) {
    res.push(randomlyChoose());
  }
  return res;
};

module.exports = generateAnswer;