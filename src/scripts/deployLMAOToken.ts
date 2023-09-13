import { ethers } from "hardhat";

/**
 * contract is deployed to the sepolia network at:
 * 0xB35B264b08322cc8A037762f778E5E4e2d3c1C2e
 */
async function main() {
  const LMAOToken = await ethers.deployContract('LMAOToken', []);

  await LMAOToken.waitForDeployment();

  console.log(`Lock deployed to ${LMAOToken.target}`);

  // this is a log event
  // const tx = await LMAOToken.createMultisig();
  // log event
  // @ts-ignore
  // const receipt = await(await tx.wait())?.logs[0]?.args[0];
  // console.log(receipt);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
