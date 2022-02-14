// Write your solution in this file!

const employee = {
    name: 'Frank',
    streetAddress: 'Section 7'
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updated = {...employee}
    updated[key] = value;
    return updated
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const clone = Object.assign({}, employee);
    delete clone[key];
    return clone
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const original = {...employee}
    delete employee[key]
    return employee;
}