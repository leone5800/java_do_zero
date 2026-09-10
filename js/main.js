// Alterna entre os painéis de tópicos usando o menu lateral.
const topicButtons = document.querySelectorAll(".topic-btn");
const topicPanels = document.querySelectorAll(".topic-panel");

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    topicButtons.forEach((b) => b.classList.remove("is-active"));
    topicPanels.forEach((p) => p.classList.remove("is-active"));

    button.classList.add("is-active");
    document.getElementById(targetId).classList.add("is-active");

    document.querySelector(".content-area").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
