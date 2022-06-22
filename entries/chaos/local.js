window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true
    },
    TeX: {
	equationNumbers: {autoNumber: "all"},
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
	    amp: "\\mathbin{\\&}",
            bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2],
	    bx: "\\boldsymbol{x}",
	    by: "\\boldsymbol{y}",
	    bF: "\\boldsymbol{F}",
	    bJ: "\\boldsymbol{J}",
	    abs: ["\\left|{#1}\\right|",1]
	}
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};
