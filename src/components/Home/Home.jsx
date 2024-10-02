import { useState } from "react";
import TicketFetcher from "../TicketFetcher/TicketFetcher";
import HomeLayout from "./HomeLayout";
import styles from "./Home.module.css";

function Home() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [ordering, setOrdering] = useState("priority");

  return (
    <div className={styles.home}>
      <TicketFetcher setTickets={setTickets} setUsers={setUsers} />
      <HomeLayout
        tickets={tickets}
        users={users}
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
    </div>
  );
}

export default Home;
