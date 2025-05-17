document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const msgEl = document.getElementById('form-message');
  const form = e.target;

  // Simple validation
  if (!form.name.value || !form.email.value || !form.phone.value ||
      !form.address.value || !form.date.value || !form.time.value) {
    msgEl.textContent = 'Please fill out all fields.';
    msgEl.style.color = 'red';
    return;
  }

  // Simulate success (here you’d hook into your email/API)
  msgEl.textContent = 'Thanks! Your appointment request has been sent.';
  msgEl.style.color = 'green';
  form.reset();
});
