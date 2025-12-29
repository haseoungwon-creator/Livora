$(document).ready(function () {

    // ========== 상세보기 탭 기능 (8개 상품) ==========

    const tabMappings = [
        { trigger: '.FirstTabOne', target: '.TabOne1st' },
        { trigger: '.FirstTabTwo', target: '.TabTwo1st' },
        { trigger: '.FirstTabThree', target: '.TabThree1st' },
        { trigger: '.FirstTabFour', target: '.TabFour1st' },
        { trigger: '.FirstTabFive', target: '.TabFive1st' },
        { trigger: '.FirstTabSix', target: '.TabSix1st' },
        { trigger: '.SecondTabOne', target: '.TabOne2nd' },
        { trigger: '.SecondTabTwo', target: '.TabTwo2nd' }
    ];

    // ====== 오버레이 기능 ======
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

    // 탭 내부 빈 공간 클릭 닫기
    $('.HideTab').on('click', function (e) {
        if (e.target === this) {
            closeTab();
        }
    });

    // ========== 장바구니 담기 버튼 기능 ==========
    $('.add-to-cart-btn').on('click', function () {
        const name = $(this).data('name');
        const price = $(this).data('price');

        if (typeof addToCart === 'function') {
            addToCart(name, price);
        } else {
            console.error("장바구니 기능(cart.js)이 연결되지 않았습니다.");
        }
    });
});