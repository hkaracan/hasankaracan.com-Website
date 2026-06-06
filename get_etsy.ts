const ids = [
  "1496178408", "1609514028", "1586487997", "1532106391", 
  "1245191725", "1655302162", "1515304153", "1733564616", "1684516107"
];

async function run() {
  for (const id of ids) {
    try {
      const res = await fetch(`https://www.etsy.com/listing/${id}`);
      const text = await res.text();
      const titleMatch = text.match(/<title>([^<]+)<\/title>/);
      const imgMatch = text.match(/<meta property="og:image" content="([^"]+)"/);
      console.log(`ID: ${id}`);
      if (titleMatch) console.log(`TITLE: ${titleMatch[1].replace(' - Etsy', '')}`);
      if (imgMatch) console.log(`IMAGE: ${imgMatch[1]}`);
      console.log('---');
    } catch(e) {
      console.log(`Error for ${id}`);
    }
  }
}
run();
