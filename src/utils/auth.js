// Simple client-side auth helpers using localStorage

export const AUTH_STORAGE_KEY = 'hs_auth';

export function getAuth() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { isAuthenticated: false, user: null };
  } catch (error) {
    return { isAuthenticated: false, user: null };
  }
}

export function setAuth(auth) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
}

export function clearAuth() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isAuthenticated() {
  const auth = getAuth();
  return Boolean(auth && auth.isAuthenticated);
}

export function getUser() {
  const auth = getAuth();
  return auth ? auth.user : null;
}

export function makeUserFromLogin(email) {
  const localPart = String(email || '').split('@')[0] || 'User';
  const prettyName = localPart
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    name: prettyName || 'User',
    email: String(email || '').toLowerCase(),
    avatarUrl: null, // placeholder for real avatar; component will fallback to initials
  };
}


