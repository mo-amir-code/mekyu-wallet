import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeed } from "bip39";
// import * as ed25519 from 'ed25519-hd-key';
import { HDKey } from "micro-ed25519-hdkey";
import { Keypair } from "@solana/web3.js";
import { HDNodeWallet, Wallet } from "ethers";

// COMMON
const deriveMnemonic = (): string => {
  const mnemonic = generateMnemonic();
  return mnemonic;
};

const deriveMnemonicToSeed = async (
  mnemonic: string
): Promise<Buffer<ArrayBuffer>> => {
  const seed = await mnemonicToSeed(mnemonic);
  return seed;
};

// SOLANA
const deriveSolanaPrivateKey = (
  seed: Buffer,
  walletNumber: number
): Uint8Array => {
  const derivationPath = `m/44'/501'/${walletNumber}'/0'`;
  const hd = HDKey.fromMasterSeed(seed.toString("hex"));
  // const derivedSeed = ed25519.derivePath(derivationPath, seed.toString("hex"));
  const derivedSeed = hd.derive(derivationPath);
  // console.log("DSeed: ", derivedSeed)
  const secret = Keypair.fromSeed(derivedSeed.privateKey).secretKey;
  return secret;
};

const deriveSolanaPublicKey = (secret: Uint8Array): string => {
  return Keypair.fromSecretKey(secret).publicKey.toBase58();
};

// ETHEREUM
const deriveEthereumWallet = (seed: Buffer, walletNumber: number): string => {
  const privateKey = deriveEthereumPrivateKey(seed, walletNumber);
  return new Wallet(privateKey).address;
};

const deriveEthereumPrivateKey = (
  seed: Buffer,
  walletNumber: number
): string => {
  const derivationPath = `m/44'/60'/${walletNumber}'/0'`;
  const hdNode = HDNodeWallet.fromSeed(seed);
  const child = hdNode.derivePath(derivationPath);
  return child.privateKey;
};

export {
  deriveEthereumPrivateKey,
  deriveEthereumWallet,
  deriveSolanaPrivateKey,
  deriveSolanaPublicKey,
  deriveMnemonic,
  deriveMnemonicToSeed,
};
