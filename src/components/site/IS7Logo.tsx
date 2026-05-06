import logoImg from "@/assets/is7-logo.png";

export const IS7Logo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "large" | "small" }) => {
  const sizeClasses = {
    small: "h-8",
    default: "h-10",
    large: "h-16",
  };

  return (
    <img
      src={logoImg}
      alt="IS7 Marketing Logo"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  );
};

export default IS7Logo;
