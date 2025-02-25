let currentDate = new Date();

function updateAttendanceStats() {
    const { monthStats, overallStats } = calculateAttendanceStats(
        attendance,
        currentDate.getFullYear(),
        currentDate.getMonth()
    );

    document.getElementById('monthStats').innerHTML = `
        <p>Days Attended: ${monthStats.attended}/${monthStats.total}</p>
        <p>Attendance Rate: ${monthStats.percentage}%</p>
    `;

    document.getElementById('overallStats').innerHTML = `
        <p>Days Attended: ${overallStats.attended}/${overallStats.total}</p>
        <p>Attendance Rate: ${overallStats.percentage}%</p>
    `;
}

function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    // Clear previous calendar
    calendarGrid.innerHTML = '';
    
    // Set current month and year
    currentMonthElement.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
    
    // Get first day of month and total days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    // Add day labels
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayLabel = document.createElement('div');
        dayLabel.className = 'calendar-day';
        dayLabel.textContent = day;
        calendarGrid.appendChild(dayLabel);
    });
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of month
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        const dateString = formatDate(date);
        
        // Mark attendance or absence for weekdays
        if (isWeekday(date)) {
            if (attendance.includes(dateString)) {
                dayElement.classList.add('attended');
            } else if (date < new Date()) { // Only mark as absent if the date has passed
                dayElement.classList.add('absent');
            }
            dayElement.onclick = () => toggleAttendance(dateString, dayElement);
        }
        
        calendarGrid.appendChild(dayElement);
    }

    // Update attendance statistics
    updateAttendanceStats();
}

function toggleAttendance(date, element) {
    const index = attendance.indexOf(date);
    if (index === -1) {
        attendance.push(date);
        element.classList.add('attended');
        element.classList.remove('absent');
    } else {
        attendance.splice(index, 1);
        element.classList.remove('attended');
        if (new Date(date) < new Date()) {
            element.classList.add('absent');
        }
    }
    localStorage.setItem('attendance', JSON.stringify(attendance));
    updateAttendanceStats();
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}