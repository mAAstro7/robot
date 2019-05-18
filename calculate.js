
const rivipanos = 0.1

const voitot = [10,20,30]
const rivit = ["1-1-1-1-1","1-1-1-1-1","1-X-1-1-1"]




const odds = [
  [1.5, 3.9, 5.6],
  [2.33,4,2.2],
  [2.7,4,2],
  [1.8,4,3.17],
  [1.9,3.8,3],
  [3,4,1.8],
  [1.8,4,3.2],
  [2.66, 4, 1.8],
  [2.44, 3.66, 2.18],
  [2.1, 3.9, 2.35],
  [1.88,3.81,2.55],
  [1.7, 4, 3.2],
  [4.4, 4.3, 1.49]
]

if (voitot.length == rivit.length) {
    for (let i in rivit) {
      var rivi = rivit[i].split("-");
      calculate(rivi, i);
    }
} else {
  console.log("ERRRROOOOOOOOR")
}

function calculate(rivi, index) {
  let raja = 1 * rivipanos
  for(let i in rivi) {
    let kerroin = haeRaja(i, rivi[i])
    raja = raja * kerroin;
  }

  console.log(Math.round((voitot[index]/raja)*100)/100);
}

function haeRaja(kohde, merkki) {
  //this should not exist
  if (odds[kohde][3]) {
    console.log("ERRRROOOOOR");
  } else {
    if(merkki == '1') {
      return odds[kohde][0]
    } else if (merkki == 'X') {
      return odds[kohde][1]
    } else {
      return odds[kohde][2]
    }
  }
}