window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true,
    },
    "HTML-CSS": { linebreaks: { automatic: true }},
    SVG:        { linebreaks: { automatic: true }},
    TeX: {
      equationNumbers: {autoNumber: "all", useLabelIds: "true"},
      TagSide: "left",
      TagIndent: "0em",
      Macros: {
            // Note: we must put these in macros or browsers sometimes
            // wrap the line after the opening parenthesis or quote!
            refp: ["(\\ref{#1})", 1],
            dq: ["{\\text{“}#1\\text{”}}", 1],
            cq: ["{\\ulcorner #1 \\urcorner}", 1],
            and: "\\,\\&\\,",
      }
    }
};
