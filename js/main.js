function lookUpItinerary(){
	var target = "goa";
	$.ajax({
		url : "engine/ajax/getLocationSpecificData.php",
		data : {"target":target},
		success: function(response){
			data = JSON.parse(response);
			console.log(data);
			if(data.check=="success"){
				var itineraryData = data.itineryData;
				displayItinerary(itineraryData);
					$("#LocationSearchResultSection").fadeIn();

			}else{
				console.log("Some error occured !");
			}
		}
	});
}

function displayItinerary(data){
	var days = parseInt(data.it_data.days);
	var it_specifics = data.it_data.specifics;
	var itineraryHolderHtml = '';


	for(key in it_specifics){
		var location = it_specifics[key].location;
		var descript = it_specifics[key].desc;
		itineraryHolderHtml 	+= 	'	<div class="panel panel-default">';
		itineraryHolderHtml		+=	'		<div class="panel-heading">';
		itineraryHolderHtml		+=	'			<a href="#collapse'+key+'" data-toggle="collapse" data-parents="asda">Day '+key+'</a>';
		itineraryHolderHtml		+=	'		</div>';
		itineraryHolderHtml		+=	'	</div>';

		itineraryHolderHtml		+=	'	<div id="collapse'+key+'" class="pane-collapse collapse ';
		if(key==1){
			itineraryHolderHtml += ' in';
		}else{
			itineraryHolderHtml += ' out';
		}
		itineraryHolderHtml 		+='">'
		itineraryHolderHtml		+= '		<div class="panel-body">';
		itineraryHolderHtml		+= '			<div class="row" style="font-style: italic;">';
		itineraryHolderHtml		+= '				<div class="col-sm-4">';
		itineraryHolderHtml		+= '					<p>'+location+'</p>';
		itineraryHolderHtml		+= '				</div>';
		itineraryHolderHtml		+= '				<div class="col-sm-4">';
		itineraryHolderHtml		+= '					<p>'+descript+'</p>';
		itineraryHolderHtml		+= '				</div>';
		itineraryHolderHtml		+= '				<div class="col-sm-4">';
		itineraryHolderHtml		+= '					<img src="images/goa-beach.jpg" class="img-circle" alt="Cinque Terre" width="120" height="100">';
		itineraryHolderHtml		+= '				</div>';
		itineraryHolderHtml		+= '			</div>';
		itineraryHolderHtml		+= '		</div>';
		itineraryHolderHtml		+= '	</div>';
	}
	$("#itineraryHolderDiv").html(itineraryHolderHtml);


}