import styles from "../styles/Home.module.css";
import OnBoarding from "./onboarding";

export default function Home() {
  return (
    <div className={styles.container}>
      <OnBoarding></OnBoarding>
    </div>
  );
}
