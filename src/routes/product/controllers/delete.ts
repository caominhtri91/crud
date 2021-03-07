import { getConnection } from 'typeorm';

import { Product } from '../../../entity/Product';

export const soft_delete = async (data: any) => {
  await getConnection()
    .getRepository(Product)
    .createQueryBuilder()
    .softDelete()
    .where('id = :id', { id: data.id })
    .execute();
};
