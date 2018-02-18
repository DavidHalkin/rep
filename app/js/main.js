$(document).ready(function(){
    $(".btn_open_modal_authorization__js").click(function(){
        $(".modal_authorization").addClass("opened");
        $(".modal_main__js").addClass("closed");
        return false;
    });
     $(".btn_back__js").click(function(){
        $(".modal_authorization").removeClass("opened");
        $(".modal_main__js").removeClass("closed");
        return false;
    });
});