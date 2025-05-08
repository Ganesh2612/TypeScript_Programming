function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  try {
      console.log("Will work on it!");
    const result = divide(10, 0);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", (error as Error).message);
  } finally {
    console.log("Cleanup done");
  }