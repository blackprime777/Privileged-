import Link from 'next/link';
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center border-2 border-green-500 p-12 max-w-md">
        <h1 className="text-6xl font-bold mb-2">KALI</h1>
        <p className="text-2xl mb-8">WEB TERMINAL SIMULATOR</p>
        <p className="mb-8 text-green-400">127.0.0.1 • Login • Wallet • Exploits</p>
        
        <SignInButton mode="modal">
          <button className="border-2 border-green-500 hover:bg-green-900 px-12 py-4 text-xl font-bold">
            ENTER THE MATRIX
          </button>
        </SignInButton>
      </div>
    </div>
  );
}
