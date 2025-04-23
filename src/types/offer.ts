export type Offer = {
  id: number;
  code: string;
  message: string;
  discount_type: string;
  discount_amount: number;
  start_date: string; // You can use Date if you want to work with date objects
  end_date: string;
  active: boolean;
  usage_limit: number | null;
  created_at: string;
};