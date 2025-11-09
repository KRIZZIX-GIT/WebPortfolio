import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string
  speed?: number
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState<string>('')

  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const type = () => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index))
        index++
        const timeoutId = setTimeout(type, speed)
        return timeoutId
      }
    };

    const timeoutId = setTimeout(type, speed)

    return () => clearTimeout(timeoutId)
  }, [text, speed])

  return <span>{displayedText}</span>
};

export default TypingEffect