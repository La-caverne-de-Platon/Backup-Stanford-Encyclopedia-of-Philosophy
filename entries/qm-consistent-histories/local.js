window.MathJax = {
    tex2jax: {


    },
    TeX: {
      equationNumbers: {autoNumber: "all", useLabelIds: "true"},
      TagSide: "left",
      TagIndent: "0em",
      Macros: {
            EC: "{\\mathcal E}",
            FC: "{\\mathcal F}",
            HC: "{\\mathcal H}",
            MC: "{\\mathcal M}",
            PC: "{\\mathcal P}",
            QC: "{\\mathcal Q}",
            SC: "{\\mathcal S}",
	    ket: ["{\\lvert #1 \\rangle}",1],
	    inp: ["{\\langle #1 \\mid #1 \\rangle}",1],
	    inpd: ["{\\langle #1 \\mid #2 \\rangle}",2],
	    dya: ["{\\lvert #1 \\rangle\\langle #1 \\rvert}",1],
	    dyad: ["{\\lvert #1 \\rangle\\langle #2 \\rvert}",2],
	    mte: ["{\\langle #1 \\mid #2 \\mid #1 \\rangle}",2]
      }
    }
};
