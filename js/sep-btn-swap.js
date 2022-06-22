// homepage search button shift

$(document).ready(function() {
	$('#search-text').keyup( function() {
		if($(this).val()=='') {
		    $('#search-switch').replaceWith('<a id="search-switch" class="btn btn-advanced-search" href="search/searcher.py"><span id="switch-text"><i class="icon-question"></i> Search Tips</span></a>');
		} else {
		    $('#search-switch').replaceWith('<button id="search-switch" class="btn btn-advanced-search" type="submit"><span id="switch-text"><i class="icon-search"></i> Search</span></button>');
		}
	    });
    });
