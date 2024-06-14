import React from "react";

function ColorizedText({ text }) {
  // Define an object mapping data types to colors
  const colors = {
    keyword: "#F92672", // Keywords color from Monokai theme
    string: "#E6DB74", // Strings color from Monokai theme
    comment: "#75715E", // Comments color from Monokai theme
    number: "#AE81FF", // Numbers color from Monokai theme
    default: "#839496", // Foreground color from Solarized Dark theme for other words
    callback: "#E51CDF",
  };

  // Split the text into an array of words
  const words = text.toLowerCase().split(/\b/);
  console.log(words);
  return (
    <pre className="" style={{ display: "inline", whiteSpace: "pre-wrap" }}>
      {words.map((word, index) => {
        // Determine the data type of the word
        let dataType = "default";
        if (["const", "let", "var", "log"].includes(word)) {
          dataType = "keyword";
        } else if (word.startsWith("//")) {
          dataType = "comment";
        } else if (
          ["(", "async", "await", "promise", "import", "from"].includes(word)
        ) {
          dataType = "callback";
        } else if (/^['"]/.test(word)) {
          dataType = "string";
        } else if (!isNaN(parseFloat(word))) {
          dataType = "number";
        }

        // Apply color based on the data type
        const color = colors[dataType];

        return (
          <span key={index} style={{ color }}>
            {word}
          </span>
        );
      })}
    </pre>
  );
}

export default ColorizedText;
