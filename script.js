window.onload = () => {
  const items = document.querySelectorAll(".app-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 200); // Delay for staggered animation
  });
};
