import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from "./BookingForm/BookingForm";
import Reviews from "./Reviews/Reviews";
import Features from "../Shared/Features/Features";
import Loader from "../Loader/Loader";
import styles from "./CamperDetails.module.css";
import Map from "../../assets/images/icons/Map.svg?react";
import Rating from "../../assets/images/icons/Rating.svg?react";

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const fetchCamper = async () => {
      try {
        const response = await axios.get(
          `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
        );
        setCamper(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    fetchCamper();
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>Camper not found.</p>;

  return (
    <div className={styles.camperDetails}>
      <div className={styles.mainInfo}>
        <div className={styles.descriptionBlock}>
          <h2>{camper.name}</h2>
          <div className={styles.ratingCont}>
            <p className={styles.rating}>
              <Rating className={styles.ratingIcon} /> {camper.rating} (
              {camper.reviews.length} Reviews)
            </p>
            <p className={styles.location}>
              <Map /> {camper.location}
            </p>
          </div>
          <p className={styles.price}>€{camper.price}.00</p>
        </div>
        <div className={styles.gallery}>
          {camper.gallery.map((img, index) => (
            <img
              key={index}
              src={img.original}
              alt={`${camper.name} - ${index}`}
            />
          ))}
        </div>
        <p className={styles.description}>{camper.description}</p>
      </div>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabBtn} ${
            activeTab === "features" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${styles.tabBtn} ${
            activeTab === "reviews" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === "features" && (
          <div className={styles.tabContent}>
            <div className={styles.featuresCont}>
              <Features camper={camper} />
              <div className={styles.detailsCont}>
                <h4>Vehicle details</h4>
                <div className={styles.detailsList}>
                  <p>
                    Form <span>{camper.form}</span>
                  </p>
                  <p>
                    Length <span>{camper.length}</span>
                  </p>
                  <p>
                    Width <span>{camper.width}</span>
                  </p>
                  <p>
                    Height <span>{camper.height}</span>
                  </p>
                  <p>
                    Tank <span>{camper.tank}</span>
                  </p>
                  <p>
                    Consumption <span>{camper.consumption}</span>
                  </p>
                </div>
              </div>
            </div>
            <BookingForm />
          </div>
        )}
        {activeTab === "reviews" && (
          <div className={styles.tabContent}>
            <Reviews reviews={camper.reviews} />
            <BookingForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default CamperDetails;
