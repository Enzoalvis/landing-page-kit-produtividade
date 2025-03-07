const savePixelData = async (event, data) => {
  try {
    const response = await fetch("/api/tracking/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event, data }),
    });

    const result = await response.json();
    console.log("Resposta do servidor:", result);
  } catch (error) {
    console.error("Erro ao salvar dados do Pixel:", error);
  }
};

export default savePixelData;
