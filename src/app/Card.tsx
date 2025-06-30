import React, { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Check, Copy as CopyIcon } from "lucide-react";

interface CardProps {
  title: string;
  icon: React.ReactNode;
  onCopy?: () => void;
  copyLabel?: string;
  copyCommand?: string;
  children: React.ReactNode;
}

export function Card({ title, icon, onCopy, copyLabel, copyCommand, children }: CardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copyCommand) {
      await navigator.clipboard.writeText(copyCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
    if (onCopy) onCopy();
  };

  return (
    <div className="border border-border rounded-lg bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </div>
        {copyCommand && (
          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 p-1 rounded hover:bg-accent transition-colors"
                  aria-label={copyLabel || "Copy install command"}
                  type="button"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <CopyIcon className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="top"
                align="end"
                className="z-50 px-3 py-2 text-xs text-popover-foreground bg-popover rounded shadow-lg select-none"
              >
                {copyCommand}
                <Tooltip.Arrow className="fill-popover" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}