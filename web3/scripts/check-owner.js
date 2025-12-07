const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  console.log("📋 Contract Information:");
  console.log("Contract Address:", contractAddress);
  
  const HealthInsuranceDApp = await ethers.getContractFactory("HealthInsuranceDApp");
  const contract = HealthInsuranceDApp.attach(contractAddress);
  
  const owner = await contract.owner();
  console.log("Contract Owner:", owner);
  
  const [deployer] = await ethers.getSigners();
  console.log("Current Account:", deployer.address);
  console.log("Is Owner?", owner.toLowerCase() === deployer.address.toLowerCase());
  
  console.log("\n🔑 Hardhat Account #0 (Owner):");
  console.log("Address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
  console.log("Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80");
  
  console.log("\n💡 To access admin features:");
  console.log("1. Import this private key into MetaMask");
  console.log("2. Or use one of the other Hardhat test accounts");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
