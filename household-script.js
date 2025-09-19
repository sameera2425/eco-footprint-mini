// Update household size display
function updateHouseholdValue() {
    const slider = document.getElementById('householdSlider');
    const valueDisplay = document.getElementById('household-value');
    
    const value = parseInt(slider.value);
    
    if (value === 10) {
        valueDisplay.textContent = '10+ people';
    } else if (value === 1) {
        valueDisplay.textContent = '1 person';
    } else {
        valueDisplay.textContent = `${value} people`;
    }
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'housing.html';
}

function nextQuestion() {
    window.location.href = 'solar.html';
}

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    const householdSlider = document.getElementById('householdSlider');
    
    // Set initial value
    updateHouseholdValue();
    
    // Add event listener
    householdSlider.addEventListener('input', updateHouseholdValue);
});
