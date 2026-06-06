async function run() {
  const ids = [
    "1496178408", "1609514028", "1586487997", "1532106391", 
    "1245191725", "1655302162", "1515304153", "1733564616", "1684516107"
  ];
  for (const id of ids) {
    const res = await fetch(`https://www.etsy.com/oembed?url=https://www.etsy.com/listing/${id}`);
    if (res.ok) {
      const data = await res.json();
      console.log(`ID: ${id}`);
      console.log(`TITLE: ${data.title}`);
      console.log(`IMAGE: ${data.thumbnail_url}`);
      console.log('---');
    } else {
      console.log(`FAILED ID: ${id}`);
    }
  }
}
run();
