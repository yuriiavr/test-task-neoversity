import styles from "./Features.module.css";
import AC from "../../../assets/images/icons/AC.svg?react";
import Automatic from "../../../assets/images/icons/Automatic.svg?react";
import Bathroom from "../../../assets/images/icons/Bathroom.svg?react";
import Kitchen from "../../../assets/images/icons/Kitchen.svg?react";
import Microwave from "../../../assets/images/icons/Microwave.svg?react";
import Petrol from "../../../assets/images/icons/Petrol.svg?react";
import Radio from "../../../assets/images/icons/Radio.svg?react";
import Refrigerator from "../../../assets/images/icons/Refrigerator.svg?react";
import Water from "../../../assets/images/icons/Water.svg?react";
import Gas from "../../../assets/images/icons/Gas.svg?react";
import TV from "../../../assets/images/icons/TV.svg?react";

const Features = ({ camper }) => {
  return (
    <div className={styles.featuresList}>
      {camper.adults > 0 && (
        <span>
          <Users className={styles.featuresIcon} />
          {camper.adults} adults
        </span>
      )}
      {camper.transmission === "automatic" && (
        <span>
          <Automatic />
          Automatic
        </span>
      )}
      {camper.engine === "petrol" && (
        <span>
          <Petrol className={styles.featuresIcon} />
          Petrol
        </span>
      )}
      {camper.kitchen && (
        <span>
          <Kitchen className={styles.featuresIcon} />
          Kitchen
        </span>
      )}
      {camper.beds > 0 && (
        <span>
          <Beds className={styles.featuresIcon} />
          {camper.beds} beds
        </span>
      )}
      {camper.AC && (
        <span>
          <AC className={styles.featuresIcon} />
          AC
        </span>
      )}
      {camper.bathroom && (
        <span>
          <Bathroom className={styles.featuresIcon} />
          Bathroom
        </span>
      )}
      {camper.microwave && (
        <span>
          <Microwave className={styles.featuresIcon} />
          Microwave
        </span>
      )}
      {camper.radio && (
        <span>
          <Radio className={styles.featuresIcon} />
          Radio
        </span>
      )}
      {camper.refrigerator && (
        <span>
          <Refrigerator className={styles.featuresIcon} />
          Refrigerator
        </span>
      )}
      {camper.gas && (
        <span>
          <Gas className={styles.featuresIcon} />
          Gas
        </span>
      )}
      {camper.water && (
        <span>
          <Water className={styles.featuresIcon} />
          Water
        </span>
      )}
      {camper.TV && (
        <span>
          <TV className={styles.featuresIcon} />
          TV
        </span>
      )}
    </div>
  );
};

export default Features;
