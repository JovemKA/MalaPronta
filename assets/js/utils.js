function formatDate(date) {
  // Função para formatar datas
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("pt-BR", options);
}

document.addEventListener("DOMContentLoaded", function () {
  // Carrega os dados do destino
  fetch("destinations.json")
    .then((response) => response.json())
    .then((destinations) => {
      // Supondo que a página atual seja determinada pelo parâmetro 'id' na URL
      const urlParams = new URLSearchParams(window.location.search);
      const destinationId = urlParams.get("id");

      // Encontra o destino correspondente
      const destination = destinations.find(
        (dest) => dest.name.toLowerCase() === destinationId.toLowerCase()
      );

      if (destination) {
        // Preenche a imagem principal e o título do destino
        document.querySelector(".destination-header img").src =
          destination.image;
        document.querySelector(".destination-header h1").textContent =
          destination.name;

        // Preenche as seções de conteúdo do destino
        const contentSections = document.querySelector(".destination-content");
        contentSections.innerHTML = `
                <section>
                    <h2>Conheça ${destination.name}</h2>
                    <p>${destination.description}</p>
                </section>
                <section>
                    <h2>Atrações noturnas</h2>
                    <p>${destination.nightlife}</p>
                </section>
                <section>
                    <h2>Compras</h2>
                    <p>${destination.shopping}</p>
                </section>
                <section>
                    <h2>Eventos</h2>
                    <p>${destination.events}</p>
                </section>
                <section>
                    <h2>Melhor época</h2>
                    <p>${destination.bestTime}</p>
                </section>
                <section>
                    <h2>Como chegar</h2>
                    <p>${destination.gettingThere}</p>
                </section>
                <section>
                    <h2>Informações turísticas</h2>
                    <p>${destination.touristInfo}</p>
                </section>
                <section>
                    <h2>Pontos turísticos</h2>
                    <p>${destination.sightseeing}</p>
                </section>
                <section>
                    <h2>Fotos</h2>
                    <div class="photo-gallery">
                        ${destination.photos
                          .map(
                            (photo) =>
                              `<img src="${photo}" alt="Destination Photo">`
                          )
                          .join("")}
                    </div>
                </section>
            `;
      } else {
        // Se o destino não for encontrado, redireciona para uma página de erro ou página inicial
        window.location.href = "error.html";
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
