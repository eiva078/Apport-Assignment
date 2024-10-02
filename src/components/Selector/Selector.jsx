import { useState } from "react";
import DisplayButton from "../DisplayButton/DisplayButton";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Selector.module.css";

const TaskSorter = ({ setGrouping, setOrdering }) => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const [selectedGrouping, setSelectedGrouping] = useState("status");
  const [selectedOrdering, setSelectedOrdering] = useState("priority");

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    setSelectedGrouping(newGrouping);
    setDisplayOnClick(false);
  };

  const handleOrderingChange = (newOrdering) => {
    setOrdering(newOrdering);
    setSelectedOrdering(newOrdering);
    setDisplayOnClick(false);
  };

  return (
    <div className={styles.sorterContainer}>
      <DisplayButton
        displayOnClick={displayOnClick}
        setDisplayOnClick={setDisplayOnClick}
      />
      {displayOnClick && (
        <Dropdown
          selectedGrouping={selectedGrouping}
          selectedOrdering={selectedOrdering}
          onGroupingChange={handleGroupingChange}
          onOrderingChange={handleOrderingChange}
        />
      )}
    </div>
  );
};

export default TaskSorter;
