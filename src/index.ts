import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader('football.csv');
reader.readFile();


enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

    
let chelseaWins = 0;

for (let match of reader.data) {
    if(match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
        chelseaWins++;
    } else if(match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
        chelseaWins++;
    }
}


console.log(`Man United won ${chelseaWins} games`);

