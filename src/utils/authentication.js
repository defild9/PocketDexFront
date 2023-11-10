export function getToken() {
  return localStorage.getItem('token');
}

export function checkIfUserIsAuthenticated() {
  const token = getToken();

  if (token) {
    return true;
  }
  return false;
}
