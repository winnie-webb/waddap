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
