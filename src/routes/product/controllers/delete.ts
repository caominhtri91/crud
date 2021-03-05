import { getConnection } from 'typeorm';

import { Product } from '../../../entity/Product';

export const soft_delete = async (data: any) => {
  await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Product)
    .where('id = :id', { id: data.id })
    .execute();
};
