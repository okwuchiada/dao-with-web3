import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xF2b5aC7534CfBC0d4F20517CE8286CE0C0c46C1D",
);

(async() => {
    try {
        await bundleDrop.createBatch([{
            name: "Party Ticket",
            description: "This NFT will give you access to JuicyDAO!",
            image: readFileSync("scripts/assets/introvert-virtual.png"),
        }, ]);
        console.log("✅ Successfully created a new NFT in the drop!", bundleDrop.address);
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()