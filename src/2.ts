/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.                                       ///////////// для цього є public
  властивість department, яка буде доступна лише всередині класу Employee.       /////////////  для цього є private
  salary, яке буде доступне лише всередині класу Employee та його підкласів.    /////////////   для цього є protected 


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  // Заповніть модифікатори доступу
//  public name: string;  ------------------------// Це тепер не обов`язково
//  private department: string;
//  protected salary: number;

  constructor(public name: string, private department: string, protected salary: number) {
    // this.name = name;    ------------------------//  Це тепер не обов`язково
    // this.department = department;
    // this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Реалізуйте конструктор та збільшіть salary на 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
}}


export {};