import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import { HDNodeWallet, Wallet } from "ethers";

// const mnemonic = generateMnemonic();
// console.log("Generated Mnemonic:", mnemonic);
const mnemonic =
  "boy junior merry glove finger salad spot present reunion bridge expect melt";
const seed = mnemonicToSeedSync(mnemonic);
console.log("Seed: ", seed.toString("hex"));


// for (let i = 0; i < 4; i++) {
//   const path = `m/44'/501'/${i}'/0'`; // This is the derivation path
//   const derivedSeed = derivePath(path, seed.toString("hex")).key;
//   const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
//   console.log(`Public Key ${i+1} : `, Keypair.fromSecretKey(secret).publicKey.toBase58());
// }


// Eth

export function deriveEthereumWallet(
  seed: Buffer,
  derivationPath: string
): Wallet {
  const privateKey = deriveEthereumPrivateKey(seed, derivationPath);
  return new Wallet(privateKey);
}

export function deriveEthereumPrivateKey(
  seed: Buffer,
  derivationPath: string
): string {
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  return child.privateKey;
}



for (let i = 0; i < 4; i++) {
  const path = `m/44'/60'/${i}'/0'`; // This is the derivation path
  console.log(`Public Key ${i+1} : `, deriveEthereumWallet(seed, path).address);
}