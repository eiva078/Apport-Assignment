// Generates a random hex color
export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Gets user initials from their name
export const getUserInitials = (name) => {
  if (!name) return "UN";
  const splitName = name.split(" ");
  return (
    splitName[0][0].toUpperCase() +
    (splitName[1] ? splitName[1][0].toUpperCase() : "")
  );
};

// Generates a color based on the user's name
export const getUserColor = (name) => {
  if (!name) return "#cccccc";
  const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return `hsl(${hash % 360}, 60%, 70%)`;
};

// Groups tickets based on the specified grouping criteria
export const groupTickets = (tickets, grouping, users) => {
  const groups = {};

  if (grouping === "user") {
    const userMap = users.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    tickets.forEach((ticket) => {
      const user = userMap[ticket.userId] || { name: "Unassigned" };
      const userName = user.name === "Unassigned" ? null : user.name;
      if (userName) {
        if (!groups[userName]) groups[userName] = { tickets: [], user };
        groups[userName].tickets.push(ticket);
      }
    });
  } else if (grouping === "status") {
    const validStatuses = [
      "Todo",
      "In progress",
      "Backlog",
      "Done",
      "Cancelled",
    ];

    validStatuses.forEach((status) => {
      groups[status] = { tickets: [] };
    });

    tickets.forEach((ticket) => {
      const groupKey = ticket.status || "Unassigned";
      if (!groups[groupKey]) groups[groupKey] = { tickets: [] };
      groups[groupKey].tickets.push(ticket);
    });
  } else if (grouping === "priority") {
    const validPriorities = [
      "Urgent",
      "High",
      "Medium",
      "Low",
      "No priority",
    ];

    validPriorities.forEach((priority) => {
      groups[priority] = { tickets: [] };
    });

    tickets.forEach((ticket) => {
      const groupKey =
        ticket.priority !== undefined
          ? ticket.priority === 4
            ? "Urgent"
            : ticket.priority === 3
            ? "High"
            : ticket.priority === 2
            ? "Medium"
            : ticket.priority === 1
            ? "Low"
            : "No priority"
          : "No priority";
      if (!groups[groupKey]) groups[groupKey] = { tickets: [] };
      groups[groupKey].tickets.push(ticket);
    });
  } else {
    tickets.forEach((ticket) => {
      const groupKey = ticket[grouping] || "Unassigned";
      if (!groups[groupKey]) groups[groupKey] = { tickets: [] };
      groups[groupKey].tickets.push(ticket);
    });
  }

  return groups;
};

// Sorts tickets based on the specified ordering criteria
export const sortTickets = (groupedTickets, ordering) => {
  const sorted = {};
  Object.keys(groupedTickets).forEach((group) => {
    sorted[group] = groupedTickets[group].tickets.sort((a, b) => {
      if (ordering === "priority") return b.priority - a.priority;
      if (ordering === "title") return a.title.localeCompare(b.title);
      return 0;
    });
  });
  return sorted;
};
