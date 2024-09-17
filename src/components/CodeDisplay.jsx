import React, { useEffect, useState, useRef } from "react";
import { createHighlighter } from "shiki";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

export default function CodeDisplay({ code, language }) {
  const [html, setHtml] = useState("");
  const codeRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    async function highlightCode() {
      const highlighter = await createHighlighter({
        lang: language,
      });

      await highlighter.loadTheme("github-dark");
      await highlighter.loadLanguage(language);

      const displayedCode = highlighter.codeToHtml(code, {
        lang: language,
        theme: "github-dark",
        transformers: [
          transformerNotationDiff(), // [!code ++] // [!code --]
          transformerNotationHighlight(), // [!code highlight]
          transformerNotationFocus(), // [!code focus]
        ],
      });
      setHtml(displayedCode);
    }

    highlightCode();
  }, [code, language]);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText);
      buttonRef.current.innerText = "Copied!";

      buttonRef.current.classList.add("btn-clicked");

      setTimeout(() => {
        buttonRef.current.classList.remove("btn-clicked");
        buttonRef.current.innerText = "Copy";
      }, 3000);
    }
  };

  return (
    <div className="px-10">
      <button
        ref={buttonRef}
        onClick={copyToClipboard}
        className="btn btn-secondary bg-transparent desktop-only text-light"
        style={{
          position: "absolute",
          right: "11.5rem",
          top: "7rem",
        }}
      >
        Copy
      </button>
      <div ref={codeRef} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
