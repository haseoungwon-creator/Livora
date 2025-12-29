$(document).ready(function () {

    // ========== 상세보기 탭 매핑 ==========
    const tabMappings = [
        // 인기 가구
        { trigger: '.popular-item-1', target: '.PopularTab1' },
        { trigger: '.popular-item-2', target: '.PopularTab2' },
        { trigger: '.popular-item-3', target: '.PopularTab3' },
        { trigger: '.popular-item-4', target: '.PopularTab4' },
        // 신상품
        { trigger: '.new-item-1', target: '.NewTab1' },
        { trigger: '.new-item-2', target: '.NewTab2' },
        { trigger: '.new-item-3', target: '.NewTab3' },
        { trigger: '.new-item-4', target: '.NewTab4' },
        // 할인 특가
        { trigger: '.sale-item-1', target: '.SaleTab1' },
        { trigger: '.sale-item-2', target: '.SaleTab2' },
        { trigger: '.sale-item-3', target: '.SaleTab3' },
        { trigger: '.sale-item-4', target: '.SaleTab4' },
        // 추천 세트
        { trigger: '.set-item-1', target: '.SetTab1' },
        { trigger: '.set-item-2', target: '.SetTab2' },
        { trigger: '.set-item-3', target: '.SetTab3' },
        { trigger: '.set-item-4', target: '.SetTab4' }
    ];

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

    // 탭 내부 빈 공간 클릭 시 닫기
    $('.HideTab').on('click', function (e) {
        if (e.target === this) {
            closeTab();
        }
    });
});

$(document).ready(function() {
    // 장바구니 담기 버튼을 클릭했을 때 실행
    $('.add-to-cart-btn').on('click', function() {
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