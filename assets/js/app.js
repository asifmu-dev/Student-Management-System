const students = [];
const displayStudents = () => {
    const list = document.getElementById("studentList");
    list.innerHTML = students.map((student, index) => `
        <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>
    `).join("");
};

const addStudent = () => {
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value.trim();
    const editIndex = document.getElementById("editIndex").value;

    if (!name || !age || !course) {
        alert("Please fill all fields!");
        return;
    }

    const student = { name, age: Number(age), course };

    if (editIndex === "") {
        students.push(student);
        alert("Student added!");
    } else {
        students[editIndex] = student;
        alert("Student updated!");
    }

    clearForm();
    displayStudents();
};

const editStudent = (index) => {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;
    document.getElementById("editIndex").value = index;
    document.getElementById("saveBtn").innerText = "Update Student";
};

const deleteStudent = (index) => {
    if (confirm("Do you want to delete this student?")) {
        students.splice(index, 1);
        clearForm();
        displayStudents();
    }
};

const clearForm = () => {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("editIndex").value = "";
    document.getElementById("saveBtn").innerText = "Add Student";
};

displayStudents();