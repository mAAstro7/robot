var fs = require('fs');
let voitotFile = "";
let rivitFile = "";

async function alusta() {


  async function haeRivit() {
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('rivit')
    });
    
    rivitFile = '['
    lineReader.on('line', function (line) {
      rivitFile += '"'+line+'",'
    });
  }

  async function haeVoitot() {
    var lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('voitot')
    });
    voitotFile = '['
    lineReader.on('line', function (line) {
      voitotFile += ''+line+','
    });  
  }

  function write() {
    fs.writeFile("voitotArray", voitotFile, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
  fs.writeFile("rivitArray", rivitFile, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
  }
  haeRivit();
  haeVoitot();
  setTimeout(write, 10000);
}

alusta();