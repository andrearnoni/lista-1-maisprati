for (let i = 0, a = 0, b = 1; i < 10; i++) {
  const c = a + b;
  console.log(a);
  a = b;
  b = c;
}
