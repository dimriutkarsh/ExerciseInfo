function searchExercises() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    // Problem-based search terms and their synonyms
    const problemMap = {
        'neck pain': ['neck pain', 'stiff neck', 'neck tension', 'neck stiffness'],
        'back pain': ['back pain', 'back ache', 'backache', 'spinal pain'],
        'headache': ['headache', 'head pain', 'migraine'],
        'weak core': ['weak core', 'lack of core strength', 'poor core stability'],
        'weak legs': ['weak legs', 'poor leg strength', 'leg weakness'],
        'poor flexibility': ['poor flexibility', 'lack of flexibility', 'stiffness'],
        'low energy': ['low energy', 'fatigue', 'lack of energy'],
        'poor balance': ['poor balance', 'lack of balance', 'balance problems'],
        'weak upper body': ['weak upper body', 'poor upper body strength', 'upper body weakness'],
        'grip weakness': ['grip weakness', 'poor grip strength', 'weak grip'],
        'stress': ['stress', 'anxiety', 'tension'],
        'poor posture': ['poor posture', 'bad posture', 'posture problems']
    };

    // Find matching problems based on the search term
    let matchingProblems = [];
    for (const [problem, synonyms] of Object.entries(problemMap)) {
        if (synonyms.some(synonym => searchTerm.includes(synonym))) {
            matchingProblems.push(problem);
        }
    }

    // Filter exercises based on search term or matching problems
    const filteredExercises = exercises.filter(exercise => {
        const basicMatch = exercise.name.toLowerCase().includes(searchTerm) ||
                           exercise.description.toLowerCase().includes(searchTerm);

        const problemMatch = matchingProblems.length > 0 &&
                             exercise.problems.some(problem => 
                                 matchingProblems.some(matchingProblem => 
                                     problem.toLowerCase() === matchingProblem.toLowerCase()
                                 )
                             );

        return basicMatch || problemMatch;
    });
    

    if (filteredExercises.length === 0) {
        resultsContainer.innerHTML = '<p>No exercises found. Try different search terms or consult a medical professional for specific conditions.</p>';
        return;
    }

    // Sort exercises to prioritize problem-specific ones
    filteredExercises.sort((a, b) => {
        const aRelevance = a.problems.some(p => matchingProblems.includes(p)) ? 1 : 0;
        const bRelevance = b.problems.some(p => matchingProblems.includes(p)) ? 1 : 0;
        return bRelevance - aRelevance;
    });

    // Display the filtered exercises
    filteredExercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.innerHTML = `
            <h3>${exercise.name}</h3>
            <p><strong>Category:</strong> ${exercise.category}</p>
            <p><strong>Description:</strong> ${exercise.description}</p>
            <p><strong>Benefits:</strong></p>
            <ul>
                ${exercise.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <p><strong>Duration:</strong> ${exercise.duration} minutes</p>
            <p><strong>Difficulty:</strong> ${exercise.difficulty}</p>
            <p><strong>Recommended for:</strong> ${exercise.problems.join(', ')}</p>
        `;
        resultsContainer.appendChild(card);
    });
}
