import { FC, useState } from 'react';

import styles from './ProductDescription.module.scss';
import Image from 'next/image';
import { mockUser, phoneIcon, sendMessageIcon, verified } from '@/shared/image';
import { RatingComponent } from '@/shared/ui/RatingComponent/RatingComponent';
import { Button } from '@mui/material';
import { customCategoriesButton } from '@/shared/styles/buttonStyles';
import { YandexMaps } from '@/features/map/yandexMaps/YandexMaps';
import { ProductDetails } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/ProductDetails/ProductDetails';
import { rulesAccordionData } from '@/shared/data';
import { RuleAccordion } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/RuleAccordion/RuleAccordion';
import { PriceInfoCard } from '@/app/category/[tr_name_category]/[id]/[product_name]/common/ProductItemContainer/common/PriceInfoCard/PriceInfoCard';

interface ProductDescriptionProps {
  firstDescription: string;
  mainAdvantages: any[];
  secondDescription: string;
  lan: number;
  lon: number;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
  firstDescription,
  secondDescription,
  mainAdvantages,
  lon,
  lan,
}) => {
  const [activeRule, setActiveRule] = useState(0);
  return (
    <div className={styles.productInfo}>
      <div className={styles.userInfo}>
        <div className={styles.userData}>
          <div className={styles.imageWrapper}>
            <Image src={mockUser} alt='user image' />
          </div>
          <div className={styles.ratingWrapper}>
            <div>
              <p>Viola. K, </p>
              <RatingComponent feedbackType='textFeedback' rating={4.9} feedbackCount={0} />
            </div>
            <div>
              <Image src={verified} alt='verified' /> <p className={styles.individual}>Частное лицо</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <Image src={phoneIcon} alt='phone' />
          </div>
          <Button disableRipple variant='contained' size='medium' sx={customCategoriesButton}>
            <Image src={sendMessageIcon} alt='message' />
            Написать
          </Button>
        </div>
      </div>
      <YandexMaps lan={lan} lon={lon} />
      <div className={styles.descriptionWrapper}>
        <h3>Описание</h3>
        <div className={styles.descriptionContent}>
          <p>{firstDescription}</p>
          <div className={styles.advantagesContent}>
            <p>Основные преимущества модели:</p>
            <ul className={styles.advantagesList}>
              {mainAdvantages.map((advantage) => (
                <li key={advantage.id}>{advantage.info}</li>
              ))}
            </ul>
            <p>{secondDescription}</p>
          </div>
        </div>
      </div>
      <ProductDetails />
      {rulesAccordionData.map((rule) => (
        <RuleAccordion
          setActiveRule={setActiveRule}
          id={rule.id}
          activeRule={activeRule}
          key={rule.id}
          text={rule.text}
          ruleName={rule.ruleName}
          features={rule.features}
        />
      ))}
      <PriceInfoCard />
    </div>
  );
};
