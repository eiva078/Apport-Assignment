import { useEffect } from "react";

function TicketFetcher({ setTickets, setUsers }) {
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data.tickets)) {
          setTickets(data.tickets);
        }

        if (Array.isArray(data.users)) {
          setUsers(data.users);
        }
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchTickets();
  }, [setTickets, setUsers]);

  return null;
}

export default TicketFetcher;
