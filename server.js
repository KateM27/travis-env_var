const FAVORITE_CLOUD_PROVIDER = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVORITE_CLOUD_PROVIDER} rocks!`);
    await sleep(5000);
  }
}

main();
