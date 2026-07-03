'use client';
import { useEffect, useRef } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';

const payloads = [
  { name: "windows/meterpreter/reverse_tcp", desc: "Windows Reverse Shell" },
  { name: "android/meterpreter/reverse_tcp", desc: "Android Meterpreter" },
  { name: "linux/x64/shell/reverse_tcp", desc: "Linux Reverse Shell" },
  // Add more here later
];

export default function KaliTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useRef<Terminal | null>(null);

  useEffect(() => {
    if (!terminalRef.current) return;

    const t = new Terminal({
      theme: { background: '#000000', foreground: '#00ff41', cursor: '#00ff41' },
      fontFamily: 'Courier New',
      cursorBlink: true,
      cols: 80,
    });

    const fitAddon = new FitAddon();
    t.loadAddon(fitAddon);
    t.open(terminalRef.current);
    fitAddon.fit();

    term.current = t;

    t.writeln('┌──────────────────────────────────────┐');
    t.writeln('│     Kali Linux Web Simulator 2026    │');
    t.writeln('│           IP: 127.0.0.1              │');
    t.writeln('└──────────────────────────────────────┘\n');
    t.write('kali@sim:~$ ');

    t.onData((data) => {
      const cmd = data.trim().toLowerCase();
      t.write(data);

      if (cmd === '') return;

      setTimeout(() => {
        t.writeln('');

        if (cmd === 'help' || cmd === '?') {
          t.writeln('help, whoami, ip, nmap, payloads, use <name>, withdraw <amount>, clear');
        } else if (cmd === 'whoami') {
          t.writeln('root');
        } else if (cmd === 'ip' || cmd === 'ifconfig') {
          t.writeln('eth0: 127.0.0.1');
        } else if (cmd.startsWith('nmap')) {
          t.writeln('Nmap scan report for 127.0.0.1');
          t.writeln('PORT     STATE SERVICE');
          t.writeln('22/tcp   open  ssh');
          t.writeln('80/tcp   open  http');
          t.writeln('Nmap done.');
        } else if (cmd === 'payloads') {
          payloads.forEach(p => t.writeln(`→ ${p.name} : ${p.desc}`));
        } else if (cmd.startsWith('use ')) {
          t.writeln(`[*] Executing ${cmd.slice(4)}...`);
          setTimeout(() => t.writeln('[+] Exploit successful! Shell opened.'), 800);
        } else if (cmd.startsWith('withdraw')) {
          t.writeln('[+] Withdrawal processed (simulated)');
        } else if (cmd === 'clear') {
          t.clear();
        } else {
          t.writeln(`Command received: ${cmd}`);
        }

        t.write('kali@sim:~$ ');
      }, 100);
    });
  }, []);

  return <div ref={terminalRef} className="terminal h-[500px] p-2" />;
}
