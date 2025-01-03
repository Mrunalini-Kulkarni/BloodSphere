export type OrganizationType = 'hospital' | 'blood_bank' | 'donation_center';

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  address: string;
  contactEmail: string;
  contactPhone: string;
  licenseNumber: string;
  capacity: number;
  operatingHours: string;
}

export interface BloodInventory {
  id: string;
  organizationId: string;
  bloodType: string;
  quantity: number;
  expirationDate: string;
  status: 'available' | 'reserved' | 'expired';
  lastUpdated: string;
}