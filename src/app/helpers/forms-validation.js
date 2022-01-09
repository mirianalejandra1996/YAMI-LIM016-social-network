export function validate_email(email) {
    const expression = /^([\.\_a-zA-Z0-9]+)@([a-zA-A]+)\.([a-zA-Z]){2,8}/;
  
    return expression.test(email);
  }
  
  export function validate_password(password) {
    // La contraseña debe tener entre 8 a 14 caracteres
  
    const expression = /^.{6,14}$/;
  
    // si hace match
    if (!expression.test(password)) {
      console.log("contraseña fallida");
      // console.log("contraseña buena");
    }
    return expression.test(password);
  }
  
  export function validate_field(field) {
    // const expression = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  
    // if (!expression.test(field) == true){
    //   return false
    // }
  
    if (field.length <= 0 || field == null) {
      console.log("field", field, "malo");
      return false;
    } else {
      return true;
    }
  }