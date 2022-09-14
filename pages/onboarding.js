import Stepper from "../src/components/stepper";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Stepper></Stepper>
      </main>
    </div>
  );
}
