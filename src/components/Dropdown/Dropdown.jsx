import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  selectedGrouping,
  selectedOrdering,
  onGroupingChange,
  onOrderingChange,
}) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.selectGroup}>
        <span>Grouping:</span>
        <select
          onChange={(e) => onGroupingChange(e.target.value)}
          className={styles.selectStyle}
          value={selectedGrouping}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className={styles.selectGroup}>
        <span>Ordering:</span>
        <select
          onChange={(e) => onOrderingChange(e.target.value)}
          className={styles.selectStyle}
          value={selectedOrdering}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
