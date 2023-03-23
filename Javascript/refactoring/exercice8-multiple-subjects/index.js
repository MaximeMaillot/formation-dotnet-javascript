/**
Copiez/collez votre code de l'exercice 7 et partez sur cette base.
Désormais, chaque élève saisit 5 notes pour les matières Maths, Français, Anglais, Physique et Chimie.
Calculez et affichez la moyenne de chaque élève.
Calculez et affichez la moyenne de la classe par matière.
 */

function inputStudentMarks() {
    console.log("inputStudentMarks")
    let marks = []
    for (let i = 0; i < subjects.length; i++) {
        let mark = prompt(`Entrez la note de ${subjects[i]} :`)
        if (mark != -1) {
            marks.push(parseInt(mark))
        } else {
            console.log("STOP car -1")
            return []
        }
    }
    console.log("Should return : " + marks)
    return marks
}

let subjects = ["Maths", "Français", "Anglais", "Physique", "Chimie"]
let sumSubjects = []
for (let i = 0; i < subjects.length; i++) {
    sumSubjects.push(0)
}

let arrayStudents = []
let marks = inputStudentMarks()
while (marks.length > 0) {
    arrayStudents.push(marks)
    marks = inputStudentMarks()
}

if (arrayStudents.length == 0) {
    console.log("Pas assez de data")
} else {
    arrayStudents.forEach(((marks) => {
        let sumNotes = 0
        marks.forEach((mark, index) => {
            sumNotes += mark
            sumSubjects[index] += mark
        })
        console.log(`Moyenne de l'élève : ${sumNotes / marks.length}`)
    }))
    sumSubjects.forEach((sumSubject, index) => {
        console.log(`Moyenne de ${subjects[index]} : ${sumSubject / arrayStudents.length}`)
    })
}