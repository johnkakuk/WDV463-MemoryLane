window.addEventListener("load", () => {
  const siteTitle = document.querySelector(".site-title");
  if (!siteTitle) return;

  const originalContent = siteTitle.innerHTML;
  const newContent = `${originalContent}_`;

  let toggle = true;

  setInterval(() => {
    siteTitle.innerHTML = toggle ? newContent : originalContent;
    toggle = !toggle;
  }, 750);
});
