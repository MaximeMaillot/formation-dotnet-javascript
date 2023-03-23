/**
Ecrivez un programme qui compte le nombre totale des consonnes dans une phrase
Exemple

*En entrée : 'ceci est une phrase'* En sortie : 9
 */

function countConsonants(str) {
  return str.toLowerCase().match(/[b-df-hj-np-tv-xzçñ]/gi).length || [].length;
}

function countConsonantsWithArray(str) {
  str = str.toLowerCase();
  let consonants = ["z,r,t,p,q,s,d,f,g,h,j,k,l,m,w,x,c,v,b,n,ç,ñ,µ"];
  let cpt = 0;
  for (let i = 0; i < str.length; i++) {
    let lettre = str[i];
    for (let j = 0; j < consonants.length; j++) {
      if (lettre == consonants[j]) {
        cpt++;
        j = consonants.length;
      }
    }
  }
}

console.log(countConsonants("Ceci est une phrase"));
console.log(countConsonantsWithArray("Ceci est une phrase"));

export { countConsonants };
