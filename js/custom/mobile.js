/**
 * Created by zhe cheng on 2016/3/12.
 */
//this is the picture function*/


var dataTiles=[];
var preul="<ul class='list-group' id=item> ";
var preli="<li class='' style='list-style-type:none'>";
var predivrow="<div class='row'>";
var predivcol1="<div class='col-md-1' id='box' >";
var predivcol11="<div class='col-md-1'>";
var predivcol10="<div class='col-md-10'>";
var precheckimg='<img class="check" src="';
var preemptyimg='<img id="check" src="';
var prestack='<img class="stack" src="';
var imgstack="images/icons/stack.png";
var imgcheck="images/icons/check.png";
var imgempty="images/icons/empty.png";
var postimg='">';
var postdiv="</div>";
var postli="</li>";
var postul="</ul>";
var checkIcon="images/icons/check.png";
var emptyIcon="images/icons/empty.png";
var stackIcon="images/icons/stack.png";
var minus=precheckimg+checkIcon+postimg;
var plus=precheckimg+emptyIcon+postimg;
//
//$(document).ready(function() {
//    $("#box").click( function(){
//        var imgccc=$(minus).attr("class");
//        var imgeee=$(plus).attr("id");
//        $(".check").attr=
//});

$(document).ready(function(){
    $.ajax({
        url: 'jason/tiles.json',
        error: function(data) {
            console.log(" Ajax call fails");
        },
        dataType: 'json',
        success: function(data) {
            console.log("Ajax call success");
            var length1=data.Tiles.length;
            for(var i=0;i<length1;i++) {
                var urlImge = data.Tiles[i].TileProperties.HomeURL;
                var caption1 = data.Tiles[i].Caption;

                $(".content").append("<div class=row" + i + "></div>").css({
                    "width": "900px",
                    "height": "900px",
                    "display": "inline-block",
                    "padding": "0",
                    "margin": "0"
                });
                if (i % 4 === 0&&i!==0) {
                    $(".content").append("<br>")
                }
                $(".row" + i).css({
                    "width": "200px",
                    "height": "200px",
                    "display": "inline-block",
                    "border": "1px solid white",
                    "padding": "0",
                    "margin": "0",
                    "background-image": "url(" + urlImge + ")",
                    "font": " Times New Roman, Georgia, Serif;",
                    "color": "white"
                }).append(caption1);
            }

            for(i=0;i<length1;i++){
                dataTiles[i]={value: data.Tiles[i], display: 1};
                var minus=$(minus).attr('src'.checkIcon);
                var caption2 = dataTiles[i].value.Caption;
                if($(minus).attr('src')==checkIcon){
                    innerHTML=preul+preli+predivrow+predivcol1+precheckimg+imgcheck+postimg+postdiv+predivcol10+caption2+postdiv+predivcol11+prestack+imgstack+postimg+postdiv+postdiv+postli+postul;
                }else{
                    innerHTML=preul+preli+predivrow+predivcol1+preemptyimg+imgempty+postimg+postdiv+predivcol10+caption2+postdiv+predivcol11+prestack+imgstack+postimg+postdiv+postdiv+postli+postul;
                }
                $(".itemlist1").append(innerHTML);
            }
        },
        type: 'GET'
    });

});
/*this is the gear function*/
$(document).ready(function(){
    console.log("sdas");
    $("#gear").click(function() {
        console.log("sdas456");
        $("#page1").hide();
        $(".menu").show();

    });

});

////

//
//$(document).ready(function(){
//    $(".itemlist1.li.check").click(function(){
//        console.log()
//
//        var index=$(this).parent().index();
//        if(dataTiles[index].display==1){
//            $(this).attr('src', emptyIcon);
//            dataTiles[index].display=0;
//        }
//        else{
//            $(this).attr('src', checkIcon);
//            dataTiles[index].display=1;
//        }
//    });
//});
$(document).ready(function() {
    var minus=$(minus).attr('src'.checkIcon);
    $("#row").click( function(){
        if (minus.src == checkIcon) {
            minus.src = emptyIcon;
        } else if(minus.src==emptyIcon)
        {
            minus.src = checkIcon;
        }
    });
});
