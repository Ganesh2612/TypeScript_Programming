class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = "ValidationError";
      Object.setPrototypeOf(this, ValidationError.prototype);
    }
  }
  
  function validateAge(age: number) {
    if (age < 0 || age > 120) {
      throw new ValidationError("Invalid age value");
    }
    return true;
  }
  
  try {
    validateAge(-5);
  } catch (e) {
    if (e instanceof ValidationError) {
      console.log("Validation failed:", e.message);
    } else {
      console.log("Unknown error");
    }
  }