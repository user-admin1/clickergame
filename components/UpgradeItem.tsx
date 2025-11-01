import React from 'react';
import { Upgrade } from '../types';

interface UpgradeItemProps {
    upgrade: Upgrade;
    onBuy: (id: string) => void;
    cookies: number;
}

const UpgradeItem: React.FC<UpgradeItemProps> = ({ upgrade, onBuy, cookies }) => {
    const cost = Math.floor(upgrade.baseCost * Math.pow(1.15, upgrade.level));
    const canAfford = cookies >= cost;

    return (
        <button
            onClick={() => onBuy(upgrade.id)}
            disabled={!canAfford}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left
                ${canAfford 
                    ? 'bg-slate-700 hover:bg-slate-600 cursor-pointer' 
                    : 'bg-slate-800 opacity-60 cursor-not-allowed'
                }`}
        >
            <div className="flex items-center space-x-4">
                <div className="text-3xl md:text-4xl p-2 bg-slate-800 rounded-md">{upgrade.icon}</div>
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{upgrade.name}</h3>
                    <p className="text-xs md:text-sm text-slate-300">{upgrade.description}</p>
                    <p className="text-sm md:text-base font-semibold text-amber-400">비용: {cost.toLocaleString()}</p>
                </div>
            </div>
            <div className="text-right">
                <span className="text-3xl md:text-4xl font-bold text-slate-400 block">{upgrade.level}</span>
            </div>
        </button>
    );
};

export default UpgradeItem;
