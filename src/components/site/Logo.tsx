import { useState, useCallback } from 'react';
import { LogoProcessor } from './LogoProcessor';

export const Logo = ({ className = "" }: { className?: string }) => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const originalUrl = "/lovable-uploads/fa18acf9-520e-41f7-92bb-955f3eb9e5a4.png";

  const handleProcessed = useCallback((url: string) => {
    setProcessedLogoUrl(url);
  }, []);

  return (
    <div className={`${className} flex items-center gap-3`} aria-label="IS7 Marketing Logo">
      {!processedLogoUrl && (
        <LogoProcessor 
          originalUrl={originalUrl}
          onProcessed={handleProcessed}
        />
      )}
      <img 
        src={processedLogoUrl || originalUrl}
        alt="IS7 Marketing Logo" 
        className="h-10 w-auto"
        style={{ display: processedLogoUrl ? 'block' : 'none' }}
      />
      <div className="flex flex-col">
        <div className="text-sm text-muted-foreground">Sites e Landing Pages Profissionais</div>
      </div>
    </div>
  );
};

export default Logo;