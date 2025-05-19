const regex = /^[a-zA-Z0-9\s_@.-]+$/;

const validateInput = (input) => {
  const isValid = regex.test(input);

  const dangerousPatterns = [
    /<script/i,
    /<\/script/i,
    /[<>"'`;]/,
    /[\x00-\x1F\x7F]/,
  ];
  const hasDangerous = dangerousPatterns.some((pattern) => pattern.test(input));

  if (isValid && !hasDangerous) {
    return true;
  } else {
    return false;
  }
};

module.exports = validateInput;
