const students = ["Olexandr", "Ihor", "Olena", "Ira", "Olexiy","Sveta"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури данних"];
const marks = [4, 5, 5, 3, 4, 5];

//Number 1
const paraStudents = (students) => {
    const para = [];
        para.push([students[0],students[2]]),
        para.push([students[1],students[3]]),
        para.push([students[4],students[5]])
        return para;
}

const para = paraStudents(students);
console.log(para)

//Number 2
const paraThemes = (students, themes) => {
    const projectStudents = [];
    for (let i = 0; i < students.length; i++){
        projectStudents.push([students[i][0] + `i` + students[i][1], themes[i]])
    }
    return projectStudents
}

const studentsThemes = paraThemes(para,themes)
console.log(studentsThemes)

//Number 3
const markStudents = (students, marks) =>{
    const marksPoint = [];
        for (let i = 0; i < students.length; i++){
            marksPoint.push([students[i], parseInt(marks[i])]);
        }
        return marksPoint
}

const studentsMarks = markStudents(students,marks)
console.log(studentsMarks)

//Number 4
function paraMarks (para) {
    const paraMarksThemes = para;
    for (i=0; i < para.length; i++){
        paraMarksThemes[i].push(Math.floor(Math.random()*(5-1)+1));
    }
    return paraMarksThemes;
}

const markspara = paraMarks(studentsThemes)
console.log(markspara)


