const anime = require("animejs").default;

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const showLoading = (element) => {
  element.style.display = "block";
};

export const hideLoading = (element) => {
  element.style.display = "none";
};

export const animeToNote = (element) => {
  anime({
    targets: element,
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600,
    easing: "easeOutQuad",
  });
};

export const animeOutFromNote = (element) => {
  anime({
    targets: element,
    scale: [1, 0],
    opacity: [1, 0],
    duration: 500,
    easing: "easeInQuad",
  }).finished;
};
