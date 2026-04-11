const allFiles = [
    'mergeSortedArrays.js'
];

allFiles.forEach((file) => {
  const script = document.createElement("script");
  script.src = `./arrays-easy--medium/${file}`;
  document.body.appendChild(script);
});
