//DATA
const datastructureNames = [
  "single linked list",
  "double linked list",
  "min heap",
  "max-heap",
  "circular linked list",
  "BST Binary search tree",
  "AVL tree",
  "Red black Tree",
  "B tree",
  "graph",
  "tree",
  "hash table",
  "hash map",
  "tree map",
  "priority queue",
  "heap",
  "queue",
  "stack",
  "set",
  "binary tree",
];
const algorithmNames = [
  "quick sort",
  "insertion sort",
  "bubble sort",
  "radix sort",
  "shell sort",
  "merge sort",
  "heap sort",
  "divide and conquer",
  "back tracking",
  "recursion",
  "binary search",
  "DFS Depth first search",
  "BFS breadth first serach",
  "heapify",
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
  datastructureNames.sort().forEach((dsName) => {
    html += `<div class="data-structure-name"> ${dsName}</div>`;
  });

  dsBody.innerHTML = html;

  dsCount.innerHTML = datastructureNames.length;
}

function renderAlgorithmNames() {
  const dsBody = document.querySelector(".algorithm-names .section-body");
  const dsCount = document.querySelector(".algorithm-names .count");
  let html = "";
  algorithmNames.sort().forEach((dsName) => {
    html += `<div class="algorithm-name"> ${dsName}</div>`;
  });

  dsBody.innerHTML = html;

  dsCount.innerHTML = algorithmNames.length;
}

const notes=[{
  
}];