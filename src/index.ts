import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";


const reader = new MatchReader('football.csv');
reader.readFile();

console.log(reader.data[0][0]) 


    
let chelseaWins = 0;

for (let match of reader.data) {
    if(match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
        chelseaWins++;
    } else if(match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
        chelseaWins++;
    }
}


console.log(`Chelsea won ${chelseaWins} games`);

