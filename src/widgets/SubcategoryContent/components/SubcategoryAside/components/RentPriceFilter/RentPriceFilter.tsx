import styles from './RentPriceFilter.module.scss';
import TextField from '@mui/material/TextField';
import { customRentPriceInput } from '@/shared/styles/buttonStyles';
import { SelectHeader } from '@/widgets/SubcategoryContent/components/SubcategoryAside/ui/SubcategoryAsideHeader/SubcategoryAsideHeader';
export const RentPriceFilter = () => {
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
