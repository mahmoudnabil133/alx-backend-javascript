var st1 = {
    firstName: 'ali',
    lastName: 'yaser',
    age: 12,
    location: 'tanta'
};
var st2 = {
    firstName: 'kmal',
    lastName: 'ibrahem',
    age: 23,
    location: 'Alexandria'
};
var students = [st1, st2];
var body = document.getElementsByTagName("body")[0];
var table = document.createElement('table');
var thead = document.createElement('thead');
var th1 = document.createElement('th');
var th2 = document.createElement('th');
th1.innerText = 'First Name';
th2.innerText = 'Location';
th1.style.border = '1px solid gray';
th2.style.border = '1px solid gray';
th1.style.padding = '.5rem';
th2.style.padding = '.5rem';
table.style.border = '1px solid gray';
table.style.borderCollapse = 'collapse';
thead.append(th1);
thead.append(th2);
table.append(thead);
students.forEach(function (student) {
    var row = document.createElement('tr');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
    column1.innerText = student.firstName;
    column2.innerText = student.lastName;
    column1.style.border = '1px solid gray';
    column2.style.border = '1px solid gray';
    column1.style.padding = '.5rem';
    column2.style.padding = '.5rem';
    row.append(column1);
    row.append(column2);
    table.append(row);
});
body.append(table);
