// Function to create yoga pose cards
function createYogaCard(pose) {
    const card = document.createElement('div');
    card.className = 'yoga-card';
    
    card.innerHTML = `
        <img src="${pose.image}" alt="${pose.name}" class="yoga-image">
        <div class="yoga-content">
            <h2 class="yoga-title">${pose.name}</h2>
            <ul class="yoga-steps">
                ${pose.steps.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `;
    
    return card;
}

// Function to display all yoga poses
function displayYogaPoses(poses) {
    const container = document.getElementById('yogaContainer');
    container.innerHTML = '';
    
    poses.forEach(pose => {
        container.appendChild(createYogaCard(pose));
    });
}

// Function to filter yoga poses based on search
function filterYogaPoses(searchTerm) {
    return yogaPoses.filter(pose => 
        pose.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    const filteredPoses = filterYogaPoses(searchTerm);
    displayYogaPoses(filteredPoses);
});

// Initial display of all yoga poses
displayYogaPoses(yogaPoses);