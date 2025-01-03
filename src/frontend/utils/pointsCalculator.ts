interface PointsRule {
  minAmount: number;
  points: number;
}

const pointsRules: PointsRule[] = [
  { minAmount: 450, points: 50 },  // Standard donation
  { minAmount: 350, points: 35 },  // Medium donation
  { minAmount: 200, points: 20 },  // Minimum donation
];

export const calculatePoints = (amount: number): number => {
  const rule = pointsRules.find(rule => amount >= rule.minAmount);
  return rule ? rule.points : 0;
};