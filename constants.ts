import { Upgrade, UpgradeType } from './types';

export const INITIAL_UPGRADES: Upgrade[] = [
  { id: 'cursor', name: '강화된 커서', description: '클릭당 쿠키 획득량을 늘립니다.', baseCost: 15, level: 0, type: UpgradeType.CLICK, increment: 1, icon: '👆' },
  { id: 'grandma', name: '친절한 할머니', description: '초당 쿠키를 자동으로 굽습니다.', baseCost: 100, level: 0, type: UpgradeType.AUTO, increment: 1, icon: '👵' },
  { id: 'farm', name: '쿠키 농장', description: '쿠키 나무를 심어 쿠키를 수확합니다.', baseCost: 1100, level: 0, type: UpgradeType.AUTO, increment: 8, icon: '🚜' },
  { id: 'mine', name: '초코칩 광산', description: '땅속에서 초코칩을 캐냅니다.', baseCost: 12000, level: 0, type: UpgradeType.AUTO, increment: 47, icon: '⛏️' },
  { id: 'factory', name: '쿠키 공장', description: '쿠키를 대량으로 생산합니다.', baseCost: 130000, level: 0, type: UpgradeType.AUTO, increment: 260, icon: '🏭' },
  { id: 'bank', name: '쿠키 은행', description: '쿠키 이자로 쿠키를 불려줍니다.', baseCost: 1400000, level: 0, type: UpgradeType.AUTO, increment: 1400, icon: '🏦' },
  { id: 'temple', name: '쿠키 사원', description: '신성한 쿠키의 힘을 빌립니다.', baseCost: 20000000, level: 0, type: UpgradeType.AUTO, increment: 7800, icon: '🏯' },
];
