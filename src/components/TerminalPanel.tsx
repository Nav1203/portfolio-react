import React from 'react';

type TerminalPanelProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
};

const TerminalPanel: React.FC<TerminalPanelProps> = ({
  title,
  children,
  className = '',
  bodyClassName = '',
}) => {
  return (
    <div
      className={`overflow-hidden rounded border border-cyan-400/10 bg-slate-950/45 shadow-lg shadow-black/10 ring-1 ring-white/[0.03] transition-colors duration-300 hover:border-cyan-300/20 ${className}`}
    >
      <div className="flex h-7 items-center border-b border-cyan-400/[0.07] bg-white/[0.02] px-4">
        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-cyan-300/60" />
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          {title}
        </div>
      </div>
      <div className={`relative p-6 ${bodyClassName}`}>
        <div className="pointer-events-none absolute left-0 top-0 h-px w-10 bg-cyan-300/30" />
        {children}
      </div>
    </div>
  );
};

export default TerminalPanel;
