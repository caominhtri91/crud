import healthRouter from './health/routes';
import crudRouter from './product/routes';

export default [...healthRouter, ...crudRouter];
