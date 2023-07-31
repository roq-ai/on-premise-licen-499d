import * as yup from 'yup';

export const licenseValidationSchema = yup.object().shape({
  end_customer_id: yup.string().nullable(),
  sales_representative_id: yup.string().nullable(),
});
