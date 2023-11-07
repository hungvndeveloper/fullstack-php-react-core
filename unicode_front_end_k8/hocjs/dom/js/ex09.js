var openModal = document.querySelectorAll('[data-toggle="modal"]');
if (openModal.length) {
  openModal.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      var targetModal = this.dataset.target;

      var modal = document.querySelector(targetModal);
      // var modalClose = modal.querySelector(".close");
      var duration = modal.dataset.duration ?? 400;

      if (
        modal.dataset.animation == undefined ||
        modal.dataset.animation == "true"
      ) {
        modal.style.transition = `all ${duration}ms linear`;
      }

      var modalBg = document.createElement("div");
      modalBg.classList.add("modal-bg");

      modal.classList.add("show");

      document.body.appendChild(modalBg);

      var handleCloseModal = function () {
        modal.classList.remove("show");
        document.body.removeChild(modalBg);
      };

      document.addEventListener("keyup", function (e) {
        if (e.code === "Escape") {
          handleCloseModal();
        }
      });

      modalBg.addEventListener("click", handleCloseModal);

      var dismissModal = document.querySelectorAll('[data-dismiss="modal"]');
      if (dismissModal.length) {
        dismissModal.forEach(function (dismiss) {
          dismiss.addEventListener("click", function (e) {
            e.preventDefault();
            handleCloseModal();
          });
        });
      }
    });
  });
}
