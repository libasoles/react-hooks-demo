function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export { validateEmail };
