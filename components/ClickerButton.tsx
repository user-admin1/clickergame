import React from 'react';

interface ClickerButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    cookies: number;
    cps: number;
}

const ClickerButton: React.FC<ClickerButtonProps> = ({ onClick, cookies, cps }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-400 break-all px-2">
                {Math.floor(cookies).toLocaleString()}
            </h2>
            <p className="text-lg md:text-xl text-amber-200">초당 쿠키: {cps.toLocaleString()}</p>
            <button
                onClick={onClick}
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-transparent rounded-full transition-transform duration-100 active:scale-95 focus:outline-none group"
                aria-label="쿠키 클릭"
            >
                <span className="text-[120px] sm:text-[150px] md:text-[200px] drop-shadow-lg group-hover:scale-105 transition-transform" role="img" aria-label="cookie">🍪</span>
            </button>
        </div>
    );
};

export default ClickerButton;
