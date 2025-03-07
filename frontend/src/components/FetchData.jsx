import { useEffect, useState } from "react";

function FetchData() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return <div>{message}</div>;
}

export default FetchData;
