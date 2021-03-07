import { getConnection } from 'typeorm';

import { Product } from '../../../entity/Product';

export const get_list = async () => {
  const products = await getConnection()
    .getRepository(Product)
    .createQueryBuilder()
    .select(['product.id', 'product.name', 'product.category', 'product.price'])
    .from(Product, 'product')
    .where('product.deleted_at IS NULL')
    .orderBy('product.id', 'DESC')
    .getMany();

  return products;
};
