export enum UpgradeType {
  CLICK,
  AUTO,
}

export interface Upgrade {
  id: string;
  name: string;
  description: string;
  baseCost: number;
  level: number;
  type: UpgradeType;
  increment: number;
  icon: string;
}

export interface FloatingNumber {
  id: number;
  value: string;
  x: number;
  y: number;
}
