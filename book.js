document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Handle form submission (e.g., send data to server)
    alert('Form submitted successfully!');
    this.reset();
});