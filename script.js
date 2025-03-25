document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Show loading spinner
  document.getElementById('loadingSpinner').classList.remove('hidden');
  
  // Get form values
  const formData = {
    name: document.getElementById('name').value,
    from: document.getElementById('from').value,
    profession: document.getElementById('profession').value,
    dob: document.getElementById('dob').value,
    food: document.getElementById('food').value
  };
  
  // Send email using EmailJS
  emailjs.send('service_1yav04r', 'template_a80li4z', formData)
    .then(function(response) {
      console.log('Email sent!', response.status, response.text);
      
      // Hide form and loading spinner
      document.getElementById('feedbackForm').classList.add('hidden');
      document.getElementById('loadingSpinner').classList.add('hidden');
      
      // Show thank you message
      document.getElementById('thankYouMessage').classList.remove('hidden');
    })
    .catch(function(error) {
      console.error('Email failed to send:', error);
      alert('Failed to send your feedback. Please try again.');
      document.getElementById('loadingSpinner').classList.add('hidden');
    });
});