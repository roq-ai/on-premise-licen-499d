import { LicenseInterface } from 'interfaces/license';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InvoiceInterface {
  id?: string;
  license_id?: string;
  end_customer_id?: string;
  created_at?: any;
  updated_at?: any;

  license?: LicenseInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InvoiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  license_id?: string;
  end_customer_id?: string;
}
