import type { Make, MakeCreate } from '@/types/make';
import { api } from './client';

export const getMakes = () => api.get<Make[]>(`/api/makes`);
export const createMake = (data: MakeCreate) => api.post<Make>('/api/makes', data);
