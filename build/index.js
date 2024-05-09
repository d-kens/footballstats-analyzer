"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.readFile();
console.log(reader.data[0][0]);
let chelseaWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Chelsea' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match[2] === 'Chelsea' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log(`Chelsea won ${chelseaWins} games`);
