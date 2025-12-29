let msnry;
const $grid = $('#gallery');
function updateGalleryHeight() {
    const el = document.getElementById('gallery');
    if (!el) return;
    if (msnry && typeof msnry.maxY === 'number') {
        el.style.height = msnry.maxY + 'px';
    } else {
        el.style.height = el.scrollHeight + 'px';
    }
}
$(document).ready(function () {
    $('#LivoraMainHeader .subnav > span').css('height', '0');
    $(window).on('scroll', function () {
        topval = $(this).scrollTop();
        console.log(topval);
        // let hi=$('#LivoraMainHeader > .Nav').eq(height)

        if (topval >= 100) {
            $('#LivoraMainHeader > .Nav')

                .css({
                    'transition': 'all 0.3s ease',
                    'position': 'fixed',
                    'width': '100%',
                    'left': '0',
                    'top': '0'
                });
            $('#LivoraMainHeader > .subnav')
                .css({

                    'position': 'fixed',
                    'width': '100%',
                    'left': '0',
                    'top': '76px'
                });
            $('#LivoraMainPage')
                .css('transition', 'all', '3.0s', 'ease')
            $('#MainWhiteSpace')
                .css('display', 'block')



        }

        else {
            $('#LivoraMainHeader > .Nav')
                .css({
                    'transition': 'all 0.3s ease',
                    'position': 'static',
                    'width': '',
                    'left': '',
                    'top': ''
                });
            $('#LivoraMainHeader > .subnav')
                .css({
                    'transition': '',
                    'position': '',
                    'width': '',
                    'left': '',
                    'top': ''
                });
            $('#LivoraMainPage')
                .css('transition', 'all', '3.0s', 'ease')
            $('#MainWhiteSpace')
                .css('display', 'none')
        }

    })


});

$(function () {
    // $('#LivoraMainHeader .subnav > span').css('height','0');
    let navindex;
    $('#LivoraMainHeader > .Nav >ul >li').each(function (index) {
        $('#LivoraMainHeader .subnav > span').stop()
        $(this).on({

        mouseenter: function () {

            // index: 0=홈, 1=스타일, 2=라이프, 3=카테고리, 4=이벤트, 5=브랜드
            if (index >= 1 && index <= 3) {
                // 스타일/라이프스타일/카테고리만 subnav 열기
                $('#LivoraMainHeader .subnav').stop().animate({ height: '400px' }, 300);

                $('#LivoraMainHeader .subnav > span').hide();
                $('#LivoraMainHeader .subnav > span').eq(index - 1).show()
                    .stop().animate({ height: '400px' }, 300);
            } else {
                // 홈, 이벤트, 브랜드는 무조건 닫기
                $('#LivoraMainHeader .subnav').stop().animate({ height: '0' }, 200);
                $('#LivoraMainHeader .subnav > span').css({
                    display: 'none',
                    height: '0'
                });
            }
        
    

                if (navindex == 1||navindex == 2||navindex == 3) {
                    $('#LivoraMainHeader .subnav > span').eq(index - 1).stop().animate({ height: '400px' }, 300);

                }
                else if (index == 0||index==4||index==5) {
                    $('#LivoraMainHeader .subnav').eq(index).stop().animate({ height: '0' }, 300);
                }
            }
        });

    });

    $('#LivoraMainHeader').on({
        mouseleave: function () {
            if (navindex == 1||navindex == 2||navindex == 3) {
                $('#LivoraMainHeader .subnav > span')
                    .eq(navindex - 1)
                    .stop()
                    .animate({ height: '0' }, 200)
                $('#LivoraMainHeader .subnav').stop().animate({ height: '0px' }, 200);

            }
            else {
                $('#LivoraMainHeader .subnav > span')
                    .eq(navindex)
                    .stop()
                    .animate({ height: '0' }, 200)
                $('#LivoraMainHeader .subnav').stop().animate({ height: '0px' }, 200);
            }

            $('#LivoraMainHeader .subnav > span').css(height, '0px')

        }
    });
})





// 로그인 버튼 → 로그인 모달 열기
$(document).on('click', '#loginBtn', function () {
    $('#loginModal').addClass('active');
});

// 모달 닫기 버튼
$(document).on('click', '.modal-close', function () {
    $(this).closest('.modal-overlay').removeClass('active');
});

// 모달 바깥 클릭 시 닫기
$(document).on('click', '.modal-overlay', function (e) {
    if (e.target === this) {
        $(this).removeClass('active');
    }
});