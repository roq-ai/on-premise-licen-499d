import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  license_id: yup.string().nullable(),
  end_customer_id: yup.string().nullable(),
});
