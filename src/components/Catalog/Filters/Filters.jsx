import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/campersSlice";
import styles from "./Filters.module.css";
import AC from "../../../assets/images/icons/AC.svg?react";
import Automatic from "../../../assets/images/icons/Automatic.svg?react";
import Bathroom from "../../../assets/images/icons/Bathroom.svg?react";
import Kitchen from "../../../assets/images/icons/Kitchen.svg?react";
import TV from "../../../assets/images/icons/TV.svg?react";
import Map from "../../../assets/images/icons/Map.svg?react";
import Van from "../../../assets/images/icons/Van.svg?react";
import FullyIntegrated from "../../../assets/images/icons/FullyIntegrated.svg?react";
import Alcove from "../../../assets/images/icons/Alcove.svg?react";
import Button from "../../Shared/Button/Button";

const Filters = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleEquipment, setVehicleEquipment] = useState([]);

  const handleSearch = () => {
    const params = {
      location,
      form: vehicleType,
      AC: vehicleEquipment.includes("AC"),
      kitchen: vehicleEquipment.includes("kitchen"),
      bathroom: vehicleEquipment.includes("bathroom"),
    };

    dispatch(setFilters(params));
  };

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    setVehicleEquipment((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className={styles.filters}>
      <div className={styles.searchGroup}>
        <label>Location</label>
        <div className={styles.locationCont}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Kyiv, Ukraine"
            className={styles.locationInput}
          />
          <Map className={styles.mapIcon} />
        </div>
      </div>

      <span className={styles.filtersText}>Filters</span>

      <div className={styles.filterGroup}>
        <h4>Vehicle equipment</h4>
        <div className={styles.equipmentOptions}>
          <label
            className={`${styles.option} ${
              vehicleEquipment.includes("AC") ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              value="AC"
              checked={vehicleEquipment.includes("AC")}
              onChange={handleEquipmentChange}
            />
            <AC className={styles.equipIcon} /> AC
          </label>
          <label
            className={`${styles.option} ${
              vehicleEquipment.includes("automatic") ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              value="automatic"
              checked={vehicleEquipment.includes("automatic")}
              onChange={handleEquipmentChange}
            />
            <Automatic className={styles.equipIcon} /> Automatic
          </label>
          <label
            className={`${styles.option} ${
              vehicleEquipment.includes("kitchen") ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              value="kitchen"
              checked={vehicleEquipment.includes("kitchen")}
              onChange={handleEquipmentChange}
            />
            <Kitchen className={styles.equipIcon} /> Kitchen
          </label>
          <label
            className={`${styles.option} ${
              vehicleEquipment.includes("tv") ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              value="tv"
              checked={vehicleEquipment.includes("tv")}
              onChange={handleEquipmentChange}
            />
            <TV className={styles.equipIcon} /> TV
          </label>
          <label
            className={`${styles.option} ${
              vehicleEquipment.includes("bathroom") ? styles.active : ""
            }`}
          >
            <input
              type="checkbox"
              value="bathroom"
              checked={vehicleEquipment.includes("bathroom")}
              onChange={handleEquipmentChange}
            />
            <Bathroom className={styles.equipIcon} /> Bathroom
          </label>
        </div>
      </div>

      <div className={styles.filterGroup}>
        <h4>Vehicle type</h4>
        <div className={styles.typeOptions}>
          <label
            className={`${styles.option} ${
              vehicleType === "panel-truck" ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="panel-truck"
              checked={vehicleType === "panel-truck"}
              onChange={() => setVehicleType("panel-truck")}
            />
            <Van className={styles.equipIcon} /> Van
          </label>
          <label
            className={`${styles.option} ${
              vehicleType === "fully-integrated" ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="fully-integrated"
              checked={vehicleType === "fully-integrated"}
              onChange={() => setVehicleType("fully-integrated")}
            />
            <FullyIntegrated className={styles.equipIcon} /> Fully Integrated
          </label>
          <label
            className={`${styles.option} ${
              vehicleType === "alcove" ? styles.active : ""
            }`}
          >
            <input
              type="radio"
              value="alcove"
              checked={vehicleType === "alcove"}
              onChange={() => setVehicleType("alcove")}
            />
            <Alcove className={styles.equipIcon} /> Alcove
          </label>
        </div>
      </div>

      <Button onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default Filters;