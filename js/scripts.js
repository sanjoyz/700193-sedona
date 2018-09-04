var b = document.querySelector(".hotel-button");
var modal = document.querySelector(".search-modal");
var form = document.querySelector("form.search");

var arrival = document.querySelector("#arrival-date");
var departure = document.querySelector("#departure-date");
var adults = document.querySelector("#adults-amount");
var children = document.querySelector("#children-amount");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

b.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-hide");
  modal.classList.remove("modal-error");
  if (storage) {
    adults.value = storage;
  }
  arrival.focus();
});
form.addEventListener("submit", function(evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
})
