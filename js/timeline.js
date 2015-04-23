function drawTimeline(){
	// testing
	for ( var i = 1900; i < 1970; i ++ ){
		drawEvent( i );
	}
	selectYear( 1900 );
}

function drawEvent( year ){
	var $div = $( "<div>" )
		.attr( "class", "timeline-year" )
		.attr( "id", "year" + year )
		.appendTo( "#timeline-inner" );
}

function selectYear( year ){
	if ( !$( "#year" + year).length ) return;
	var left = -$( "#year" + year).index() * $( ".timeline-year" ).outerWidth()
			+ ( $( "#timeline" ).width()  - $( ".timeline-year" ).outerWidth() ) / 2; // center
	$( "#timeline-inner" ).css( "left", left + "px" )
	$( ".timeline-year.active" ).removeClass( "active" );
	$( "#year" + year).addClass( "active" );
	$( "#year" ).html( year );

	AppVars.selectedYear = year;
}

function advanceTimeline(){
	if ( AppVars.selectedYear == undefined ) return;
	selectYear( AppVars.selectedYear + 1 );
}

function rewindTimeline(){
	if ( AppVars.selectedYear == undefined ) return;
	selectYear( AppVars.selectedYear - 1 );
}