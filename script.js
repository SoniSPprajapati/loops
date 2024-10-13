// for in loop

// const programming = ["js", "python", "java", "c++", "HTML", "CSS"];
// for (const key in programming) {
//   console.log(programming[key]);
// }

// for each loop

// const coding = ["java", "python", "java", "c++", "HTML", "CSS"];
// // coding.forEach(function (val) {
// //   console.log(val);
// // });

// coding.forEach((item) => {
//   console.log(item);
// });

// const myCoding = [
//   {
//     langName: "Javascript",
//     langFileName: "js",
//   },

//   {
//     langName: "java",
//     langFileName: "java",
//   },

//   {
//     langName: "python",
//     langFileName: "py",
//   },
// ];

// myCoding.forEach((val) => {
//   console.log(val.langFileName);
// });

// const coding = ["java", "python", "java", "c++", "HTML", "CSS"];
// coding.forEach((lang) => {
//   console.log(lang);
// });

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num > 4);
// console.log(newNum);

// const movies = ["moon", "batman", "joker", "mela", "lord of ring"];
// const myMovies = movies.filter((val) => val === "m");
// console.log(myMovies);

// example -

// const books = [
//   {
//     title: "Book1",
//     generic: "fiction",
//     published: 1998,
//     edition: 2001,
//   },

//   {
//     title: "Book2",
//     generic: "history",
//     published: 1998,
//     edition: 2003,
//   },

//   {
//     title: "Book2",
//     generic: "science",
//     published: 2001,
//     edition: 2004,
//   },

//   {
//     title: "Book4",
//     generic: "history",
//     published: 2002,
//     edition: 2005,
//   },
// ];

// const newBooks = books.filter((bk) => bk.generic === "history");
// const userbooks = books.filter((bk) => bk.published >= 2000);
// console.log(newBooks);

// map method

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNum.map((num) => num + 10);

const newNum = myNum
  .map((num) => num * 2)
  .map((num) => num + 1)
  .filter((num) => num >= 10);

console.log(newNum);
