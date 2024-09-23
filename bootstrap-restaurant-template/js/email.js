// Initialize EmailJS with your User ID
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your actual User ID
})();

// Function to handle form submission
function handleFormSubmit(event, formId, templateId) {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = document.getElementById(formId); // Get the form element by its ID
  const formData = new FormData(form); // Create a FormData object from the form element

  emailjs.sendForm("YOUR_SERVICE_ID", templateId, formData).then(
    (response) => {
      console.log("Sent successfully:", response); // Log success message
      alert("Your message has been sent successfully!"); // Show success alert
      form.reset(); // Reset the form fields
    },
    (error) => {
      console.error("Failed to send:", error); // Log error message
      alert("An error occurred. Please try again."); // Show error alert
    }
  );
}

// Add event listeners for form submissions
document.addEventListener("DOMContentLoaded", () => {
  // Booking Form
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
      handleFormSubmit(event, "bookingForm", "booking_template"); // Replace 'booking_template' with your Booking Template ID
    });
  }

  // Reservation Form
  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
      handleFormSubmit(event, "reservationForm", "reservation_template"); // Replace 'reservation_template' with your Reservation Template ID
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      handleFormSubmit(event, "contactForm", "contact_template"); // Replace 'contact_template' with your Contact Template ID
    });
  }
});
