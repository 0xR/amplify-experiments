import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum OrderStatus {
  CREATED = "CREATED",
  VALIDATED = "VALIDATED",
  PAID = "PAID",
  SHIPPED = "SHIPPED"
}



type OrderLineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrderLine {
  readonly id: string;
  readonly orderID?: string;
  readonly Product?: Product;
  readonly quantity?: number;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly orderLineProductId?: string;
  constructor(init: ModelInit<OrderLine, OrderLineMetaData>);
  static copyOf(source: OrderLine, mutator: (draft: MutableModel<OrderLine, OrderLineMetaData>) => MutableModel<OrderLine, OrderLineMetaData> | void): OrderLine;
}

export declare class Product {
  readonly id: string;
  readonly name?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Order {
  readonly id: string;
  readonly OrderLines?: (OrderLine | null)[];
  readonly status?: OrderStatus | keyof typeof OrderStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}