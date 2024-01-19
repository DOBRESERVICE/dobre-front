import styles from './RuleAccordion.module.scss';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import {
  defaultBlackArrow,
  defaultWhiteArrow,
  greenCheckedIcon,
  greenCheckedRuleIcon,
  openedArrow,
} from '@/shared/image';
import { Dispatch, FC, SetStateAction } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface DeliveryIcons {
  id: number;
  icon: StaticImageData;
}
interface RuleAccordionProps {
  deliveryIcon?: StaticImport;
  ruleName: string;
  text?: string;
  activeRule?: number;
  deliveryIcons?: DeliveryIcons[];
  id: number;
  setActiveRule: Dispatch<SetStateAction<number>>;
  features?: string[];
}
export const RuleAccordion: FC<RuleAccordionProps> = ({
  activeRule,
  id,
  text,
  ruleName,
  setActiveRule,
  features,
  deliveryIcon,
  deliveryIcons,
}) => {
  const isSelected = activeRule === id;
  const handleToggle = () => {
    setActiveRule(isSelected ? 0 : id);
  };

  return (
    <div
      className={classNames(styles.ruleWrapper, {
        [styles.opened]: isSelected,
        [styles.delivery]: deliveryIcon,
      })}
      role='button'
      onClick={handleToggle}
    >
      <div className={styles.ruleHeader}>
        <div className={styles.headerContent}>
          {deliveryIcon && <Image src={deliveryIcon} alt='delivery icon' />}
          <p>{ruleName}</p>
        </div>
        <div className={styles.rightContent}>
          {deliveryIcons && (
            <div className={styles.deliveryIconsWrapper}>
              {deliveryIcons.map((icon) => (
                <Image key={icon.id} src={icon.icon} alt='delivery icon' />
              ))}
            </div>
          )}
          <button className={styles.accordionButton}>
            <Image src={defaultBlackArrow} alt='arrow' />
          </button>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.features}>
          {features?.map((feature) => (
            <div className={styles.featureItem} key={feature}>
              <Image src={greenCheckedRuleIcon} alt='checked' />
              <p> {feature}</p>
            </div>
          ))}
        </div>
        <p className={styles.rulesText}>{text}</p>
      </div>
    </div>
  );
};
