let uniqueId = 0;



function Employee(name, department) {
    this.id = ++uniqueId,
    this.name = name,
    this.department = department
}

const company = {
    name: 'TechCorp',
    location: 'San Francisco',
    employees: [new Employee('Alice', 'Engineering'), new Employee('LocalDevv', 'HR'), new Employee('Bob', 'Marketing'), new Employee('Charlie', 'Engineering')]
}

console.log(company.employees[1].name)
const { name, location } = company;

for (const emp of company.employees) {
    console.log(`Employee Name: ${emp.name}`);
    console.log(`Employee Department: ${emp.department}`);
}


module.exports = Employee;