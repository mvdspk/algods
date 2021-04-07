//DATA
const datastructureNames = [
  "single linked list",
  "double linked list",
  "min heap",
  "max-heap",
];
const algorithmNames = [
  "quick sort",
  "insertion sort",
  "bubble sort",
  "radix sort",
  "shell sort",
  "merge sort",
  "heap sort",
];

// view
document.querySelector("body").onload = () => {
  renderDataStructureNames();
  renderAlgorithmNames();
};

function renderDataStructureNames() {
  const dsBody = document.querySelector(".data-structure-names .section-body");
  const dsCount = document.querySelector(".data-structure-names .count");
  let html = "";
  datastructureNames.forEach((dsName) => {
    html += `<div class="data-structure-name"> ${dsName}</div>`;
  });

  dsBody.innerHTML = html;

  dsCount.innerHTML = datastructureNames.length;
}

function renderAlgorithmNames() {
  const dsBody = document.querySelector(".algorithm-names .section-body");
  const dsCount = document.querySelector(".algorithm-names .count");
  let html = "";
  algorithmNames.forEach((dsName) => {
    html += `<div class="algorithm-name"> ${dsName}</div>`;
  });

  dsBody.innerHTML = html;

  dsCount.innerHTML = datastructureNames.length;
}
