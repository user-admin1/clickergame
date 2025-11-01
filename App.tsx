import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Upgrade, UpgradeType, FloatingNumber as FloatingNumberType } from './types';
import { INITIAL_UPGRADES } from './constants';
import ClickerButton from './components/ClickerButton';
import UpgradeItem from './components/UpgradeItem';
import FloatingNumber from './components/FloatingNumber';

const App: React.FC = () => {
    const [cookies, setCookies] = useState<number>(0);
    const [upgrades, setUpgrades] = useState<Upgrade[]>(INITIAL_UPGRADES);
    const [floatingNumbers, setFloatingNumbers] = useState<FloatingNumberType[]>([]);

    const cookiesPerClick = useMemo(() => {
        return upgrades
            .filter(u => u.type === UpgradeType.CLICK)
            .reduce((total, u) => total + u.level * u.increment, 1);
    }, [upgrades]);

    const cookiesPerSecond = useMemo(() => {
        return upgrades
            .filter(u => u.type === UpgradeType.AUTO)
            .reduce((total, u) => total + u.level * u.increment, 0);
    }, [upgrades]);

    useEffect(() => {
        if (cookiesPerSecond === 0) return;
        const interval = setInterval(() => {
            setCookies(prevCookies => prevCookies + cookiesPerSecond);
        }, 1000);

        return () => clearInterval(interval);
    }, [cookiesPerSecond]);
    
    const handleCookieClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        setCookies(prev => prev + cookiesPerClick);

        const newFloatingNumber: FloatingNumberType = {
            id: Date.now() + Math.random(),
            value: `+${cookiesPerClick.toLocaleString()}`,
            x: e.clientX,
            y: e.clientY,
        };
        setFloatingNumbers(current => [...current, newFloatingNumber]);

        setTimeout(() => {
            setFloatingNumbers(current => current.filter(n => n.id !== newFloatingNumber.id));
        }, 2000);
    }, [cookiesPerClick]);

    const handleBuyUpgrade = useCallback((upgradeId: string) => {
        const upgrade = upgrades.find(u => u.id === upgradeId);
        if (!upgrade) return;

        const cost = Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.level));

        if (cookies >= cost) {
            setCookies(prevCookies => prevCookies - cost);
            setUpgrades(prevUpgrades =>
                prevUpgrades.map(u =>
                    u.id === upgradeId ? { ...u, level: u.level + 1 } : u
                )
            );
        }
    }, [cookies, upgrades]);

    return (
        <div className="h-screen text-white flex flex-col md:flex-row font-sans">
            {floatingNumbers.map(num => (
                <FloatingNumber key={num.id} value={num.value} x={num.x} y={num.y} />
            ))}
            
            {/* Left Panel: Clicker */}
            <div className="w-full md:w-2/5 lg:w-1/3 bg-slate-800 flex flex-col items-center justify-center p-8 space-y-8 order-2 md:order-1">
                <ClickerButton
                    onClick={handleCookieClick}
                    cookies={cookies}
                    cps={cookiesPerSecond}
                />
            </div>

            {/* Right Panel: Upgrades Store */}
            <div className="w-full md:w-3/5 lg:w-2/3 bg-slate-900 p-4 md:p-8 overflow-y-auto order-1 md:order-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-amber-300 tracking-wider">업그레이드 상점</h1>
                <div className="space-y-3 max-w-3xl mx-auto">
                    {upgrades.map(upgrade => (
                        <UpgradeItem
                            key={upgrade.id}
                            upgrade={upgrade}
                            onBuy={handleBuyUpgrade}
                            cookies={cookies}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
