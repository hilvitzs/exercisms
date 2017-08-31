var rnaTranscriber = function() {};

rnaTranscriber.prototype.toRna = function(input) {
  var dna = input.split('');
  var rna = [];


  for(var i = 0; i < dna.length; i++) {
    switch(dna[i]) {
      case 'G':
        rna.push('C');
        continue;
      case 'C':
        rna.push('G');
        continue;
      case 'A':
        rna.push('U');
        continue;
      case 'T':
        rna.push('A');
        continue;
      default:
        throw ('Invalid input')
        break;
    }
  }

  return rna.join('')
}

module.exports = rnaTranscriber;
