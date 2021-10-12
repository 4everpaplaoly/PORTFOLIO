// ------- gnb(Navigation) Section -------
// gnb-list를 롤오버했을 시에 각 li가 보이도록 함.
// 마우스 엔터
$("#gnb-list li").on("mouseover", function () {
  $(this).css({
    overflow: "visible"
  })
})

// 마우스 리브
$("#gnb-list li").on("mouseleave", function () {
  $(this).css({
    overflow: "hidden"
  })
})

// ------- Event Section -------
// 1. #eventList li 자동 슬라이더
function listUp() {
  $("#eventList:not(:animated)").animate({
    marginTop: "-=45px"
  }, 1000, function () {
    $(this).append($("#eventList li:eq(0)")).css({
      marginTop: 0
    })
  })
}

let timer = setInterval(listUp, 5000)

// 2. eventWrap의 화살표 클릭했을 때 각 위치만큼 이동.
// 2-1. up 화살표 클릭 시 
$("#up:not(:animated)").on("click", function () {
  setTimeout(timer, 7000);
  listUp();
})

// 2-2. down 화살표 클릭 시
function listDown() {
  $("#eventList").prepend($("#eventList li:last")).css({
    marginTop: "-45px"
  }).not(":animated").animate({
    marginTop: "+=45px"
  }, 1000)
}

$("#down").on("click", function () {
  setTimeout(timer, 7000);
  listDown();
})



// ------- Title List Section -------
// 1. Title List 사진 자동 슬라이더
// 1-1. 자동 슬라이더 되면서 Slider List에 class를 설정하는 기능 구현.
// 2. Slider List 이용해서 사진을 넘길 수 있도록 구현.


let liWidth = $("#titleList li").width();
function nextSlider() {
  // class 추가 
  $("#sliderList li a").removeClass("on");
  // 슬라이딩
  $("#titleList:not(:animated)").animate({
    marginLeft: -liWidth+"px"
  }, 1000, function(){
    $(this).append($("#titleList li:eq(0)")).css({
      marginLeft: 0
    });
    let titleListNum = $(this).children("li").attr("class").charAt(9);
    $(".slider"+titleListNum).children("a").addClass("on");
  })

}

let nextSliderTimer = setInterval(nextSlider, 2000);

// -------Best Seller Section------- 
// 1. 상품 추천 롤오버 시 add-description 클래스 추가 구현
// 마우스 엔터
$("#recommendList dd a").on("mouseenter", function (e) {
  $("#recommendList dd a").removeClass("add-description");
  $(this).addClass("add-description");
})

// 마우스 리브
$("#recommentList dd a").on("mouseleave", function (e) {
  $(this).removeClass("add-description");
})


// 2. 화살표 누르면 다음 추천, 이전 추천 상품 보이는 기능 구현
//  2-1. 왼쪽 버튼 누르면 슬라이드
$("#left").on("click", function (e) {
  e.preventDefault();
  if ($("#recommendList").css("marginLeft") <= "1500px") {
    $("#recommendList:not(:animated)").animate({
      marginLeft: "0px"
    }, 2000)
  }
})
//  2-2. 오른쪽 버튼 누르면 슬라이드
$("#right").on("click", function (e) {
  e.preventDefault();
  $("#recommendList").animate({
    marginLeft: "-1500px"
  }, 2000)
})




// -------Customer Center Section-------
// Customer Center Section의 li를 롤오버 시
// opacity: 0으로 설정했던 요소 opacity: 1로 변경.
// 마우스 엔터
$("#customerCenterList li").on("mouseenter", function () {
  $(this).children("a").not("animated").animate({
    opacity: 1
  }, 100)
})

// 마우스 리브
$("#customerCenterList li").on("mouseleave", function () {
  $(this).children("a").not("animated").animate({
    opacity: 0
  }, 800)
})


// -------Magazine Section-------
// magazine li에 오버할 시에 a의 font Size를 20px으로 변경하고
// 색깔을 rgb(133, 29, 29)로 변경.
// 마우스 엔터 
$("#magazineList li").on("mouseenter", function () {
  $(this).children("a").css({
    fontSize: "20px",
    color: "rgb(206, 45, 45)"
  })
})
// 마우스 리브
$("#magazineList li").on("mouseleave", function () {
  $(this).children("a").css({
    fontSize: "18px",
    color: "#fff"
  })
})


// ------- Footer Section -------
// footer 링크에 롤오버될 시에 폰트 굵어짐.
// 마우스 엔터
$("#snsList li").on("mouseover", function () {
  $(this).children("a").css({
    fontWeight: "bold"
  })
})

// 마우스 리브
$("#snsList li").on("mouseleave", function () {
  $(this).children("a").css({
    fontWeight: "normal"
  })
})