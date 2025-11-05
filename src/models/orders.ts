import {} from 'express';
import { db } from "../config/database";

interface OrderAttributes {
  id: number;
  user_id: number;
  appointment_id?: number | null;
  amount: number;
  payment_method?: string | null;
  status?: 'pending' | 'paid' | 'failed';
  transaction_id?: string | null;
  paid_at?: Date | null;
  created_at?: Date;
  updated_at?: Date;
}

type OrderCreationAttributes = Optional<
  OrderAttributes,
  'id' | 'status' | 'transaction_id' | 'paid_at' | 'created_at' | 'updated_at'
>;

class Order extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes {
  public id!: number;
  public user_id!: number;
  public appointment_id!: number | null;
  public amount!: number;
  public payment_method!: string | null;
  public status!: 'pending' | 'paid' | 'failed';
  public transaction_id!: string | null;
  public paid_at!: Date | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Order.arguments(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    appointment_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pending', 'paid', 'failed'),
      defaultValue: 'pending',
    },
    transaction_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    paid_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    export,
    tableName: 'orders',
    timestamps: true,
    underscored: true,
  }
);

export default Order;