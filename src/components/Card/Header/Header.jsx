import React from "react";
import styles from "./Header.module.css";
import { getRandomColor } from "../../../utils";

const Header = ({ ticket, users, isGroupedByUser }) => {
  const user = users ? users.find((u) => u.id === ticket.userId) : null;
  const userName = user ? user.name : null;
  const initials = userName ? userName.substring(0, 2).toUpperCase() : "UN";
  const backgroundColor = getRandomColor();

  return (
    <div className={styles.header}>
      <span className={styles.ticketId}>{ticket.id}</span>
      {!isGroupedByUser && (
        <div
          className={styles.userImage}
          style={{
            backgroundColor,
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
};

export default Header;
