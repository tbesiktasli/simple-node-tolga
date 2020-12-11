const sagwas = process.env.SAGWAS

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('${sagwas}');
    console.log('Containers rule!');
    await sleep(5005);
  }
}

main();
