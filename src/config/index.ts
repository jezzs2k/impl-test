export const KEY_CONFIG_URL =
  'client_id=38c6cc7023cdbf9abfde&client_secret=a2f73d32d407a67fcfa58731a47cf66112efab56';

export const getUserURL = (username: string) =>
  `https://api.github.com/users/${username}?` + KEY_CONFIG_URL;

export const getUsersURL = (username: string) =>
  `https://api.github.com/search/users?q=${username}&` + KEY_CONFIG_URL;
