window.MathJax = {
    jax: ["input/TeX","output/HTML-CSS"],
    tex2jax: {
	inlineMath: [ ['\\(','\\)'] ],
    },
    TeX: {
        equationNumbers: {autoNumber: "all"},
        TagSide: "left",
        TagIndent: "0em",
        Macros: {
            atoi: "\\class{atoir}{\\unicode{x3b9}}",
            amp: "\\mathbin{\\&}",
            llbracket: "[\\![",
            rrbracket: "]\\!]"
        }
    },
    "HTML-CSS": { linebreaks: { automatic: true } },
    "SVG": { linebreaks: { automatic: true } },
};