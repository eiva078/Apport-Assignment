import React from "react";
import PriorityBadge from "../PriorityBadge";
import styles from "./TicketMeta.module.css";

const TicketMeta = ({ ticket }) => {
  return (
    <div className={styles.ticketMeta}>
      <PriorityBadge priority={ticket.priority} />
      <div className={styles.typeBadge}>
        <span>{ticket.tag.join(", ")}</span>
      </div>
    </div>
  );
};

export default TicketMeta;
