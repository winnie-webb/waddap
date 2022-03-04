import validator from "validator";

export const validateContact = (value) => {
  let error;

  if (!value) return (error = "Required*");
  const isEmail = validator.isEmail(value);
  const isPhone = validator.isMobilePhone(value);
  if (!isEmail && !isPhone)
    return (error = "Please enter a valid email or phone number*");

  return error;
};
export const validateName = (value) => {
  if (!value) return "Required*";
};

export const validatePassword = (value) => {
  let error;
  const isValidLength = validator.isLength(value, {
    min: 8,
    max: 20,
  });
  if (!isValidLength) {
    return (error = "Password must be between 8 and 20 characters long");
  }
  const hasLowerCase = RegExp("(?=.*[a-z])").test(value);
  if (!hasLowerCase) {
    return (error = "Password must contain at least 1 lowercase letter");
  }
  const hasUpperCase = RegExp("(?=.*[A-Z])").test(value);

  if (!hasUpperCase) {
    return (error = "Password must contain at least 1 uppercase");
  }

  const hasNumber = RegExp("(?=.*[0-9])").test(value);
  if (!hasNumber) return (error = "Password must contain at least 1 number");

  return error;
};
export const validateConfirmPassword = (password, value) => {
  let error;
  if (!value) return (error = "Required*");
  if (password && value) {
    if (password !== value) {
      error = "Password does not match please check";
    }
  }
  return error;
};

export const validateMonth = (value) => {
  let error;
  if (!value) return (error = "Required*");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const isValid = months.indexOf(value) >= 0;
  if (!isValid) {
    return (error = "Invalid Month");
  }
};

export const validateDay = (value) => {
  let error;
  if (!value) return (error = "Required*");

  const isValid = validator.isNumeric(value);
  if (!isValid) {
    return (error = "Invalid Day");
  }
};

export const validateYear = (value) => {
  let error;
  const yearInt = Number(value);
  const currentYear = new Date().getFullYear();
  if (!value) return (error = "Required*");
  const isValid =
    validator.isNumeric(value) && yearInt > 1900 && yearInt <= currentYear;
  if (!isValid) {
    return (error = "Invalid Year");
  }
};
