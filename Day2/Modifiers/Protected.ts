class Employee {
    protected department: string;
  
    constructor(department: string) {
      this.department = department;
    }
  }
  
  class Manager extends Employee {
    public getDepartment(): void {
      console.log(`Department: ${this.department}`); 
    }
  }
  
  const mgr = new Manager("Angular");
  mgr.getDepartment(); 