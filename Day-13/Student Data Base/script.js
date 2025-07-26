let students = [];
let editingStudentRoll = null;

// DOM elements
const studentForm = document.getElementById('studentForm');
const editForm = document.getElementById('editForm');
const studentsGrid = document.getElementById('studentsGrid');
const emptyState = document.getElementById('emptyState');
const totalStudentsSpan = document.getElementById('totalStudents');
const editModal = document.getElementById('editModal');

document.addEventListener('DOMContentLoaded', () => {
    fetchStudentsFromServer();
});

// Form handlers
studentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addStudent();
});

editForm.addEventListener('submit', function(e) {
    e.preventDefault();
    saveEditedStudent();
});

// Fetch all students from server
// Fetch students from backend and populate if empty
function fetchStudentsFromServer() {
    fetch('http://localhost:8000/getStudents')
        .then(response => response.json())
        .then(data => {
            const studentList = data.students || data;  // Handles both wrapped and raw array formats

            if (studentList.length === 0) {
                // Add sample data if DB is empty
                const sampleStudents = [
                    {
                        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
                        name: 'Alice Johnson',
                        email: 'alice.johnson@email.com',
                        rollNo: 'CS001',
                        marks: 92
                    },
                    {
                        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
                        name: 'Bob Smith',
                        email: 'bob.smith@email.com',
                        rollNo: 'CS002',
                        marks: 78
                    },
                    {
                        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
                        name: 'Carol Davis',
                        email: 'carol.davis@email.com',
                        rollNo: 'CS003',
                        marks: 85
                    }
                ];

                Promise.all(sampleStudents.map(student =>
                    fetch('http://localhost:8000/createStudent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(student)
                    })
                ))
                .then(() => fetchStudentsFromServer()) // Reload data after adding
                .catch(error => console.error('Error adding sample data:', error));
            } else {
                students = studentList;      // ✅ Correctly assign the actual array
                renderStudents(students);    // ✅ Pass students to rendering function
                updateStats(students);       // ✅ Also pass it if needed
            }
        })
        .catch(error => {
            console.error('Error fetching students:', error);
        });
}



// Add new student
function addStudent() {
    const studentData = {
        image: document.getElementById('studentImage').value,
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        rollNo: document.getElementById('rollNumber').value,
        marks: parseInt(document.getElementById('marks').value)
    };

    fetch('http://localhost:8000/createStudent', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(studentData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.data) {
            showNotification("Student added successfully!", "success");
            studentForm.reset();
            fetchStudentsFromServer();
        } else {
            alert(data.message);
        }
    })
    .catch(err => console.error("Add student failed:", err));
}

// Render students
function renderStudents() {
    if (students.length === 0) {
        studentsGrid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    studentsGrid.style.display = 'grid';
    emptyState.style.display = 'none';

    studentsGrid.innerHTML = students.map(student => createStudentCard(student)).join('');
}

function createStudentCard(student) {
    const marksClass = getMarksClass(student.marks);
    const marksLabel = getMarksLabel(student.marks);

    return `
        <div class="student-card" data-id="${student._id}">
            <div class="card-actions">
                <button class="action-btn edit-btn" onclick="openEditModal('${student.rollNo}')" title="Edit Student">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn" onclick="deleteStudent('${student.rollNo}')" title="Delete Student">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <img src="${student.image}" alt="${student.name}" class="student-image"
                 onerror="this.src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'">
            <div class="student-info">
                <h3>${student.name}</h3>
                <div class="info-item"><i class="fas fa-envelope"></i> <span>${student.email}</span></div>
                <div class="info-item"><i class="fas fa-id-card"></i> <span>Roll: ${student.rollNo}</span></div>
                <div class="info-item"><i class="fas fa-chart-line"></i> <span>Marks: ${student.marks}/100</span>
                    <span class="marks-badge ${marksClass}">${marksLabel}</span>
                </div>
            </div>
        </div>
    `;
}

function getMarksClass(marks) {
    if (marks >= 90) return 'marks-excellent';
    if (marks >= 75) return 'marks-good';
    if (marks >= 60) return 'marks-average';
    return 'marks-poor';
}

function getMarksLabel(marks) {
    if (marks >= 90) return 'Excellent';
    if (marks >= 75) return 'Good';
    if (marks >= 60) return 'Average';
    return 'Needs Improvement';
}

// Delete student
function deleteStudent(rollNo) {
    if (!confirm('Are you sure you want to delete this student?')) return;

    fetch(`http://localhost:8000/deleteStudent/${rollNo}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        showNotification('Student deleted!', 'success');
        fetchStudentsFromServer();
    })
    .catch(err => console.error("Delete failed:", err));
}

// Open edit modal
function openEditModal(rollNo) {
    const student = students.find(s => s.rollNo === rollNo);
    if (!student) return;

    editingStudentRoll = rollNo;

    document.getElementById('editImage').value = student.image;
    document.getElementById('editName').value = student.name;
    document.getElementById('editEmail').value = student.email;
    document.getElementById('editRoll').value = student.rollNo;
    document.getElementById('editMarks').value = student.marks;

    editModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeEditModal() {
    editModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    editingStudentRoll = null;
    editForm.reset();
}

// Save edited student
function saveEditedStudent() {
    const updatedStudent = {
        image: document.getElementById('editImage').value,
        name: document.getElementById('editName').value,
        email: document.getElementById('editEmail').value,
        rollNo: document.getElementById('editRoll').value,
        marks: parseInt(document.getElementById('editMarks').value)
    };

    fetch(`http://localhost:8000/updateStudent/${editingStudentRoll}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedStudent)
    })
    .then(res => res.json())
    .then(data => {
        showNotification('Student updated successfully!', 'success');
        closeEditModal();
        fetchStudentsFromServer();
    })
    .catch(err => console.error("Edit failed:", err));
}

// Stats
function updateStats() {
    const count = students.length;
    totalStudentsSpan.textContent = `${count} Student${count !== 1 ? 's' : ''}`;
}

// Notifications
function showNotification(message, type) {
    alert(`${type.toUpperCase()}: ${message}`);
}

// Modal Close handlers
window.addEventListener('click', function(event) {
    if (event.target === editModal) closeEditModal();
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && editModal.style.display === 'block') closeEditModal();
});

