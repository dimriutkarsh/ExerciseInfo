function updateSchedule() {
    const day = document.getElementById('daySelect').value;
    const scheduleList = document.getElementById('scheduleList');
    scheduleList.innerHTML = '';

    const daySchedule = userSchedule[day];
    
    if (daySchedule.length === 0) {
        scheduleList.innerHTML = '<p>No exercises scheduled for this day.</p>';
        return;
    }

    daySchedule.forEach(exerciseId => {
        const exercise = exercises.find(e => e.id === exerciseId);
        if (exercise) {
            const exerciseElement = document.createElement('div');
            exerciseElement.className = 'exercise-card';
            exerciseElement.innerHTML = `
                <h3>${exercise.name}</h3>
                <p><strong>Duration:</strong> ${exercise.duration} minutes</p>
                <p><strong>Category:</strong> ${exercise.category}</p>
            `;
            scheduleList.appendChild(exerciseElement);
        }
    });
}
