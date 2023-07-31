const mapping: Record<string, string> = {
  invoices: 'invoice',
  licenses: 'license',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
