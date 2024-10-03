export default function createEmplyeeObject(departmentName, employees) {
  return `${departmentName}: ${...employees}`
}
