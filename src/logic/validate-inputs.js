export default function validateInputs (name, value, errors) {
  let error = ''

  if (name === 'firstname') {
    if (!value.trim()) {
      error = "Please enter your first name."
    }
  }

  if (name === 'lastname') {
    if (!value.trim()) {
      error = "Please enter your last name."
    }
  }

  if (name === 'email') {
    if (!value) {
      error = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      error = 'Please enter a valid email address.';
    }
  }

  if (name === 'displayname') {
    if (value.length < 4) {
      error = "Use at least 4 characters."
    }
  }

  if (name === 'password') {
    if (!value) {
      error = 'Please enter a password.';
    } else if (value.length < 6) {
      error = 'The password is too short.';
    } else if (!/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i.test(value)) {
      error = 'The password is too easily guessed.'
    }
  }

  return { ...errors, [name]: error }
}
