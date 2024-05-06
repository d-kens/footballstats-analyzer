"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.readFile();
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let chelseaWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log(`Man United won ${chelseaWins} games`);
