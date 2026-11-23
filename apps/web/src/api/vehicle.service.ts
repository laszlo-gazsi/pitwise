import type { Vehicle, VehicleCreate } from '@/types/vehicle';
import { api } from './client';

export const getVehicles = () => api.get<Vehicle[]>(`/api/vehicles`);
export const createVehicle = (data: VehicleCreate) => api.post<Vehicle>(`/api/vehicles`, data);
