const form = document.querySelector("form");

const titleInput = form.elements["title"];
const bodyTextarea = form.elements["body"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const customValidationTitleHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("wajib diisi");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity("minimal panjang karakter Judul adalah 10");
    return;
  }
  event.target.reportValidity();
};

const customValidationBodyHandler = (event) => {
  event.target.setCustomValidity("");

  if (event.target.validity.valueMissing) {
    event.target.setCustomValidity("wajib diisi");
    return;
  }

  if (event.target.validity.tooShort) {
    event.target.setCustomValidity(
      "minimal panjang karakter Isi catatan adalah 20",
    );
    return;
  }

  if (event.target.validity.tooLong) {
    event.target.setCustomValidity(
      "maksimal panjang karakter Isi catatan adalah 200",
    );
    return;
  }
};

titleInput.addEventListener("change", customValidationTitleHandler);
titleInput.addEventListener("invalid", customValidationTitleHandler);

bodyTextarea.addEventListener("change", customValidationBodyHandler);
bodyTextarea.addEventListener("invalid", customValidationBodyHandler);

titleInput.addEventListener("blur", (event) => {
  validateInput(event);
});

bodyTextarea.addEventListener("blur", (event) => {
  validateInput(event);
});

const validateInput = (event) => {
  const isValaid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;

  const connectedValidationId = event.target.getAttribute("aria-describedby");
  const connectedValidationEl = connectedValidationId
    ? document.getElementById(connectedValidationId)
    : null;

  if (connectedValidationEl && errorMessage && !isValaid) {
    connectedValidationEl.innerText = errorMessage;
  } else {
    connectedValidationEl.innerText = "";
  }
};
