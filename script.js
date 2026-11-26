const words = ["https:", "", "api.school.com", "v1", "students"];

const sentence = words.reduce((acc, el) => {
  let temp = acc + el + "/";
  console.log(temp);
  return temp;
}, "");

console.log(sentence.trim());
