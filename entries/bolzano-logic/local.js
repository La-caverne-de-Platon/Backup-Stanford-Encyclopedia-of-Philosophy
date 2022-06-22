window.MathJax = {
    tex2jax: {
      inlineMath: [ ['\\(','\\)'] ],
    },
    TeX: {
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
	    ext: "\\mathord{\\textrm{ext}\\;}",
            bfrac: ["{^{#1}\\unicode{x2044}_{#2}}",2],
	    cr: "\\mathrm{cr}",
	    pr: "\\mathrm{pr}"
	}
    }
};
