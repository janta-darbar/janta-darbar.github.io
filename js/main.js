function lookUpItinerary(){
	var target = "goa";
	var jsonresponse = '{"placesToVisit":{"Panaji":{"popularityQuotient":"1","image":{"carousel":[{"img":"image1.jpg","desc":"image brief(30 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"image brief(30 words max) to accompany the carousel image2.jpg"}]},"thumbs":[{"img":"image1.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image2.jpg"}],"desc":{"mini":"This is the panaji one - liner","long":"This is a relatively longer description of Panaji.Can contain multiple Paragraphs. "}},"Anjuna":{"popularityQuotient":"3","image":{"carousel":[{"img":"image1.jpg","desc":"image brief(30 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"image brief(30 words max) to accompany the carousel image2.jpg"}]},"thumbs":[{"img":"image1.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image2.jpg"}],"desc":{"mini":"This is the panaji one - liner","long":"This is a relatively longer description of Panaji.Can contain multiple Paragraphs. "}},"Cola":{"popularityQuotient":"2","image":{"carousel":[{"img":"image1.jpg","desc":"image brief(30 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"image brief(30 words max) to accompany the carousel image2.jpg"}]},"thumbs":[{"img":"image1.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image2.jpg"}],"desc":{"mini":"This is the panaji one - liner","long":"This is a relatively longer description of Panaji.Can contain multiple Paragraphs. "}},"Dhoodhsagar":{"popularityQuotient":"4","image":{"carousel":[{"img":"image1.jpg","desc":"image brief(30 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"image brief(30 words max) to accompany the carousel image2.jpg"}]},"thumbs":[{"img":"image1.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image2.jpg"}],"desc":{"mini":"This is the panaji one - liner","long":"This is a relatively longer description of Panaji.Can contain multiple Paragraphs. "}},"Bagha":{"popularityQuotient":"3","image":{"carousel":[{"img":"image1.jpg","desc":"image brief(30 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"image brief(30 words max) to accompany the carousel image2.jpg"}]},"thumbs":[{"img":"image1.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image1.jpg"},{"img":"image2.jpg","desc":"Short one-liner(10 words max) to accompany the carousel image2.jpg"}],"desc":{"mini":"This is the panaji one - liner","long":"This is a relatively longer description of Panaji.Can contain multiple Paragraphs. "}}},"itineryData":{"id":"GA_IT_001","location_id":"GA_IND","it_data":{"days":"4","specifics":{"1":{"location":"Arrival","desc":"Arrive at APT,Move to Hotel,Evening Free"},"2":{"location":"Panaji","desc":"Fuck around through out the day in Panaji"},"3":{"location":"Bagha","desc":"Roam around for a chance to fuck a white chick and be one-shade darker by the day-end"},"4":{"location":"Departure","desc":"No gain all in vain."}}}},"check":"success"}';
	data = JSON.parse(jsonresponse);
	console.log(data);
	if(data.check=="success"){
		var itineraryData = data.itineryData;
		displayItinerary(itineraryData);
			$("#LocationSearchResultSection").fadeIn();

	}else{
		console.log("Some error occured !");
	}
	// $.ajax({
	// 	url : "engine/ajax/getLocationSpecificData.php",
	// 	data : {"target":target},
	// 	success: function(response){
	// 		data = JSON.parse(response);
	// 		console.log(data);
	// 		if(data.check=="success"){
	// 			var itineraryData = data.itineryData;
	// 			displayItinerary(itineraryData);
	// 				$("#LocationSearchResultSection").fadeIn();

	// 		}else{
	// 			console.log("Some error occured !");
	// 		}
	// 	}
	// });
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