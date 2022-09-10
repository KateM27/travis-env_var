const FAVORITE_CLOUD = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_CLOUD} rocks!`);
    await sleep(5000);
  }
}

main();
