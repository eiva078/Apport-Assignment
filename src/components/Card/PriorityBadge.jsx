import HighPriorityIcon from "../../assets/icons_FEtask/Img - High Priority.svg";
import LowPriorityIcon from "../../assets/icons_FEtask/Img - Low Priority.svg";
import MediumPriorityIcon from "../../assets/icons_FEtask/Img - Medium Priority.svg";
import NoPriorityIcon from "../../assets/icons_FEtask/No-priority.svg";
import UrgentPriorityGreyIcon from "../../assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import styles from "./Card.module.css";

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4:
      return UrgentPriorityGreyIcon; // Urgent
    case 3:
      return HighPriorityIcon; // High
    case 2:
      return MediumPriorityIcon; // Medium
    case 1:
      return LowPriorityIcon; // Low
    case 0:
    default:
      return NoPriorityIcon; // No priority
  }
};

const PriorityBadge = ({ priority }) => {
  return (
    <div className={styles.priorityBadge}>
      <img src={getPriorityIcon(priority)} alt="Priority Icon" />
    </div>
  );
};

export default PriorityBadge;
