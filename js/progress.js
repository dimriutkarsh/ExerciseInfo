import Chart from 'chart.js/auto';

let progressChart = null;

export function initializeProgress() {
    const exerciseSelect = document.getElementById('exerciseSelect');
    if (!exerciseSelect) return; // Guard clause

    const exercises = ['Bench Press', 'Squat', 'Deadlift', 'Shoulder Press'];
    
    exercises.forEach(exercise => {
        const option = document.createElement('option');
        option.value = exercise.toLowerCase().replace(' ', '-');
        option.textContent = exercise;
        exerciseSelect.appendChild(option);
    });

    setupProgressChart();
    
    // Add event listeners
    exerciseSelect.addEventListener('change', (e) => {
        updateProgressChart(e.target.value);
    });
    
    const addButton = document.querySelector('.progress-form button');
    if (addButton) {
        addButton.addEventListener('click', addProgress);
    }
}

function setupProgressChart() {
    const ctx = document.getElementById('progressChart');
    if (!ctx) return; // Guard clause

    progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Progress',
                data: [],
                borderColor: '#4CAF50',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateProgressChart(exercise) {
    // Simulate fetching data for the selected exercise
    const data = generateDummyData();
    
    if (progressChart) {
        progressChart.data.labels = data.labels;
        progressChart.data.datasets[0].data = data.values;
        progressChart.update();
    }
}

function addProgress() {
    const exercise = document.getElementById('exerciseSelect').value;
    const weight = document.getElementById('weight').value;
    const reps = document.getElementById('reps').value;

    if (!exercise || !weight || !reps) return;

    // Update chart with new data
    if (progressChart) {
        progressChart.data.labels.push(new Date().toLocaleDateString());
        progressChart.data.datasets[0].data.push(weight);
        progressChart.update();
    }

    // Clear inputs
    document.getElementById('weight').value = '';
    document.getElementById('reps').value = '';
}

function generateDummyData() {
    const labels = [];
    const values = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString());
        values.push(Math.floor(Math.random() * 30) + 50);
    }
    
    return { labels, values };
}