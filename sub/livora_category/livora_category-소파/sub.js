$(document).ready(function () {

    // ========== 페이지 전환 기능 ==========

    $('.LivoraSubTypePage').hide();
    $('.LivoraSubTypePage.first').show();
    $('.LivoraSubButton .firstButt').addClass('active');

    function showPage(index) {
        $('.LivoraSubTypePage').hide();
        $('.LivoraSubTypePage').eq(index).show();
        $('.LivoraSubButton .Button').removeClass('active');
        $('.LivoraSubButton .Button').eq(index).addClass('active');
    }

    $('.LivoraSubButton .Button').on('click', function () {
        const index = $(this).index('.LivoraSubButton .Button');
        showPage(index);
    });


    // ========== 상세보기 탭 기능 ==========

    const tabMappings = [
        // First 페이지 (1-6)
        { trigger: '.FirstTabOne', target: '.TabOne1st' },
        { trigger: '.FirstTabTwo', target: '.TabTwo1st' },
        { trigger: '.FirstTabThree', target: '.TabThree1st' },
        { trigger: '.FirstTabFour', target: '.TabFour1st' },
        { trigger: '.FirstTabFive', target: '.TabFive1st' },
        { trigger: '.FirstTabSix', target: '.TabSix1st' },
        // Second 페이지 (7-12)
        { trigger: '.SecondTabOne', target: '.TabOne2nd' },
        { trigger: '.SecondTabTwo', target: '.TabTwo2nd' },
        { trigger: '.SecondTabThree', target: '.TabThree2nd' },
        { trigger: '.SecondTabFour', target: '.TabFour2nd' },
        { trigger: '.SecondTabFive', target: '.TabFive2nd' },
        { trigger: '.SecondTabSix', target: '.TabSix2nd' },
        // Third 페이지 (13-18)
        { trigger: '.ThirdTabOne', target: '.TabOne3rd' },
        { trigger: '.ThirdTabTwo', target: '.TabTwo3rd' },
        { trigger: '.ThirdTabThree', target: '.TabThree3rd' },
        { trigger: '.ThirdTabFour', target: '.TabFour3rd' },
        { trigger: '.ThirdTabFive', target: '.TabFive3rd' },
        { trigger: '.ThirdTabSix', target: '.TabSix3rd' }
    ];


    // ====== 오버레이 기능: HTML에 #overlay 넣어놔야 함 ======
    // <div id="overlay"></div>

    // 상세보기 탭 열기
    function openTab(tab) {
        $(tab).fadeIn(200);
        $("#overlay").fadeIn(200);
    }

    // 상세보기 탭 닫기
    function closeTab() {
        $('.HideTab').fadeOut(200);
        $("#overlay").fadeOut(200);
    }


    // 상세보기 트리거 클릭 시
    tabMappings.forEach(function (mapping) {
        $(mapping.trigger).on('click', function () {
            openTab(mapping.target);
        });
    });

    // 닫기 버튼으로 닫기
    $('.hideButton').on('click', function () {
        closeTab();
    });

    // 오버레이 클릭 시 닫기
    $("#overlay").on("click", function () {
        closeTab();
    });

    // ESC 키로 닫기
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            closeTab();
        }
    });

    // 탭 내부 빈 공간 클릭 닫기(원하면 유지)
    $('.HideTab').on('click', function (e) {
        if (e.target === this) {
            closeTab();
        }
    });

    $(document).ready(function () {
        // 장바구니 담기 버튼을 클릭했을 때 실행
        $('.add-to-cart-btn').on('click', function () {
            // 1. 버튼에 적힌 상품 이름과 가격을 가져옵니다.
            const name = $(this).data('name');
            const price = $(this).data('price');

            // 2. 이미 만들어둔 addToCart 함수를 실행합니다.
            // (이 함수는 cart.js에 정의되어 있어야 합니다)
            if (typeof addToCart === 'function') {
                addToCart(name, price);
            } else {
                console.error("장바구니 기능(cart.js)이 연결되지 않았습니다.");
            }
        });
    });
});
