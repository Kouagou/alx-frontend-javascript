export default function createEmplyeeObject(departmentName, employees) {
  const emp = {
    [departmentName]: [
      ...employees,
    ],
  };
  return emp;
}
