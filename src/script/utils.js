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
