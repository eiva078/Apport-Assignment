import React from "react";
import Card from "../Card/Card.jsx";
import styles from "./List.module.css";
import TodoIcon from "../../assets/icons_FEtask/To-do.svg";
import BacklogIcon from "../../assets/icons_FEtask/Backlog.svg";
import InProgressIcon from "../../assets/icons_FEtask/in-progress.svg";
import CancelledIcon from "../../assets/icons_FEtask/Cancelled.svg";
import DoneIcon from "../../assets/icons_FEtask/Done.svg";
import Menu from "../../assets/icons_FEtask/3 dot menu.svg";
import AddIcon from "../../assets/icons_FEtask/add.svg";
import HighIcon from "../../assets/icons_FEtask/Img - High Priority.svg";
import LowIcon from "../../assets/icons_FEtask/Img - Low Priority.svg";
import MediumIcon from "../../assets/icons_FEtask/Img - Medium Priority.svg";
import NoPriorityIcon from "../../assets/icons_FEtask/No-priority.svg";
import UrgentIcon from "../../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import {
  getUserInitials,
  getUserColor,
  groupTickets,
  sortTickets,
} from "../../utils.js";

const statusIcons = {
  Todo: TodoIcon,
  "In progress": InProgressIcon,
  Done: DoneIcon,
  Backlog: BacklogIcon,
  Cancelled: CancelledIcon,
};

const priorityIcons = {
  Urgent: UrgentIcon,
  High: HighIcon,
  Medium: MediumIcon,
  Low: LowIcon,
  "No priority": NoPriorityIcon,
};

const priorityLabels = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

const List = ({ tickets, users, grouping, ordering }) => {
  const groupedTickets = groupTickets(tickets, grouping, users);
  const sortedTickets = sortTickets(groupedTickets, ordering);

  return (
    <div className={styles.List}>
      {Object.keys(sortedTickets).map((group) => (
        <div className={styles.Column} key={group}>
          <h3 className={styles.columnHeader}>
            <span className={styles.headerTitle}>
              {statusIcons[group] && (
                <img
                  src={statusIcons[group]}
                  alt={`${group} Icon`}
                  className={styles.statusIcon}
                />
              )}
              {grouping === "user" && (
                <div
                  className={styles.userInitials}
                  style={{
                    backgroundColor: getUserColor(group),
                  }}
                >
                  {getUserInitials(group)}
                </div>
              )}
              {grouping === "priority" && priorityIcons[group] && (
                <img
                  src={priorityIcons[group]}
                  alt={`${priorityLabels[group]} Icon`}
                  className={styles.priorityIcon}
                />
              )}
              {group} ({sortedTickets[group].length})
            </span>
            <span className={styles.headerIcons}>
              <img src={AddIcon} alt="Add Icon" className={styles.addIcon} />
              <img src={Menu} alt="Menu Icon" className={styles.menuIcon} />
            </span>
          </h3>

          {sortedTickets[group].map((ticket) => (
            <Card
              key={ticket.id}
              ticket={ticket}
              users={users}
              isGroupedByUser={grouping === "user"}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
