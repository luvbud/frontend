// 모달에 값 넘기기
$(document).on("click", ".learn-button", function() {
    let flag = $(this).data('id');
    let modalButton = document.getElementsByClassName(".modal-footer");

    console.log(flag);
    console.log(modalButton);
    
    // flag가 word 일 경우 상세 학습이다.
    if(flag == "word") {
        console.log("hello!");
        let b = "";
        b = b.concat("<button type='button' class='btn btn-secondary'>이전</button>");
        b = b.concat("<button type='button' class='btn btn-primary'>다음</button>");

        modalButton.innerHTML = b;
    }
    // flag가 word가 아닐 경우 돋보기 아이콘
    else {
        let b = "";
        b = b.concat("<button type='button' class='btn btn-secondary' data-dismiss='modal'>닫기</button>");
        b = b.concat("<button type='button' class='btn btn-primary' onclick='location.href=trendywords.html'>더 학습하기</button>");
        
        modalButton.innerHTML = b;
    }
});