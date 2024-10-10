interface Student {
  firstName : string;
  lastName : string;
  age : number;
  location : string;
}

const student1 : Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'San Francisco'
}
const studentsList: Student[] = [student1, student2];

const student_table = document.createElement('table');
const student_body = document.createElement('tbody');

studentsList.forEach((student) => {
    const tableName = document.createElement('tableName');
    const tableRow = document.createElement('tableRow');
    const tableLocation = document.createElement('tableLocation');

    tableName.textContent = student.firstName;
    tableLocation.textContent = student.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    student_body.appendChild(tableRow);
});

student_table.appendChild(student_body);
document.body.appendChild(student_table);
