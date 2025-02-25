// Date utility functions
function formatDate(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
}

function isWeekday(date) {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 is Sunday, 6 is Saturday
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function getWorkoutDays(year, month) {
    const days = [];
    const daysInMonth = getDaysInMonth(year, month);
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        if (isWeekday(date)) {
            days.push(formatDate(date));
        }
    }
    
    return days;
}

// Attendance statistics functions
function calculateAttendanceStats(attendance, year, month) {
    const workoutDays = getWorkoutDays(year, month);
    const monthAttendance = attendance.filter(date => date.startsWith(`${year}-${(month + 1).toString().padStart(2, '0')}`));
    
    const monthStats = {
        total: workoutDays.length,
        attended: monthAttendance.length,
        percentage: Math.round((monthAttendance.length / workoutDays.length) * 100) || 0
    };
    
    const allWorkoutDays = getWorkoutDays(year, month);
    const overallStats = {
        total: allWorkoutDays.length,
        attended: attendance.length,
        percentage: Math.round((attendance.length / allWorkoutDays.length) * 100) || 0
    };
    
    return { monthStats, overallStats };
}