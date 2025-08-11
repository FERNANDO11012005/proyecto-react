// validateForm.js
export function validateForm(values) {
  const errors = {};
  if (!values.name) errors.name = "El nombre es obligatorio";
  if (!values.email) errors.email = "El correo es obligatorio";
  return errors;
}
