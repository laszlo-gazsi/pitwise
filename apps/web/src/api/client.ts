import keycloak from '@/auth/keycloak';

export class ApiError extends Error {
  public status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const refreshToken = async () => {
  try {
    await keycloak.updateToken(30);
  } catch (e) {
    await keycloak.login();
    throw e;
  }
};

const request = async <T>(method: string, path: string, body?: unknown): Promise<T> => {
  await refreshToken();

  const headers = { Authorization: `Bearer ${keycloak.token}` };

  const response = await fetch(path, {
    method,
    headers: body ? { ...headers, 'Content-Type': 'application/json' } : headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      await keycloak.login();
    }

    const error = await response.json().catch(() => null);
    throw new ApiError(response.status, error?.message ?? response.statusText);
  }

  return response.status === 204 ? (undefined as T) : await response.json();
};

export const api = {
  get: <T>(path: string) => request<T>('GET', path),
  post: <T>(path: string, body: unknown) => request<T>('POST', path, body),
  patch: <T>(path: string, body: unknown) => request<T>('PATCH', path, body),
  delete: <T>(path: string) => request<T>('DELETE', path),
};
