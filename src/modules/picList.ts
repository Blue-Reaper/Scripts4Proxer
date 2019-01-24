// Zeigt Bilder in den Listenansichten an

// IDEA use same Cookie than grid-list and add Buttons to switch List -> Grid

pefModulList.push({
    id:"picList",
    name:"Picture List",
    description:"Bilder statt Listen",
    autor:"Blue.Reaper",
	callMethod:(change)=>picListCall(change)
});

function picListCall (change:ModulCallEvent) {
	switch(change) {
		case ModulCallEvent.on:
			picList();
			break;
		case ModulCallEvent.off:
			break;
		case ModulCallEvent.ajax:
            picList();
			break;
	}
}

function picList(){
    // console.log(window.location.pathname);
    // only in specific locations
    if ((window.location.pathname !== '/manga/updates' && window.location.pathname !== '/anime/updates'){
		return;
	}

    // don't show Table-Liste
    $('.inner table').css("display","none");

    // Grid-List not added
    if(!$('.infocell').length){
        let temp = $('tr');
        temp.each((idx, tr)=>{
            // skip table header
            if($(tr).find('th').length){
                console.log("skip header");
                return true;
            }
                let mainLink = $(tr).find('td:nth-child(2) a');

                let box = $('<div class="infocell"></div>');

                let boxLink = $('<a href="'+mainLink.attr("href")+'" data-ajax="true"></a>');
                // Cover
                boxLink.append($('<img class="coverimage" src="//cdn.proxer.me/cover/'+mainLink.attr("href").split('/')[2]+'.jpg">'));
                box.append(boxLink);
                // Title and Status (eg: Airing)
                box.append($('<div>').append(mainLink).append($(tr).find('td:nth-child(1) img')));
                // language and Date
                box.append($('<div>').append($(tr).find('td:nth-child(3) img')).append($(tr).find('td:nth-child(6)').text()));
                // Uploader
                box.append($('<div>').append($(tr).find('td:nth-child(5) a')));
                $('.inner').append(box);
                // UserStatus (eg: Rading)
        });
        $('.inner').append($('<div class="clear"/>'))
    } else {
        // add read-status
        let temp = $('.infocelltriangle');
        temp.each((idx, status)=>{
            $('.infocell').eq(idx).css("border-top-color",$(status).css("border-top-color"));
        });
    }

}