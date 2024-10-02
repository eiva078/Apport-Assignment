import DisplayIcon from "../../assets/icons_FEtask/Display.svg";
import styles from "./DisplayButton.module.css";

const DisplayButton = ({ displayOnClick, setDisplayOnClick }) => {
  return (
    <button
      className={styles.displayButton}
      onClick={() => setDisplayOnClick(!displayOnClick)}
    >
      <img src={DisplayIcon} alt="Display Icon" className={styles.icon} />
      Display
    </button>
  );
};

export default DisplayButton;
