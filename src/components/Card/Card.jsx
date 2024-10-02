import Header from "./Header/Header";
import TicketMeta from "./TicketMeta/TicketMeta";
import styles from "./Card.module.css";

const Card = ({ ticket, users, isGroupedByUser }) => {
  return (
    <div className={styles.card}>
      <Header ticket={ticket} users={users} isGroupedByUser={isGroupedByUser} />
      <h5 className={styles.ticketTitle}>{ticket.title}</h5>
      <TicketMeta ticket={ticket} />
    </div>
  );
};

export default Card;
