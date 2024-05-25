export default function validate(values) {
  const { name, email, password, confirmPassword } = values;
  const errors = {};

  if (!name) {
    errors.name = "Please provide your Name";
  }
  if (!email) {
    errors.email = "Please provide your E-mail";
  }
  if (!password) {
    errors.password = "Please provide your Password";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your Password";
  }

  if (password !== confirmPassword) {
    errors.pnm = "Password does not match";
  }

  return errors;
}
