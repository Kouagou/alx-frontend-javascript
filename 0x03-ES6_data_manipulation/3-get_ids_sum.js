export default function getStudentIdsSum(array) {
  return array.map((student) => student.id).reduce((accu, currValue) => accu + currValue, 0);
}
