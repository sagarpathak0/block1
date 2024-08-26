const hre = require("hardhat");
const {ethers} = require("hardhat");

async function main() {
  const Chai = await ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); 
  await chai.waitForDeployment();

  console.log("Deployed contract address: ",await chai.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
