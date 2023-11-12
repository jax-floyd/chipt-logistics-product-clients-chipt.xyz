import React, { useState } from 'react';

const Button = ({ title, theme, height, simplicity, disabled, loading, success, failure, onClick }) => {

    const [hoverBorderClass, setHoverBorderClass] = useState('');
    const randomColor = () => {
        const colors = ['#F44E66', '#7646EC', '#0885EA', '#21D09C'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleHover = () => {
        setHoverBorderClass(randomColor());
    };

    const light = `flex flex-row items-center justify-between w-full border px-4 rounded-md ${height === 'tall' ? 'py-4' : 'pt-3 pb-2.5'} whitespace-pre text-sm font-regular transition-colors duration-400 ${disabled ? 'text-neutral-400' : 'text-primary-400'} bg-white ${success ? 'border border-sky-500' : failure ? 'border border-red-500' : ''}`;
    const dark = `flex flex-row items-center justify-between w-full border px-4 rounded-md ${height === 'tall' ? 'py-4' : 'pt-3 pb-2.5'} whitespace-pre text-white text-sm font-regular transition-colors duration-400 ${disabled ? 'bg-neutral-500 border-neutral-500' : 'bg-primary-400 border-primary-400 hover:bg-neutral-800 hover:border-neutral-800'}`;
    
    const buttonStyle = theme === 'light' ? { borderColor: hoverBorderClass, color: hoverBorderClass } : { backgroundColor: hoverBorderClass, borderColor: hoverBorderClass };

    return (
        <button
            disabled={disabled}
            onMouseEnter={simplicity !== 'simple' ? handleHover : undefined}
            onMouseLeave={simplicity !== 'simple' ? () => setHoverBorderClass('') : undefined}
            className={theme === 'light' ? light : dark}
            style={simplicity !== 'simple' ? buttonStyle : undefined}
            onClick={onClick}
        >
            {loading ? (
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="currentColor" className="w-5 h-5 animate-spin">
                    <circle className="opacity-25" cx="12" cy="12" />
                    <path className="opacity-100" fill={theme === 'light' ? '#FFFFFF' : '#09090B'} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
            ) : (
                <p>{title}</p>
            )}
        </button>
    );
};

export default Button;