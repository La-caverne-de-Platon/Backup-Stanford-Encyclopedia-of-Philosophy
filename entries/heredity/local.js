window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true
    },
    TeX: {
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
            bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2],
	    COV: "\\mathrm{COV}",
	    rC: "\\mathrm{C}",
	    rE: "\\mathrm{E}",
	    MZ: "\\textrm{MZ}",
	    DZ: "\\textrm{DZ}"
	}
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};
