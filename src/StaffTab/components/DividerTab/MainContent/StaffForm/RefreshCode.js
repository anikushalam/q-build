export const refreshCode = () => {
  var upperAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowerAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var rand1 = Math.floor(Math.random() * 9);
  var rand2 = Math.floor(Math.random() * 9);
  var rand3 = Math.floor(Math.random() * 9);
  var rand4 = Math.floor(Math.random() * 9);
  var rand5 = Math.floor(Math.random() * 9);
  var rand6 = Math.floor(Math.random() * 9);
  //   var code = `${upperAlpha[rand1]}${digit[rand2]}${upperAlpha[rand3]}${lowerAlpha[rand4]}${digit[rand5]}${lowerAlpha[rand6]}`;
  var code = `${digit[rand1]}${digit[rand2]}${digit[rand3]}${digit[rand4]}${digit[rand5]}${digit[rand6]}`;
  return code;
};
