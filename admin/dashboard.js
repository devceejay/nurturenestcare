"use strict";

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.dashboard-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}


// Dummy attendance logs
const logs = [
  { date: '2025-07-12', child: 'Emma Johnson', timeIn: '07:35', timeOut: '17:30' },
  { date: '2025-07-12', child: 'Liam Brown', timeIn: '07:40', timeOut: '17:15' },
  { date: '2025-07-12', child: 'Olivia Smith', timeIn: '07:55', timeOut: '17:25' },
  { date: '2025-07-11', child: 'Noah Davis', timeIn: '07:45', timeOut: '18:00' },
];

// Populate Daily Logs table on load
document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('logs-body');
  logs.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.date}</td>
      <td>${log.child}</td>
      <td>${log.timeIn}</td>
      <td>${log.timeOut}</td>
      <td>
        <i data-feather="edit" class="edit-icon"></i>
        <i data-feather="trash-2" class="delete-icon"></i>
      </td>
    `;
    tbody.appendChild(row);


    feather.replace();
  });
});


function logout() {
  window.location.href = 'admin-login.html';
}


