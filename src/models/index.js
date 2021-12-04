// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "CREATED": "CREATED",
  "VALIDATED": "VALIDATED",
  "PAID": "PAID",
  "SHIPPED": "SHIPPED"
};

const { OrderLine, Product, Order } = initSchema(schema);

export {
  OrderLine,
  Product,
  Order,
  OrderStatus
};