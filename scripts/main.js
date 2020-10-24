function init(){
	bindClickEvents();
}
function bindClickEvents(){
	$("#navigation-sidebar li").on("click",function(){setNavActive(this);});
}

function setNavActive(data){
	$("#navigation-sidebar .active").removeClass("active");
	$(data).find("a").addClass("active");
}

init();