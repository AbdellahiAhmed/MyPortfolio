interface SpacedTextProps {
  text: string;
  className?: string;
}

const SpacedText = ({ text, className = '' }: SpacedTextProps) => {
  return (
    <span className={`uppercase tracking-spaced ${className}`}>
      {text}
    </span>
  );
};

export default SpacedText;
