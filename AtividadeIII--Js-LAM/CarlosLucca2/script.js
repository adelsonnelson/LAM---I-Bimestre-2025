function adicionarTarefa() {
    const input = document.getElementById("nova-tarefa");
    const texto = input.value.trim();
  
    if (texto !== "") {
      const ul = document.getElementById("lista-tarefas");
      const li = document.createElement("li");
      li.textContent = texto;
  
      li.addEventListener("click", () => {
        li.classList.toggle("riscado");
      });
  
      ul.appendChild(li);
      input.value = "";
    }
  }
  