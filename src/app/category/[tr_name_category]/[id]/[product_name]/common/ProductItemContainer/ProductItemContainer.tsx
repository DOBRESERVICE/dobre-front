import { RatingComponent } from '@/ui/RatingComponent/RatingComponent';
import { StatusBar } from '@/components/ProductsContainer/common/StatusBar';
import styles from './ProductItemContainer.module.scss';
import Image from 'next/image';
import {
  dateArrow,
  dateImage,
  favouriteIcon,
  mock1Image,
  mock2Image,
  mock3Image,
  mockBrandImage,
  mockMainImage,
  rentButtonIcon,
  secureProduct,
} from '@/assets/image';
import { CustomSelect } from '@/app/category/[tr_name_category]/[id]/common/CustomSelect/CustomSelect';
import {
  customDateLabel,
  customDateSelect,
  rentInfoCustomBigButton,
  rentInfoCustomButton,
} from '@/styles/buttonStyles';
import { ProductRentStatus } from '@/ui/ProductRentStatus/ProductRentStatus';
import { TariffCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TariffCard/TariffCard';
import { Button } from '@mui/material';
import { TabsComponent } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/TabsComponent/TabsComponent';
import { ProductDescription } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDescription/ProductDescription';
import { descriptionProductData } from '@/data';
export const ProductItemContainer = () => {
  return (
    <div>
      <div className={styles.productHeader}>
        <div className={styles.headerInfo}>
          <h2 className={styles.productName}>Комбинир. перфоратор Hilti TE 70-AVR 230V 2208672</h2>
          <div className={styles.content}>
            <RatingComponent rating={2} feedbackCount={2} />
            <StatusBar status={4} />
            <div className={styles.wrapper}>
              <Image src={secureProduct} alt='security' />
              <p>Данный товар застрахован</p>
            </div>
          </div>
        </div>
        <div className={styles.priceWrapper}>
          <div className={styles.favouriteImageWrapper}>
            <Image src={favouriteIcon} alt='favourite' />
          </div>
          <div className={styles.priceSegment}>от 450 руб.</div>
        </div>
      </div>
      <div className={styles.productBody}>
        <div className={styles.imagesContainer}>
          <div className={styles.imageWrapper}>
            <Image src={mock3Image} alt='mock' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={mock2Image} alt='mock' />
          </div>
          <div className={styles.imageWrapper}>
            <Image src={mock1Image} alt='mock' />
          </div>
        </div>
        <div className={styles.mainImageWrapper}>
          <div className={styles.brandWrapper}>
            <Image src={mockBrandImage} alt='brand' />
          </div>
          <Image src={mockMainImage} alt={'ss'} />
        </div>
        <div className={styles.productInfo}>
          <div>
            <div className={styles.dateHeaderWrapper}>
              <p>Дата</p>
              <ProductRentStatus isAvailable />
            </div>
            <CustomSelect
              selectStyles={customDateSelect}
              labelStyles={customDateLabel}
              labelImage={dateImage}
              firstPartLabel='10 окт.'
              secondPartLabel='12 окт.'
              labelSecondImage={dateArrow}
            />
          </div>
          <div>
            <div className={styles.dateHeaderWrapper}>
              <p>Тарифы</p>
              <p>Смотреть все</p>
            </div>
            <div className={styles.cardsWrapper}>
              <TariffCard time={'1 час'} price={'450 руб.'} />
              <TariffCard time={'1 час'} price={'450 руб.'} />
              <TariffCard time={'1 час'} price={'450 руб.'} />
            </div>
          </div>
          <div className={styles.depositeWrapper}>
            <p>При оформлении аренды взымается залог</p>
            <div>
              <p>20 000 руб.</p>
            </div>
          </div>
          <div className={styles.rentInfoWrapper}>
            <div className={styles.rentInfoHeader}>
              <p>Стоимость аренды :</p>
              <p>300 руб.</p>
            </div>
            <div>
              <div className={styles.rentInfoContent}>
                <p>Тариф:</p>
                <p>1-7 дней</p>
              </div>
              <div className={styles.rentInfoContent}>
                <p>Кол-во дней:</p>
                <p>2 дня</p>
              </div>
            </div>
            <Button disableRipple sx={rentInfoCustomBigButton}>
              <Image src={rentButtonIcon} alt='rent' />
              Оформить аренду
            </Button>
          </div>
        </div>
      </div>
      <ProductDescription
        secondDescription={descriptionProductData.secondDescription}
        firstDescription={descriptionProductData.firstDescription}
        mainAdvantages={descriptionProductData.mainAdvantages}
      />
    </div>
  );
};
