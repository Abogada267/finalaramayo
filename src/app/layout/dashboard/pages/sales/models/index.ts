import { User } from '../../users/models/index';

export interface Sale {
  id: string | number;
  userId: string | number;
  productId: string | number;
  user?: User;
 
}

export interface CreateSaleData {
  userId: string | number | null;
  productId: string | number | null;
}
