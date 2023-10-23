import styles from './RentPrice.module.scss';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { customRentPriceInput, customSelect } from '@/styles/buttonStyles';
import { SelectHeader } from '@/app/category/[tr_name_category]/[id]/common/SelectHeader/SelectHeader';
export const RentPrice = () => {
  return (
    <div className={styles.rentPriceContainer}>
      <SelectHeader headerName='Стоимость аренды, RUB' />
      <div className={styles.content}>
        <div className={styles.inputWrapper}>
          <label htmlFor='from'>От</label>
          <TextField id='from' placeholder='980' sx={customRentPriceInput} />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='to'>До</label>
          <TextField id='to' placeholder='23 500' sx={customRentPriceInput} />
        </div>
      </div>
    </div>
  );
};
