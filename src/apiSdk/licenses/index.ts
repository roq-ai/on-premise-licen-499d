import axios from 'axios';
import queryString from 'query-string';
import { LicenseInterface, LicenseGetQueryInterface } from 'interfaces/license';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLicenses = async (query?: LicenseGetQueryInterface): Promise<PaginatedInterface<LicenseInterface>> => {
  const response = await axios.get('/api/licenses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLicense = async (license: LicenseInterface) => {
  const response = await axios.post('/api/licenses', license);
  return response.data;
};

export const updateLicenseById = async (id: string, license: LicenseInterface) => {
  const response = await axios.put(`/api/licenses/${id}`, license);
  return response.data;
};

export const getLicenseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/licenses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLicenseById = async (id: string) => {
  const response = await axios.delete(`/api/licenses/${id}`);
  return response.data;
};
