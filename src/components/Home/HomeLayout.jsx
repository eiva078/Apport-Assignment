import List from "../List/List";
import Selector from "../Selector/Selector";
import styles from "./Home.module.css";

function HomeLayout({
  tickets,
  users,
  grouping,
  setGrouping,
  ordering,
  setOrdering,
}) {
  return (
    <div className={styles.layout}>
      <Selector setGrouping={setGrouping} setOrdering={setOrdering} />
      <List
        tickets={tickets}
        users={users}
        grouping={grouping}
        ordering={ordering}
      />
    </div>
  );
}

export default HomeLayout;
