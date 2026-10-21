/**
 * Contact Form Protocol Handler
 * Integrated with Web3Forms serverless dispatch directly to akbarali1582005@gmail.com
 */

export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  const submitBtn = document.getElementById('form-submit-btn');
  const statusMsg = document.getElementById('form-status-msg');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const originalBtnText = submitBtn.innerHTML;

    // Loading / Transmitting state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>SENDING MESSAGE... ⏳</span>';

    if (statusMsg) {
      statusMsg.className = 'form-status-msg transmitting';
      statusMsg.textContent = 'Transmitting message to Gmail...';
    }

    try {
      const formData = new FormData(contactForm);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        submitBtn.innerHTML = '<span>MESSAGE SENT ✓</span>';
        if (statusMsg) {
          statusMsg.className = 'form-status-msg success';
          statusMsg.innerHTML = '<strong>MESSAGE DELIVERED ✓</strong><br>Dispatched directly to akbarali1582005@gmail.com. You will receive a response within 12–24h.';
        }
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }, 7000);
      } else {
        throw new Error(data.message || 'Dispatch error from service');
      }
    } catch (err) {
      console.error('Contact Form Transmission Error:', err);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      if (statusMsg) {
        statusMsg.className = 'form-status-msg error';
        statusMsg.innerHTML = '<strong>TRANSMISSION FAILED</strong><br>Please contact directly via <a href="mailto:akbarali1582005@gmail.com" style="color: inherit; text-decoration: underline;">akbarali1582005@gmail.com</a> or WhatsApp (+92 317 7856049).';
      }
    }
  });
}
