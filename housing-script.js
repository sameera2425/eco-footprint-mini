// Housing type options
const housingTypes = ['1RK', '1 BHK', '2 BHK', '3 BHK', '3BHK+'];

// Update housing type display
function updateHousingValue() {
    const slider = document.getElementById('housingSlider');
    const valueDisplay = document.getElementById('housing-value');
    
    const index = parseInt(slider.value);
    valueDisplay.textContent = housingTypes[index];
}

// Navigation functions
function previousQuestion() {
    window.location.href = 'index.html';
}

function nextQuestion() {
    window.location.href = 'household.html';
}

// Initialize slider
document.addEventListener('DOMContentLoaded', function() {
    const housingSlider = document.getElementById('housingSlider');
    
    // Set initial value
    updateHousingValue();
    
    // Add event listener
    housingSlider.addEventListener('input', updateHousingValue);
});
