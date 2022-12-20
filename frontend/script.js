console.log('Hello World');

const test = async () => {
  const res = await fetch('http://localhost:3000/employees');
  const data = await res.json();
  console.log(data);
};
test();
