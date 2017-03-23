$(function(){ 
    var isClose = true;
    $(document).on("click","#nav-btn",function(){
        if(isClose){
            $(".nav-bar").addClass("open");
            isClose = false;
        }
        else{
            $(".nav-bar").removeClass("open");
            isClose = true;
        }
    })
    // 案例按钮点击
    $(document).on("click","#case-btn",function(){
        var scroll_height = $("#case-top").height();
        $('body,html').animate({scrollTop:scroll_height},300);
    })
    // 酒品介绍高度
    // var h = $(window).height() -130;
    // $(".wine-content section").css("height",h);
    // $(".mall-content section").css("height",h);

    // 筛选按钮点击
    // $(document).on("click","#portfolio-filters .btn",function(){
    //     alert(111);
    // })
    

    // 页面滚动显示
    // $(window).bind("scroll",function(){
    //     // console.log(111);
    //     var sTop = $(window).scrollTop();
    //     var section_1_top = parseInt($(".section-1").offset().top)-400;
    //     // console.log("sTop："+sTop);
    //     // console.log("section_1_top："+section_1_top);
    //     if(sTop>section_1_top){
    //         $(".section-1").addClass("active");
    //     }
    // })
})