window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
      processEscapes: true
    },
    TeX: {
	extensions: ["mhchem.js"],
        Macros: {
	    bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2],
	    bp: "{\\mathbf{p}}",
	    bH: "{\\mathbf{H}}",
	    bJ: "{\\mathbf{J}}",
	    bL: "{\\mathbf{L}}",
	    bS: "{\\mathbf{S}}",
	    KOp: "{\\mathrm{K}^{0'}}",
	    iso: ["{\\mathrm{^{#1}{#2}}}",2],
	    rmn: ["{\\mathrm{#1}}",1],
	}
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};
