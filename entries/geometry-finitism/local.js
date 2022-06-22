window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true
    },
    TeX: {
	equationNumbers: {autoNumber: "none"},
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
	    amp: "\\mathbin{\\&}",
            bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2],
	    llbracket: "[\\![",
	    rrbracket: "]\\!]"
	}
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};
