import { getConnection } from 'typeorm';

import { Product } from '../../../entity/Product';

export const update = async (data: any) => {
  const update_body: { [key: string]: any } = {};

  Object.keys(data).forEach((key: string) => {
    if (key === 'name' || key === 'category' || key === 'price') {
      update_body[key] = data[key];
    }
  });

  await getConnection()
    .createQueryBuilder()
    .update(Product)
    .set(update_body)
    .where('id = :id', { id: data.id })
    .execute();
};
