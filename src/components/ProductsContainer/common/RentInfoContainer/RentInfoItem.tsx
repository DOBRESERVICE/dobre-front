import { FC } from 'react';

interface RentInfoItem {
  timeInRent: string;
  price: string;
}
export const RentInfoItem: FC<RentInfoItem> = ({ timeInRent, price }) => {
  return (
    <div>
      <p>{timeInRent}</p>
      <span>{price}</span>
    </div>
  );
};
