export function validate_email(email) {
  const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;

  return expression.test(email);
}

export function validate_password(password) {
  // La contraseña debe tener entre 8 a 14 caracteres

  const expression = /^.{6,14}$/;

  if (!password) {
    return false;
  }

  return typeof str === "string"
    ? expression.test(password.trim())
    : expression.test("" + password);

}

export function validate_field(field) {
  if (typeof field !== "string") {
    return false;
  }
  if (field.trim().length <= 0) {
    return false;
  }

  return true;
}

export const timeSince = (date) => {
  var seconds = Math.floor((new Date() - date) / 1000);

  // Intervalo de años
  var interval = seconds / 31536000;
  if (interval > 1) {
    let years = Math.floor(interval);
    if (years === 1) return `Hace ${years} mes`;
    return `Hace ${years} años`;
  }

  // Intervalo de meses
  interval = seconds / 2592000;
  if (interval > 1) {
    let months = Math.floor(interval);
    if (months === 1) return `Hace ${months} mes`;
    return `Hace ${months} meses`;
  }

  // Intervalo de días
  interval = seconds / 86400;
  if (interval > 1) {
    let days = Math.floor(interval);
    if (days === 1) return `Hace ${days} hora`;
    return `Hace ${days} días`;
  }

  // Intervalo de horas
  interval = seconds / 3600;
  if (interval > 1) {
    let hours = Math.floor(interval);
    if (hours === 1) return `Hace ${hours} hora`;
    return `Hace ${hours} horas`;
  }

  // Intervalo de minutos
  interval = seconds / 60;
  if (interval > 1) {
    let minutes = Math.floor(interval);
    if (minutes === 1) return `Hace ${minutes} minuto`;
    return `Hace ${minutes} minutos`;
  }
  return `Hace segundos`;
};
