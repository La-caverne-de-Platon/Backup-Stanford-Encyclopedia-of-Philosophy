window.MathJax = {
    TeX: {
        TagSide: "left",
        TagIndent: "0em",
	extensions: ["cancel.js"],
        Macros: {
	    amp: "\\mathbin{\\&}",
	    Diamond: "\\unicode{x2B26}",
	    medsquare: "{\\small \\Box}",
	    meddiamond: "\\unicode{x2B26}",
	    leftmodels: "{\\class{mirror}\\vDash}",
	    strictif: "\\mathbin{\\unicode{x297d}}",
	    dequal: "\\mathrel{:=}",
	    set: ["\\{#1\\}",1],
	    llbracket: "[\\![",
	    rrbracket: "]\\!]"
	}
    }
};
