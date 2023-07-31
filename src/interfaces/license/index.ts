import { InvoiceInterface } from 'interfaces/invoice';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LicenseInterface {
  id?: string;
  end_customer_id?: string;
  sales_representative_id?: string;
  created_at?: any;
  updated_at?: any;
  invoice?: InvoiceInterface[];
  user_license_end_customer_idTouser?: UserInterface;
  user_license_sales_representative_idTouser?: UserInterface;
  _count?: {
    invoice?: number;
  };
}

export interface LicenseGetQueryInterface extends GetQueryInterface {
  id?: string;
  end_customer_id?: string;
  sales_representative_id?: string;
}
