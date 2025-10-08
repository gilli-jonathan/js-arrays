const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

/* SOLUZIONE CON REVERSE
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers);
for (let index = 0; index < teachers.length; index++) {
  const element = teachers[index];
  console.log(element);
}*/

const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

// MACRO TASK, SEPARARE TUTTI I NOMI CON UN CICLO E DELLE CONDIZIONI

const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher.length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
/*
teachers.splice(1, 1);
console.log(teachers);
*/

const Ed_puzza = [];

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  if (teacher !== "Ed") {
    Ed_puzza.push(teacher);
  }
}

console.log(Ed_puzza);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

/* SOLUZIONE CON INCLUDES
const isFabioPresent = teachers.includes("Fabio");
console.log(isFabioPresent);
*/
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];

  if (teacher === "Fabio") {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString

/*const teachersString = teachers.join(",");
console.log(teachersString);*/

let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];
  teachersString = teachersString + teacher;

  if (i < teachers.length - 1) {
    teachersString = teachersString + ", ";
  }
}

console.log(teachersString);
