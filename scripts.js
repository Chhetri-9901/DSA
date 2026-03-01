const allFiles = [
    'countDigitsQ1.js'
];

allFiles.forEach((file) => {
  const script = document.createElement("script");
  script.src = `./js-questions/${file}`;
  document.body.appendChild(script);
});
