// Function to check if the appointment date is in the future
function isFutureDate(dateString) {
  const selectedDate = new Date(dateString);
  const currentDate = new Date();
  return selectedDate >= currentDate;
}

// Function to show error message
function showError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
}

// Function to hide error message
function hideError() {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dayOfWeek = document.getElementById('dayOfWeek').value;
  const appointmentDate = document.getElementById('appointmentDate').value;
  const appointmentTime = document.getElementById('appointmentTime').value;
  const preferredBranch = document.getElementById('preferredBranch').value;

  // Custom validation for phone number
  if (phone.length !== 10) {
    showError('Please enter a 10-digit phone number.');
    return;
  }

  // Custom validation for email
  if (!email.includes('@')) {
    showError('Please enter a valid email address.');
    return;
  }

  // Additional validation for appointment date and time
  if (!isFutureDate(appointmentDate)) {
    showError('Please choose a date in the future.');
    return;
  }

  if (appointmentTime === '') {
    showError('Please choose an appointment time.');
    return;
  }

  // Clear any previous error message
  hideError();

  // Show success message
  const successMessageDiv = document.getElementById('successMessage');
  successMessageDiv.textContent = 'Appointment booked successfully.';

  // Clear the success message after 10 seconds
  setTimeout(() => {
    successMessageDiv.textContent = '';
  }, 10000); // 10 seconds (10000 milliseconds)
}

// Add event listener to the form for form submission
const appointmentForm = document.getElementById('appointmentForm');
appointmentForm.addEventListener('submit', handleSubmit);

// Function to show inquiry error message
function showInquiryError(message) {
  const inquiryErrorDiv = document.getElementById('inquiryError');
  inquiryErrorDiv.textContent = message;
}

// Function to hide inquiry error message
function hideInquiryError() {
  const inquiryErrorDiv = document.getElementById('inquiryError');
  inquiryErrorDiv.textContent = '';
}

// Function to handle inquiry form submission
function handleInquirySubmit(event) {
  event.preventDefault();
  const inquiryName = document.getElementById('inquiryName').value;
  const inquiryEmail = document.getElementById('inquiryEmail').value;
  const inquiryMessage = document.getElementById('inquiryMessage').value;

  // Custom validation for email
  if (!inquiryEmail.includes('@')) {
    showInquiryError('Please enter a valid email address.');
    return;
  }

  // Clear any previous error message
  hideInquiryError();

  // Show success message
  const inquirySuccessMessageDiv = document.getElementById('inquirySuccessMessage');
  inquirySuccessMessageDiv.textContent = 'Inquiry sent successfully.';

  // Clear the success message after 10 seconds
  setTimeout(() => {
    inquirySuccessMessageDiv.textContent = '';
  }, 10000); // 10 seconds (10000 milliseconds)
}

// Add event listener to the inquiry form for form submission
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm.addEventListener('submit', handleInquirySubmit);

// Function to handle navigation links
function handleNavigation(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  const activeSection = document.querySelector('.page.active');

  if (activeSection) {
    activeSection.classList.remove('active');
  }

  targetSection.classList.add('active');
  window.location.hash = targetId; // Update the URL hash to match the target section
}

// Event listener for navigation links
document.querySelectorAll('nav li a').forEach((link) => {
  link.addEventListener('click', handleNavigation);
});

// Check for a hash in the URL on page load
window.addEventListener('load', function() {
  const targetId = window.location.hash.substring(1);
  const targetSection = document.getElementById(targetId);

  const homeSection = document.getElementById('home');
  homeSection.classList.add('active');

  if (targetSection) {
    const activeSection = document.querySelector('.page.active');
    if (activeSection) {
      activeSection.classList.remove('active');
    }
    targetSection.classList.add('active');
  }
});