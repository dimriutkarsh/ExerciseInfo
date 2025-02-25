// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Show search section by default
    showSection('search');
    
    // Initialize calendar
    renderCalendar();
    
    // Initialize schedule
    updateSchedule();
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.remove('hidden');
}