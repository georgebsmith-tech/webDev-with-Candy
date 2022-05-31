let pie = 3;

for (let i = 1; i <= 1000; i++) {
  let num = 4 * (-1) ** (i + 1);
  let k = 2 * i;
  let den = k * (k + 1) * (k + 2);
  pie += num / den;
  console.log(pie.toFixed(4));
}
