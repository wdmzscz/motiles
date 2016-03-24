/**
 * Created by zhe cheng on 2016/3/13.
 */
$(document).ready(function() {
    for(var i=1;i<=16;i++){

        $(".content").append("<div class=row>a</div>").css({
            "width": "500px",
            "height": "500px",
            "display": "inline-block",
            "border": "1px solid"
        });
        if(i%4==0){
            $(".content").append("<br>")
        }
        $(".row").css({
            "width": "100px",
            "height": "100px",
            "display": "inline-block",
            "border": "1px solid"
        });
    }

});