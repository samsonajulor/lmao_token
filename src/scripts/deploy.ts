import { ethers } from "hardhat";

async function main() {
  const lock = await ethers.deployContract('Lock', []);

  await lock.waitForDeployment();

  console.log(`Lock deployed to ${lock.target}`);

  // this is a log event
  const tx = await lock.createMultisig();
  // log event
  // @ts-ignore
  const receipt = await(await tx.wait())?.logs[0]?.args[0];
  console.log(receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
