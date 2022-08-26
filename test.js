const sample = require("./test.in.json");

const fs = require("fs");

const testCases = sample.testCases;

const linkSynonyms = (dict) => {
  let memo = [];
  for (let i = 0; i <= dict.length; i++) {
    const pair = dict[i];

    const lowerCaseFirst = pair && pair[0].toLowerCase();
    const lowerCaseSecond = pair && pair[1].toLowerCase();

    if (memo.length === 0) {
      memo.push(`${lowerCaseFirst},${lowerCaseSecond}`);
      continue;
    }

    for (let l = 0; l <= memo.length; l++) {
      if (!memo[l]) {
        break;
      }
      // similars
      if (
        memo[l].includes(lowerCaseFirst) &&
        memo[l].includes(lowerCaseSecond)
      ) {
        continue;
      }

      if (
        memo[l].includes(lowerCaseFirst) &&
        !memo[l].includes(lowerCaseSecond)
      ) {
        memo[l] += "," + lowerCaseSecond;
        continue;
      }
      if (
        !memo[l].includes(lowerCaseSecond) &&
        memo[l].includes(lowerCaseSecond)
      ) {
        memo[l] += "," + lowerCaseSecond;
        continue;
      }

      if (
        !memo[l].includes(lowerCaseFirst) &&
        !memo[l].includes(lowerCaseSecond)
      ) {
        memo.push(`${lowerCaseFirst},${lowerCaseSecond}`);
        break;
      }
    }
  }

  return memo;
};

const compareSynonyms = (memo, queries) => {
  let result = Array(100).fill("different");
  queries.map((query, o) => {
    const left = query[0].toLowerCase();
    const right = query[1].toLowerCase();

    if (left === right) {
      result.push("synonyms");
      return;
    }

    for (let k = 0; k <= memo.length; k++) {
      if (!memo[k]) {
        break;
      }

      if (memo[k].includes(left) && memo[k].includes(right)) {
        result[o] = "synonyms";
        break;
      }
    }
  });

  return result;
};

const sampleResults = testCases.map((cases, i) => {
  const { dictionary, queries } = cases;

  const result = compareSynonyms(linkSynonyms(dictionary), queries);

  return { [`case${i}`]: result };
});

fs.writeFile("result.txt", JSON.stringify(sampleResults), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
