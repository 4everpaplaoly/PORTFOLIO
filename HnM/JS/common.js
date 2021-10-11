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
  $("#eventList").css({
    marginTop: "-=45px"
  })
}
