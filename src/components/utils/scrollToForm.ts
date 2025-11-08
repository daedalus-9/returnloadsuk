export const scrollToForm = () => {
  const section = document.getElementById("form");
  if (!section) return;

  const navbarHeight = 80; // adjust to match your navbar height
  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
