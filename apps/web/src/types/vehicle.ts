import type { Make } from './make';

export interface Vehicle {
  id: number;
  licensePlate: string | null;
  name: string | null;
  vin: string | null;
  makeId: number | null;
  make: Make | null;
  createdAt: string;
  updatedAt: string;
}

export type VehicleCreate = Omit<Vehicle, 'id' | 'make' | 'createdAt' | 'updatedAt'>;
export type VehicleUpdate = Partial<VehicleCreate>;
