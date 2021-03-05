import { getConnection } from 'typeorm';

import { Product } from '../../../entity/Product';

export const create = async (data: any) => {
  const { name, category, price } = data;

  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Product)
    .values([{ name, category, price }])
    .execute();
};
