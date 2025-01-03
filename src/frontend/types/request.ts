export interface BloodRequest {
  id: string;
  requestingOrgId: string;
  bloodType: string;
  quantity: number;
  urgency: 'critical' | 'high' | 'normal';
  requiredBy: string;
  status: 'pending' | 'fulfilled' | 'cancelled';
  notes: string;
  createdAt: string;
}