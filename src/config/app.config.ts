interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Account Manager'],
  customerRoles: ['End Customer'],
  tenantRoles: ['Account Manager', 'Sales Representative', 'Customer Service Representative', 'Business Owner'],
  tenantName: 'Organization',
  applicationName: 'On Premise License management system',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
