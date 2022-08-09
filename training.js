document.addEventListener("click", (e) => {
    if (e.target.matches(".plus")) {
      isDropdown = true;
      e.target.classList.toggle("active");
      e.target.classList.toggle("rotate");
    } else if (e.target.matches(".question h4")) {
      e.target.nextElementSibling.classList.toggle("active");
      e.target.nextElementSibling.classList.toggle("rotate");
    } else if (e.target.matches(".clarity")) {
      const backdrop = e.target.nextElementSibling;
      function toggleCurrentBackdrop() {
        backdrop.classList.toggle("visible");
      }
      toggleCurrentBackdrop();
      const currentModal = e.target.nextElementSibling.nextElementSibling;
      currentModal.classList.add("visible");
    } else if (e.target.matches(".backdrop")) {
      const modal = e.target.nextElementSibling;
      function toggleBackdrop() {
        e.target.classList.toggle("visible");
      }
      toggleBackdrop();
      function closeModal() {
        modal.classList.remove("visible");
      }
      closeModal();
    } else if (e.target.matches(".close")) {
      const currentModal = e.target.parentElement.parentElement.parentElement;
      const currentBackdrop = currentModal.previousElementSibling;
      function toggleBackdrop() {
        currentBackdrop.classList.toggle("visible");
      }
      function closeCurrentModal() {
        currentModal.classList.remove("visible");
      }
      if (currentBackdrop.classList.contains("visible")) {
        toggleBackdrop();
      }
      closeCurrentModal();
    }
  });