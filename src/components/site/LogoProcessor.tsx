import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/lib/background-removal';

export const LogoProcessor = ({ 
  originalUrl, 
  onProcessed 
}: { 
  originalUrl: string;
  onProcessed: (processedUrl: string) => void;
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        console.log('Loading image from URL:', originalUrl);
        
        // Load the image
        const img = await loadImageFromUrl(originalUrl);
        console.log('Image loaded successfully');
        
        // Remove background
        const processedBlob = await removeBackground(img);
        console.log('Background removed successfully');
        
        // Create URL for the processed image
        const processedUrl = URL.createObjectURL(processedBlob);
        onProcessed(processedUrl);
        
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fall back to original image if processing fails
        onProcessed(originalUrl);
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();
  }, [originalUrl, onProcessed]);

  if (isProcessing) {
    return (
      <div className="h-10 w-10 bg-muted animate-pulse rounded" />
    );
  }

  return null;
};