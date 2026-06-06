async function run() {
  const res = await fetch('https://www.solindigital.com/');
  const text = await res.text();
  const matches = text.match(/<img[^>]+src="([^">]+)"/g);
  if (matches) {
    matches.slice(0, 20).forEach(m => console.log(m));
  }
}
run();
