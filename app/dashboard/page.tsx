import KaliTerminal from '../../../components/KaliTerminal';
import { UserButton } from '@clerk/nextjs';
import { Wallet } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-6">
      <header className="flex justify-between items-center mb-10 border-b border-green-500 pb-6">
        <h1 className="text-4xl font-bold">KALI SIMULATOR</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 border border-green-500 px-6 py-3">
            <Wallet size={20} />
            <span>2.45 BTC</span>
          </div>
          <UserButton />
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <KaliTerminal />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="border border-green-500 p-6">
            <h2 className="text-xl mb-4">Wallet</h2>
            <button className="w-full py-3 border border-green-500 hover:bg-green-900">Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
}
