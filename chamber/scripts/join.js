document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#timestamp").value =
        new Date().toISOString();

    const links = document.querySelectorAll("[data-modal]");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const modalId = link.dataset.modal;
            document.getElementById(modalId).showModal();
        });
    });

    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach(dialog => {

        dialog.querySelector(".close-modal")
            .addEventListener("click", () => {
                dialog.close();
            });

        dialog.addEventListener("click", (event) => {
            const rect = dialog.getBoundingClientRect();

            const inside =
                rect.top <= event.clientY &&
                event.clientY <= rect.bottom &&
                rect.left <= event.clientX &&
                event.clientX <= rect.right;

            if (!inside) {
                dialog.close();
            }
        });
    });
});
