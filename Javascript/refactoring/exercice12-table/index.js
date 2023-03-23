// Affichez les tables de multiplications de 1 à 15

let start = 1
let end = 15

for (let i = start; i <= end; i++) {
    console.log("Table de " + i)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}