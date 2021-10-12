// gnb-list를 롤오버했을 시에 각 li가 보이도록 함.
$("#gnb-list li").on("mouseover", function(){
  $(this).css({
    overflow: "visible"
  })
})

$("#gnb-list li").on("mouseleave", function(){
  $(this).css({
    overflow: "hidden"
  })
})

// #eventList li 자동 슬라이더
// eventWrap의 화살표 클릭했을 때 각 위치만큼 이동.
function listUp() {
  $("#eventList:not(:animated)").animate({
    marginTop: "-=45px"
  }, 1000, function(){
    $(this).append($("#eventList li:eq(0)")).css({
      marginTop:0
    })
  })
}

let timer = setInterval(listUp, 5000)

// up 화살표 클릭 시 
$("#up:not(:animated)").on("click", function(){
  setTimeout(timer, 7000);
  listUp();
})

// down 화살표 클릭 시
function listDown() {
  $("#eventList").prepend($("#eventList li:last")).css({
    marginTop: "-45px"
  }).not(":animated").animate({
    marginTop: "+=45px"
  }, 1000)
}

$("#down").on("click", function(){
  setTimeout(timer, 7000);
  listDown();
})

// 메인 사진 자동 슬라이더
function nextSlider() {

  $("#titleList:not(:animated)").animate({
    left:"-=1000px"
  }, 2000, function() {
    $(this).append($("#titleList li:eq(0)")).css({
      
    })
  })
}

$("#recommendList dd a").on("mouseenter", function(e){
  $("#recommendList dd a").removeClass("add-description");
  $(this).addClass("add-description");
})
$("#recommentList dd a").on("mouseleave", function(e){
  $(this).removeClass("add-description");
})

$("#left").on("click", function(e){
  e.preventDefault();
  if ($("#recommendList").css("marginLeft") <= "1500px") {
    $("#recommendList:not(:animated)").animate({
      marginLeft: "0px"
    }, 2000)
  }
})
$("#right").on("click", function(e){
  e.preventDefault();
  $("#recommendList").animate({
    marginLeft: "-1500px"
  }, 2000)
})







// customer center 롤오버 시 opacity 1로 변경
$("#customerCenterList li").on("mouseenter", function(){
  $(this).children("a").not("animated").animate({
    opacity: 1
  }, 100)
})

$("#customerCenterList li").on("mouseleave", function(){
  $(this).children("a").not("animated").animate({
    opacity: 0
  }, 800)
})


// magazine li에 오버할 시에 a의 font-size를 20px로 변경한다.
// 배경화면도 좀 더 짙게. (이건 어떻게 ? )
$("#magazineList li").on("mouseenter", function(){
  $(this).children("a").css({
    fontSize: "20px"
  })
})
$("#magazineList li").on("mouseleave", function(){
  $(this).children("a").css({
    fontSize: "18px"
  })
})



// footer 링크에 롤오버될 시에 폰트 굵어짐.
$("#snsList li").on("mouseover", function(){
  $(this).children("a").css({
    fontWeight: "bold"
  })
})

$("#snsList li").on("mouseleave", function(){
  $(this).children("a").css({
    fontWeight: "normal"
  })
})