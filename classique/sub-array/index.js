/*
Ecrivez un algorithme qui retourne dans un tableau, le maximum de chaque sous-tableau
Exemple

En entrée : [ [10,7,6,8], [15,-1,56,7], [75,4,-5,-100] ]

En sortie : [10,56,75]
*/

function getSubArrayMax(array) {
    let subArrayMax = []
    for (let i = 0; i < array.length; i++) {
        subArrayMax[i] = Number.MIN_VALUE
        for (let j = 0; j < array[i].length; j++) {
            if (subArrayMax[i] < array[i][j]) {
                subArrayMax[i] = array[i][j]
            }
        }
    }
    return subArrayMax
}

console.log(getSubArrayMax([[10, 7, 6, 8], [15, -1, 56, 7], [75, 4, -5, -100]]))

export { getSubArrayMax }