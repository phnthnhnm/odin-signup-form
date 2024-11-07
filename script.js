document.addEventListener('DOMContentLoaded', () => {
  const phoneInput = document.getElementById('phone')
  const phoneError = document.createElement('div')
  phoneError.className = 'error-message'
  phoneInput.parentNode.appendChild(phoneError)

  phoneInput.addEventListener('input', () => {
    const phoneValue = phoneInput.value
    const phoneRegex = /^[0-9]*$/

    if (!phoneRegex.test(phoneValue)) {
      phoneError.textContent = '* Only numbers allowed'
      phoneInput.classList.add('invalid')
    } else {
      phoneError.textContent = ''
      phoneInput.classList.remove('invalid')
    }
  })
})
