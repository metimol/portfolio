// utils/textUtils.tsx
import React from 'react';

export const splitText = (text: string): JSX.Element[] => {
    return text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            {word.split('').map((char, charIndex) => (
                <span key={`${wordIndex}-${charIndex}`} style={{ display: 'inline-block', overflow: 'hidden' }}>
                    {char}
                </span>
            ))}
            <span>&nbsp;</span> {/* Added non-breaking space */}
        </span>
    ));
};
