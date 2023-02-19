// lear
// Toast Notification

window.addEventListener("DOMContentLoaded", () => {
  const switchBtn = document.querySelector(".switch-btn");
  const buttons = document.querySelectorAll(".buttons .btn");
  const notifications = document.querySelector(".notifications");

  const surpriseBtn = document.querySelector(".surprise-btn");
  const surpriseBox = document.querySelector(".surprise-box");

  // Show / Hide Surprise Box
  surpriseBtn.addEventListener("click", () => {
    surpriseBox.classList.toggle("show");
    surpriseBtn.innerHTML =
      surpriseBtn.innerHTML == '<i class="fa fa-angle-up"></i>'
        ? '<i class="fa fa-angle-down"></i>'
        : '<i class="fa fa-angle-up"></i>';
  });

  const buttonsInfo = {
    success: ["Success : This is a success toast!", "fa fa-check-circle"],
    error: ["Error : This is an error toast!", "fa fa-times-circle"],
    warning: ["Warning : This is a warning toast!", "fa fa-warning"],
    info: ["Info : This is an info toast", "fa fa-info-circle"],
  };

  // Change Background
  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
  });

  const ShowToast = (id) => {
    const listItem = document.createElement("li");
    listItem.className = `toast ${id}`;

    listItem.innerHTML = `<span>
                            <i class="${buttonsInfo[id][1]}"></i>
                            ${buttonsInfo[id][0]}
                          </span>
                          <i class="fa fa-times"></i>
    `;

    notifications.appendChild(listItem);
    setTimeout(() => listItem.classList.add("hide"), 4000);
    setTimeout(() => notifications.removeChild(listItem), 5000);
  };

  // Buttons
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => ShowToast(btn.id))
  );
});
