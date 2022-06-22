window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true
    },
    TeX: {
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
            bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2]
	}
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};
