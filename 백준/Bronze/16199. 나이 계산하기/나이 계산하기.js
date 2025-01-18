const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
let input = require("fs")
  .readFileSync(filePath, "utf-8")
  .trim()
  .toString()
  .split("\n");

const birthDate = input[0].split(" ").map(Number);
const currentDate = input[1].split(" ").map(Number);

const [birthYear, birthMonth, birthDay] = birthDate;
const [currentYear, currentMonth, currentDay] = currentDate;

const manAge = calculateManAge(
  birthYear,
  birthMonth,
  birthDay,
  currentYear,
  currentMonth,
  currentDay
);
const countingAge = calculateCountingAge(birthYear, currentYear);
const yearAge = calculateYearAge(birthYear, currentYear);

console.log(manAge);
console.log(countingAge);
console.log(yearAge);

function calculateManAge(bYear, bMonth, bDay, cYear, cMonth, cDay) {
  let age = cYear - bYear;
  if (cMonth < bMonth || (cMonth === bMonth && cDay < bDay)) {
    age -= 1; // 생일이 지나지 않았으면 나이를 한 살 줄임
  }
  return age;
}

function calculateCountingAge(bYear, cYear) {
  return cYear - bYear + 1; // 태어난 해를 포함하므로 +1
}

function calculateYearAge(bYear, cYear) {
  return cYear - bYear; // 단순히 기준 연도에서 출생 연도를 뺀 값
}
