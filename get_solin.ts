async function run() {
  const res = await fetch('https://www.solindigital.com/shop/');
  const text = await res.text();
  console.log(text.substring(0, 1000));
}
run();
