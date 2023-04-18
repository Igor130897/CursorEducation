const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];


function getSubjects(student = students[0]) {
    const subjects = Object.keys(student.subjects)
    const subjectList = subjects.map((item) => {
        return item.toUpperCase().slice(0,1) + item.toLowerCase().slice(1).replaceAll('_', ' ');
    });
    return subjectList
}
console.log('Повертає список предметів для конкретного студента. Назву предмету необхідно повернути з великої літери, а _ – замінити на пробел: ', getSubjects().join(', '), '\n\n');

function getAverageMark(student = students[0]) {
    const arr = Object.values(student.subjects).flat();
    const sumMark = arr.reduce((preValue,item) => preValue + item, 0);
    return (sumMark / arr.length).toFixed(2);
}
console.log('Середня успішність :', getAverageMark(students[0]), '\n\n');

function getStudentInfo(student) {
    const {name, course } = student;
    const averageMark = getAverageMark(student);
    return {name, course, averageMark: averageMark};
}
console.log('Інформація про студента та його успішність: ', getStudentInfo(students[0]), '\n\n')

const getStudentsNames = student => {
    const studentNames = Object.keys(student).map((key) => {
        return student[key].name;
    });
    return studentNames.sort();
}
console.log('Студенти в алфавитному порядку: ',getStudentsNames(students).join(', '),'\n\n')

function getBestStudent(student) {
    let bestStudent;
    let bestAverage = 0;
    students.forEach(student => {
        let average = getAverageMark(student);
        if (average > bestAverage) {
            bestAverage = average;
            bestStudent = student.name;
        }
    });
    return bestStudent
}
console.log('ім`я кращого студента: ', getBestStudent(students), );


function calculateWordLetters(word) {
    const delSpaceWord = word.replaceAll(' ', '');
    const letters = {};
    for (let i = 0; i < delSpaceWord.length;i++) {
        const letter = delSpaceWord[i];
        if (letters[letter] !== undefined) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
    }
    return letters;
}
console.log(calculateWordLetters('hello world'));