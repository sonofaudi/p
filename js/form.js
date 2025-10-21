const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {
  e.preventDefault();
  resetErrors();

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  let ok = true;

  if (!name)    { showError('name',    'Name is required');            ok = false; }
  if (!subject) { showError('subject', 'Subject is required');         ok = false; }
  if (!message || message.length < 10)
               { showError('message', 'Message must be ≥ 10 chars');   ok = false; }
  if (!isEmail(email))
               { showError('email',   'Enter a valid email');          ok = false; }

  if (ok) {
    document.getElementById('successMsg').textContent = 'Thanks! Your message has been sent.';
    form.reset();
  }
});

function isEmail(em) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
}
function showError(field, msg) {
  const span = document.getElementById('err' + field[0].toUpperCase() + field.slice(1));
  span.textContent = msg;
}
function resetErrors() {
  document.querySelectorAll('.error').forEach(e => e.textContent = '');
  document.getElementById('successMsg').textContent = '';
}