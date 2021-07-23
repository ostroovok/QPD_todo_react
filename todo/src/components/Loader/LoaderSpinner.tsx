import Loader from "react-loader-spinner";
import styles from "./LoaderSpinner.module.css";

const LoaderSpinner = () => {
  return (
    <div className={styles['loader']}>
      <Loader type="BallTriangle" color="#3F72AF" height={100} width={100} />
    </div>
  );
};

export default LoaderSpinner;
