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



$(function () {
    const $imgSlide = $("#LivoraMainBanner");
    const $imgList = $imgSlide.children("ul");

    function NextImgSlide() {
        $imgList.animate({ left: "-100%" }, 500, function () {
            $imgList.append($imgList.children(":first"));
            $imgList.removeAttr("style")
        });
    }
    let timerID = window.setInterval(NextImgSlide, 2500);
    $imgSlide.on({

        mouseenter: function () {
            window.clearInterval(timerID);
        },

        mouseleave: function () {

            timerID = window.setInterval(NextImgSlide, 2500);
        }
    })
})


$(function () {
    const $links = $('#LivoraMainRecommend ul li>a, #LivoraMainStyle ul li>a, #LivoraMainCategory ul li>a');

    $links.on({
        mouseenter: function () {
            $(this).find('img').addClass('scaled');
        },
        mouseleave: function () {
            $(this).find('img').removeClass('scaled');
        }
    });
});





$(window).on('load', function () {
    var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 20,
        fitWidth: false
    });

    imagesLoaded('.grid').on('progress', function () {
        msnry.layout();
    });
});


$(function () {
    const imageCount = 100;


    const imagePool = [
        {
            src: '',
            furniture: [
                { name: '소파 (베이지 3인용)', x: '25%', y: '60%', price: '3,500,000' },
                { name: '아크 플로어 램프 (검은색)', x: '38%', y: '47%', price: '850,000' },
                { name: '커피 테이블 1 (큰 원형)', x: '17%', y: '72%', price: '1,200,000' },
                { name: '커피 테이블 2 (작은 원형)', x: '30%', y: '70%', price: '800,000' },
                { name: '식탁 (검은색 원형)', x: '67%', y: '57%', price: '2,500,000' },
                { name: '식탁 의자 (흰색 쉘 체어 4개)', x: '67%', y: '57%', price: '1,600,000' },
                { name: '벽면 선반', x: '72%', y: '30%', price: '450,000' },
                { name: '벽 아트 (라인 드로잉)', x: '12%', y: '27%', price: '380,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (2).jpg',
            furniture: [
                { name: 'L자형 소파 (캐멀 브라운 가죽)', x: '37%', y: '60%', price: '6,800,000' },
                { name: '커피 테이블 (와이어 메쉬 큐브)', x: '45%', y: '65%', price: '680,000' },
                { name: '아크 플로어 램프 (크롬)', x: '56%', y: '45%', price: '1,200,000' },
                { name: '화분 (큰 식물)', x: '69%', y: '60%', price: '350,000' },
                { name: '플로어 램프 (구형 갓)', x: '75%', y: '62%', price: '950,000' },
                { name: '벽 아트 1 (대형 추상화)', x: '35%', y: '30%', price: '1,800,000' },
                { name: '벽 아트 2 (작은 프레임)', x: '11%', y: '25%', price: '280,000' },
                { name: '벽 아트 3 (조각)', x: '18%', y: '27%', price: '420,000' },
                { name: '우드 파티션 (세로 슬랫)', x: '51%', y: '35%', price: '2,200,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (3).jpg',
            furniture: [
                { name: '대형 터프팅 소파 (다크 그레이)', x: '45%', y: '65%', price: '8,500,000' },
                { name: '다이닝 테이블 (흰색)', x: '60%', y: '32%', price: '1,800,000' },
                { name: '다이닝 의자 (와이어 메쉬 체어 2개)', x: '72%', y: '35%', price: '720,000' },
                { name: '대형 거울 (검은 프레임)', x: '50%', y: '32%', price: '1,500,000' },
                { name: '화분 (극락조)', x: '54%', y: '35%', price: '480,000' },
                { name: '벽 아트 (프레임 2개)', x: '17%', y: '30%', price: '560,000' },
                { name: '사이드 테이블 (검은색 큐브)', x: '20%', y: '52%', price: '380,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (4).jpg',
            furniture: [
                { name: 'L자형 소파 (화이트)', x: '50%', y: '65%', price: '5,200,000' },
                { name: '러그 (화이트 퍼)', x: '45%', y: '77%', price: '850,000' },
                { name: '작은 화분 (창가)', x: '37%', y: '40%', price: '180,000' },
                { name: '액자/램프 (벽면)', x: '78%', y: '37%', price: '420,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (5).jpg',
            furniture: [
                { name: 'L자형 소파 (다크 그레이)', x: '35%', y: '72%', price: '4,800,000' },
                { name: '커피 테이블 (투명 아크릴)', x: '45%', y: '77%', price: '980,000' },
                { name: '러그 (다크 패턴)', x: '42%', y: '80%', price: '1,200,000' },
                { name: '화분 (바나나 리프)', x: '46%', y: '50%', price: '320,000' },
                { name: '벽 아트 (수직 프레임)', x: '57%', y: '40%', price: '650,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (6).jpg',
            furniture: [
                { name: 'L자형 소파 (베이지)', x: '42%', y: '62%', price: '4,200,000' },
                { name: '1인 소파 (베이지)', x: '12%', y: '65%', price: '1,800,000' },
                { name: '사이드 테이블 (화이트 원형)', x: '21%', y: '56%', price: '380,000' },
                { name: '러그 (라이트 그레이)', x: '37%', y: '80%', price: '720,000' },
                { name: '플로어 램프 (화이트)', x: '58%', y: '40%', price: '650,000' },
                { name: '화분 (팜 트리)', x: '67%', y: '45%', price: '580,000' },
                { name: '매거진 랙 (벽면)', x: '21%', y: '32%', price: '280,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (7).jpg',
            furniture: [
                { name: 'L자형 소파 (다크 그레이)', x: '42%', y: '65%', price: '4,500,000' },
                { name: '커피 테이블 (유리+블랙)', x: '42%', y: '75%', price: '1,450,000' },
                { name: '러그 (라이트 그레이)', x: '37%', y: '82%', price: '680,000' },
                { name: '벽 아트 (대형 추상화)', x: '32%', y: '30%', price: '2,200,000' },
                { name: '사이드 테이블 (유리)', x: '8%', y: '60%', price: '520,000' },
                { name: '테이블 램프', x: '5%', y: '50%', price: '420,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (8).jpg',
            furniture: [
                { name: 'L자형 소파 (화이트)', x: '38%', y: '62%', price: '5,500,000' },
                { name: '커피 테이블 (유리 직사각형)', x: '42%', y: '75%', price: '850,000' },
                { name: '러그 (그레이-그린)', x: '40%', y: '80%', price: '920,000' },
                { name: '플로어 램프 (검은색)', x: '72%', y: '50%', price: '680,000' },
                { name: '화분 (중형)', x: '68%', y: '62%', price: '280,000' },
                { name: '벽 선반 (검은색)', x: '78%', y: '45%', price: '350,000' },
                { name: '벽 패널 (그레이)', x: '25%', y: '25%', price: '1,200,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (9).jpg',
            furniture: [
                { name: '전동 리클라이너 소파 (화이트)', x: '40%', y: '60%', price: '6,200,000' },
                { name: '커피 테이블 (그레이)', x: '48%', y: '72%', price: '780,000' },
                { name: '러그 (화이트 퍼)', x: '42%', y: '78%', price: '950,000' },
                { name: '플로어 램프 (골드)', x: '75%', y: '52%', price: '850,000' },
                { name: '오토만 (화이트)', x: '18%', y: '68%', price: '580,000' },
                { name: '화분 (작은 식물)', x: '12%', y: '58%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (10).jpg',
            furniture: [
                { name: 'L자형 소파 (다크 그레이)', x: '40%', y: '65%', price: '5,800,000' },
                { name: '러그 (그레이)', x: '38%', y: '82%', price: '880,000' },
                { name: '사이드 테이블 (검은색 원형)', x: '15%', y: '60%', price: '450,000' },
                { name: '벽 아트 2점 (흑백 산)', x: '28%', y: '25%', price: '1,600,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (11).jpg',
            furniture: [
                { name: '코듀로이 소파 (다크 브라운)', x: '48%', y: '62%', price: '4,200,000' },
                { name: '화분 (검은 잎 식물)', x: '12%', y: '40%', price: '320,000' },
                { name: '벽 아트 (추상화)', x: '58%', y: '35%', price: '850,000' },
                { name: '러그 (베이지)', x: '45%', y: '78%', price: '680,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (12).jpg',
            furniture: [
                { name: 'L자형 소파 (베이지)', x: '40%', y: '65%', price: '5,200,000' },
                { name: '오토만 (베이지)', x: '18%', y: '70%', price: '680,000' },
                { name: '커피 테이블 (검은색 원형)', x: '48%', y: '72%', price: '580,000' },
                { name: '펜던트 조명 (3등)', x: '38%', y: '15%', price: '950,000' },
                { name: '벽 선반 (검은색)', x: '22%', y: '35%', price: '380,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (13).jpg',
            furniture: [
                { name: 'L자형 소파 (그레이)', x: '35%', y: '62%', price: '4,800,000' },
                { name: '커피 테이블 (대리석 원형)', x: '42%', y: '72%', price: '1,200,000' },
                { name: '아크 플로어 램프 (베이지)', x: '28%', y: '42%', price: '780,000' },
                { name: '러그 (패턴)', x: '38%', y: '80%', price: '850,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (14).jpg',
            furniture: [
                { name: '소파 (베이지 가죽)', x: '45%', y: '58%', price: '3,800,000' },
                { name: '사이드 테이블 (화이트)', x: '72%', y: '62%', price: '320,000' },
                { name: '화분 (작은 식물)', x: '75%', y: '52%', price: '180,000' },
                { name: '벽 선반 (화이트)', x: '22%', y: '28%', price: '280,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (15).jpg',
            furniture: [
                { name: 'L자형 소파 (블랙)', x: '35%', y: '62%', price: '5,500,000' },
                { name: '커피 테이블 (블랙 우드)', x: '58%', y: '68%', price: '680,000' },
                { name: '사이드 테이블 (다크 우드)', x: '75%', y: '58%', price: '420,000' },
                { name: '테이블 램프 (세라믹)', x: '76%', y: '50%', price: '380,000' },
                { name: '러그 (그레이)', x: '42%', y: '78%', price: '750,000' },
                { name: '펜던트 조명 (구형)', x: '22%', y: '38%', price: '680,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (16).jpg',
            furniture: [
                { name: '소파 (그린 벨벳)', x: '38%', y: '65%', price: '4,500,000' },
                { name: '커피 테이블 2개 세트 (원형)', x: '42%', y: '75%', price: '680,000' },
                { name: '러그 (패턴)', x: '38%', y: '82%', price: '580,000' },
                { name: '화분 스탠드 (블랙)', x: '72%', y: '65%', price: '280,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (17).jpg',
            furniture: [
                { name: '곡선 소파 (화이트)', x: '55%', y: '68%', price: '6,800,000' },
                { name: '커피 테이블 (유리)', x: '48%', y: '78%', price: '850,000' },
                { name: '사이드 테이블 (화이트 우드)', x: '28%', y: '55%', price: '420,000' },
                { name: '러그 (화이트)', x: '48%', y: '85%', price: '920,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (18).jpg',
            furniture: [
                { name: '소파 (화이트)', x: '42%', y: '62%', price: '3,200,000' },
                { name: '커피 테이블 (라탄)', x: '48%', y: '72%', price: '480,000' },
                { name: '러그 (베이지 패턴)', x: '42%', y: '80%', price: '580,000' },
                { name: '벽 장식 (마크라메)', x: '38%', y: '22%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (19).jpg',
            furniture: [
                { name: '디자이너 소파 (그레이)', x: '48%', y: '62%', price: '8,500,000' },
                { name: '커피 테이블 (블랙 로우)', x: '42%', y: '75%', price: '1,200,000' },
                { name: '러그 (다크 패턴)', x: '45%', y: '82%', price: '980,000' },
                { name: '아크 플로어 램프 (블랙)', x: '25%', y: '35%', price: '1,500,000' },
                { name: '벽 아트 (모스 프레임)', x: '68%', y: '35%', price: '1,200,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (20).jpg',
            furniture: [
                { name: '소파 (그레이 3인용)', x: '25%', y: '60%', price: '3,500,000' },
                { name: '안락의자 (그레이)', x: '65%', y: '75%', price: '1,800,000' },
                { name: '커피 테이블 (원형)', x: '25%', y: '80%', price: '800,000' },
                { name: '사이드 테이블 (작은 큐브)', x: '40%', y: '60%', price: '380,000' },
                { name: '콘솔 테이블 (우측)', x: '80%', y: '47%', price: '1,200,000' },
                { name: '테이블 램프', x: '78%', y: '42%', price: '520,000' },
                { name: '벽면 거울 (세로형)', x: '77%', y: '20%', price: '680,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (21).jpg',
            furniture: [
                { name: '소파 (그레이 3인용)', x: '25%', y: '60%', price: '3,500,000' },
                { name: '안락의자 (그레이)', x: '65%', y: '75%', price: '1,800,000' },
                { name: '커피 테이블 (원형)', x: '25%', y: '80%', price: '800,000' },
                { name: '사이드 테이블 (작은 큐브)', x: '40%', y: '60%', price: '380,000' },
                { name: '콘솔 테이블 (우측)', x: '80%', y: '47%', price: '1,200,000' },
                { name: '테이블 램프', x: '78%', y: '42%', price: '520,000' },
                { name: '벽면 거울 (세로형)', x: '77%', y: '20%', price: '680,000' }
            ]
        },
        {
            src: './img/사진 자료들/쇼파/sofa (22).jpg',
            furniture: [
                { name: '곡선 소파 (라이트 블루)', x: '52%', y: '65%', price: '5,800,000' },
                { name: '커피 테이블 (유리+크롬)', x: '38%', y: '72%', price: '850,000' },
                { name: '테이블 램프 (작은 원형)', x: '38%', y: '62%', price: '380,000' },
                { name: '러그 (라이트 그레이)', x: '45%', y: '82%', price: '680,000' },
                { name: '벽 선반 (화이트 2단)', x: '50%', y: '22%', price: '580,000' },
                { name: '데스크 램프 (우측 선반)', x: '68%', y: '22%', price: '280,000' },
                { name: '화분 (왼쪽)', x: '12%', y: '55%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (1).jpg',
            furniture: [
                { name: '원목 킹사이즈 침대 프레임', x: '50%', y: '65%', price: '900,000' },
                { name: '원목 협탁 (서랍형)', x: '25%', y: '75%', price: '150,000' },
                { name: '테이블 램프 (아이보리 갓)', x: '25%', y: '50%', price: '70,000' },
                { name: '벽 액자 (식물 패턴 3개)', x: '55%', y: '25%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (2).jpg',
            furniture: [
                { name: '저상형 유아용/패밀리 침대 (가죽/쿠션)', x: '55%', y: '70%', price: '850,000' },
                { name: '구름 모양 펜던트 조명', x: '70%', y: '30%', price: '50,000' },
                { name: '러그 (베이지/화이트)', x: '50%', y: '90%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (3).jpg',
            furniture: [
                { name: '원목 헤드 침대 프레임 (퀸/킹)', x: '50%', y: '60%', price: '600,000' },
                { name: '원목 서랍형 협탁', x: '25%', y: '70%', price: '120,000' },
                { name: '소형 공기청정기/팬', x: '25%', y: '55%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (4).jpg',
            furniture: [
                { name: '패브릭 헤드 침대 (더블/퀸)', x: '50%', y: '60%', price: '600,000' },
                { name: '화이트 협탁 (서랍형)', x: '25%', y: '65%', price: '120,000' },
                { name: '화이트 협탁 (서랍형)', x: '75%', y: '65%', price: '120,000' },
                { name: '벽 부착 독서등', x: '10%', y: '40%', price: '80,000' },
                { name: '액자 (헤드 위)', x: '50%', y: '25%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (5).jpg',
            furniture: [
                { name: '패브릭 싱글 침대 (곡선 헤드)', x: '40%', y: '65%', price: '650,000' },
                { name: '원형 스툴/협탁', x: '15%', y: '75%', price: '50,000' },
                { name: '벽 부착형 선반 (우드)', x: '15%', y: '40%', price: '40,000' },
                { name: '액자 (벽 장식)', x: '65%', y: '35%', price: '50,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (6).jpg',
            furniture: [
                { name: '저상형 패밀리 침대 (원목 가드)', x: '50%', y: '65%', price: '1,200,000' },
                { name: '원형 쿠션 (노란색)', x: '35%', y: '50%', price: '30,000' },
                { name: '몬스테라 식물 (화분)', x: '75%', y: '40%', price: '50,000' },
                { name: '화이트 시폰 커튼', x: '50%', y: '20%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (7).jpg',
            furniture: [
                { name: '패브릭 모듈형 저상 침대 (가드형)', x: '55%', y: '65%', price: '1,500,000' },
                { name: '협탁/사이드 테이블', x: '85%', y: '70%', price: '50,000' },
                { name: '러그 (브라운/베이지)', x: '55%', y: '85%', price: '120,000' },
                { name: '액자 (벽 장식)', x: '20%', y: '30%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (8).jpg',
            furniture: [
                { name: '원목 클래식 침대 프레임', x: '55%', y: '60%', price: '700,000' },
                { name: '원목 서랍형 협탁', x: '78%', y: '70%', price: '150,000' },
                { name: '테이블 스탠드 조명 (플리츠)', x: '78%', y: '50%', price: '60,000' },
                { name: '스탠드형 TV/모니터', x: '85%', y: '45%', price: '300,000' },
                { name: '러그 (밝은색)', x: '55%', y: '85%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (9).jpg',
            furniture: [
                { name: '싱글/슈퍼싱글 침대', x: '30%', y: '60%', price: '400,000' },
                { name: '원형 사이드 테이블 (우드)', x: '10%', y: '75%', price: '70,000' },
                { name: '테이블 스탠드 조명', x: '10%', y: '55%', price: '50,000' },
                { name: '화이트 벽 선반 (우측)', x: '80%', y: '30%', price: '30,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (10).jpg',
            furniture: [
                { name: '싱글/슈퍼싱글 침대 프레임', x: '45%', y: '70%', price: '250,000' },
                { name: '테이블 스탠드 조명', x: '85%', y: '50%', price: '40,000' },
                { name: '3단 서랍장 (블랙/화이트)', x: '85%', y: '75%', price: '100,000' },
                { name: '미니 크리스마스 트리', x: '85%', y: '35%', price: '10,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (11).jpg',
            furniture: [
                { name: '원목 어린이 침대/가드형 싱글', x: '55%', y: '60%', price: '450,000' },
                { name: '2단 수납장', x: '15%', y: '75%', price: '200,000' },
                { name: '벽 부착형 선반', x: '15%', y: '25%', price: '40,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (12).jpg',
            furniture: [
                { name: '모듈형 저상형 침대 (가죽/인조가죽)', x: '50%', y: '70%', price: '1,000,000' },
                { name: '장식용 식물', x: '80%', y: '55%', price: '40,000' },
                { name: '벽 매립형 선반 (니치)', x: '50%', y: '35%', price: '별도' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (13).jpg',
            furniture: [
                { name: '쿠션형 저상 침대 (매트리스 제외)', x: '50%', y: '75%', price: '900,000' },
                { name: '원형 사이드 테이블', x: '25%', y: '70%', price: '150,000' },
                { name: '벽 조명', x: '25%', y: '35%', price: '70,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (14).jpg',
            furniture: [
                { name: '화이트 아기 침대 (가드형)', x: '30%', y: '50%', price: '550,000' },
                { name: '패밀리 침대 (성인용)', x: '65%', y: '70%', price: '800,000' },
                { name: '아이보리 러그', x: '50%', y: '90%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (15).jpg',
            furniture: [
                { name: '화이트 침대 (프레임 안보임)', x: '50%', y: '70%', price: '600,000' },
                { name: '3단 원형 서랍형 협탁', x: '25%', y: '80%', price: '180,000' },
                { name: '검은색 벽 조명 (스윙 암)', x: '25%', y: '35%', price: '70,000' },
                { name: '액자 (황소 이미지)', x: '50%', y: '35%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (16).jpg',
            furniture: [
                { name: '원목 살대형 침대 프레임 (싱글)', x: '35%', y: '60%', price: '450,000' },
                { name: '화이트 원형 테이블', x: '75%', y: '75%', price: '100,000' },
                { name: '원목 의자 (원형)', x: '75%', y: '80%', price: '80,000' },
                { name: '벽 부착형 선반', x: '75%', y: '25%', price: '30,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (17).jpg',
            furniture: [
                { name: '원목 가드형 아기 침대', x: '35%', y: '65%', price: '600,000' },
                { name: '원목 화장대/책상 (어린이용)', x: '60%', y: '75%', price: '250,000' },
                { name: '원목 수납장 (책장)', x: '85%', y: '75%', price: '180,000' },
                { name: '라운지 의자 (어린이용)', x: '80%', y: '85%', price: '120,000' },
                { name: '원형 테이블 (어린이용)', x: '65%', y: '90%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (18).jpg',
            furniture: [
                { name: '패브릭 킹사이즈 침대 (헤드보드 버튼형)', x: '50%', y: '65%', price: '950,000' },
                { name: '벽 부착형 독서등 (블랙)', x: '20%', y: '50%', price: '120,000' },
                { name: '구리색 펜던트 조명', x: '65%', y: '50%', price: '150,000' },
                { name: '미니 사이드 테이블 (우측)', x: '80%', y: '80%', price: '50,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (19).jpg',
            furniture: [
                { name: '화이트 구름형 패브릭 침대', x: '50%', y: '65%', price: '1,800,000' },
                { name: '곡선형 벽 장식 (조명 포함)', x: '75%', y: '35%', price: '별도' },
                { name: '베드사이드 램프 (유리 스탠드)', x: '55%', y: '45%', price: '90,000' },
                { name: '아치형 벽 매립 선반', x: '15%', y: '40%', price: '별도' },
                { name: '장식용 화분 (왼쪽)', x: '5%', y: '45%', price: '50,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (20).jpg',
            furniture: [
                { name: '더블/퀸 침대 (짙은 색 침구)', x: '55%', y: '70%', price: '700,000' },
                { name: '깃털 모양 펜던트 조명', x: '50%', y: '25%', price: '150,000' },
                { name: '벽 부착형 독서등 (좌측)', x: '70%', y: '45%', price: '50,000' },
                { name: '라디에이터 (창문 아래)', x: '20%', y: '75%', price: '별도' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (21).jpg',
            furniture: [
                { name: '화이트 원목 2층 침대 (트윈/트리플)', x: '60%', y: '60%', price: '1,200,000' },
                { name: '계단 및 사다리', x: '60%', y: '45%', price: '별도' },
                { name: '침대 하부 서랍 (트루들)', x: '60%', y: '90%', price: '200,000' },
                { name: '벽 매립형 책장/선반', x: '15%', y: '50%', price: '300,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (22).jpg',
            furniture: [
                { name: '프릴 스커트형 침대 (퀸/킹)', x: '50%', y: '70%', price: '850,000' },
                { name: '인더스트리얼 펜던트 조명', x: '50%', y: '30%', price: '180,000' },
                { name: '사이드 테이블 (가죽/철제)', x: '25%', y: '75%', price: '90,000' },
                { name: '꽃꽂이/가지 화병', x: '25%', y: '50%', price: '30,000' }
            ]
        },
        {
            src: './img/사진 자료들/침대/bed (23).jpg',
            furniture: [
                { name: '원목 가드형 유아용/저상 침대', x: '50%', y: '65%', price: '450,000' },
                { name: '원목 펜던트 조명 (라탄/우드)', x: '60%', y: '25%', price: '120,000' },
                { name: '낮은 벤치형 테이블', x: '25%', y: '78%', price: '90,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (1).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/철제 다리)', x: '65%', y: '75%', price: '350,000' },
                { name: '벤치형 소파 (빌트인)', x: '45%', y: '80%', price: '500,000' },
                { name: '패브릭 의자 (베이지/금속 다리)', x: '80%', y: '85%', price: '120,000' },
                { name: '주방 아일랜드 옆 수납장', x: '15%', y: '80%', price: '0' },
                { name: '식탁 위 펜던트 조명', x: '65%', y: '35%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (2).jpg',
            furniture: [
                { name: '대형 원형 식탁 (어두운 원목/기둥형 다리)', x: '50%', y: '50%', price: '1,500,000' },
                { name: '가죽 식탁 의자 (베이지/블랙)', x: '35%', y: '75%', price: '250,000' },
                { name: '내장형 수납장 (벽면 전체)', x: '50%', y: '20%', price: '0' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (3).jpg',
            furniture: [
                { name: '원형 유리 커피 테이블 (거실)', x: '30%', y: '80%', price: '300,000' },
                { name: '블랙 가죽 소파 (L자형)', x: '80%', y: '50%', price: '1,800,000' },
                { name: '철제 프레임 암체어 (블랙)', x: '15%', y: '70%', price: '500,000' },
                { name: '한지/종이 플로어 램프', x: '65%', y: '50%', price: '120,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (4).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/기둥형 다리)', x: '50%', y: '65%', price: '700,000' },
                { name: '라탄 등받이 식탁 의자 (블랙)', x: '30%', y: '85%', price: '180,000' },
                { name: '벽면 장식 액자 (2개)', x: '50%', y: '25%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (5).jpg',
            furniture: [
                { name: '타원형 식탁 (화이트/곡선형 다리)', x: '50%', y: '70%', price: '450,000' },
                { name: '곡선형 등받이 의자 (화이트/블랙 다리)', x: '60%', y: '85%', price: '150,000' },
                { name: '주방 상부장 내장 선반', x: '80%', y: '40%', price: '0' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (6).jpg',
            furniture: [
                { name: '대형 원형 식탁 (내추럴 원목)', x: '45%', y: '75%', price: '800,000' },
                { name: '원목 와이시카프 의자 (Y체어)', x: '65%', y: '80%', price: '300,000' },
                { name: '라탄/패브릭 펜던트 조명', x: '45%', y: '25%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (7).jpg',
            furniture: [
                { name: '소형 원형 식탁 (원목/삼각 다리)', x: '35%', y: '75%', price: '300,000' },
                { name: '라탄 등받이 식탁 의자 (블랙)', x: '45%', y: '85%', price: '150,000' },
                { name: '펜던트 조명 (다단)', x: '35%', y: '30%', price: '120,000' },
                { name: '주방 상부장 (화이트)', x: '75%', y: '30%', price: '0' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (8).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/플루티드 다리)', x: '50%', y: '60%', price: '500,000' },
                { name: '투명 플라스틱 의자 (고스트 체어)', x: '30%', y: '80%', price: '80,000' },
                { name: '미니 수납장/콘솔', x: '75%', y: '45%', price: '200,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (9).jpg',
            furniture: [
                { name: '원형 테이블 (화이트/원목 혼합)', x: '60%', y: '75%', price: '400,000' },
                { name: '패브릭 라운지 의자 (화이트/원목 팔걸이)', x: '30%', y: '80%', price: '350,000' },
                { name: '원목 스툴/의자', x: '85%', y: '85%', price: '50,000' },
                { name: '플리츠 스탠드 조명 (바닥)', x: '10%', y: '90%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (10).jpg',
            furniture: [
                { name: '원형 테이블 (원목 상판/화이트 튤립 다리)', x: '35%', y: '70%', price: '400,000' },
                { name: 'S자형 디자인 의자 (화이트)', x: '65%', y: '80%', price: '150,000' },
                { name: '장식용 화분 (키 큰 식물)', x: '75%', y: '50%', price: '50,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (11).jpg',
            furniture: [
                { name: '아이보리 라운드형 소파', x: '50%', y: '75%', price: '2,800,000' },
                { name: '패브릭 스툴 (소파 앞)', x: '55%', y: '85%', price: '300,000' },
                { name: '원형 유리 커피 테이블 (금속)', x: '30%', y: '75%', price: '500,000' },
                { name: '스탠드 조명 (금색/볼형)', x: '80%', y: '50%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (12).jpg',
            furniture: [
                { name: '베이지 모듈형 소파 (팔걸이 수납)', x: '45%', y: '70%', price: '3,500,000' },
                { name: '원목 커피 테이블 (사각형)', x: '65%', y: '75%', price: '450,000' },
                { name: '패브릭 라운지 의자 (회색)', x: '15%', y: '70%', price: '550,000' },
                { name: '벽면 TV 및 스피커', x: '85%', y: '50%', price: '0' },
                { name: '러그 (밝은색)', x: '45%', y: '90%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (13).jpg',
            furniture: [
                { name: '블랙 패브릭 4인용 소파', x: '40%', y: '70%', price: '1,800,000' },
                { name: '철제 프레임 커피 테이블', x: '65%', y: '80%', price: '300,000' },
                { name: '화분 (키 큰 식물)', x: '15%', y: '55%', price: '80,000' },
                { name: '패턴 러그 (화이트/블랙)', x: '50%', y: '90%', price: '120,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (14).jpg',
            furniture: [
                { name: '아이보리 패브릭 3인용 소파', x: '45%', y: '65%', price: '1,500,000' },
                { name: '곡선형 라운지 체어 (아이보리)', x: '80%', y: '65%', price: '600,000' },
                { name: '원형 스툴/보조 테이블 (골드)', x: '25%', y: '75%', price: '100,000' },
                { name: '벽 부착형 선반 (우드)', x: '50%', y: '25%', price: '50,000' },
                { name: '플로어 램프 (아치형)', x: '85%', y: '50%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (15).jpg',
            furniture: [
                { name: '화이트 라운지 소파 (2인용)', x: '20%', y: '65%', price: '1,200,000' },
                { name: '라탄 소재 1인용 암체어', x: '75%', y: '65%', price: '400,000' },
                { name: '원목 사이드 테이블 (원형)', x: '50%', y: '75%', price: '150,000' },
                { name: '벽면 장식 거울 (원형)', x: '50%', y: '25%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (16).jpg',
            furniture: [
                { name: '코듀로이 모듈형 소파 (그레이)', x: '50%', y: '70%', price: '2,500,000' },
                { name: '원형 커피 테이블 (화이트/우드)', x: '70%', y: '80%', price: '300,000' },
                { name: '러그 (밝은색)', x: '50%', y: '90%', price: '100,000' },
                { name: '화분 (소파 옆)', x: '10%', y: '75%', price: '50,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (17).jpg',
            furniture: [
                { name: '짙은 회색 패브릭 3인용 소파', x: '55%', y: '65%', price: '1,600,000' },
                { name: '소파 옆 사이드 테이블', x: '25%', y: '75%', price: '120,000' },
                { name: 'TV 수납장 (낮은 원목)', x: '80%', y: '80%', price: '400,000' },
                { name: '벽면 액자 (추상화)', x: '50%', y: '25%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (18).jpg',
            furniture: [
                { name: '검은색 우드 플라스틱 의자', x: '50%', y: '65%', price: '2,900,000' },
                { name: '원형 우드 커피 테이블', x: '70%', y: '80%', price: '450,000' },
                { name: '스탠드 조명 (아치형)', x: '35%', y: '40%', price: '200,000' },

            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (19).jpg',
            furniture: [
                { name: '아이보리 카우치 소파 (L자)', x: '55%', y: '70%', price: '3,200,000' },
                { name: '원형 유리 커피 테이블 (소파 앞)', x: '45%', y: '80%', price: '500,000' },
                { name: '플로어 램프 (볼형/블랙)', x: '85%', y: '50%', price: '120,000' },
                { name: 'TV/미디어 스탠드', x: '20%', y: '80%', price: '350,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (20).jpg',
            furniture: [
                { name: '브라운 가죽 소파 (클래식/3인용)', x: '40%', y: '70%', price: '2,500,000' },
                { name: '철제 프레임 커피 테이블 (원목 상판)', x: '65%', y: '80%', price: '350,000' },
                { name: '플로어 램프 (블랙/스윙 암)', x: '15%', y: '45%', price: '150,000' },
                { name: '러그 (기하학 패턴)', x: '50%', y: '90%', price: '180,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (21).jpg',
            furniture: [
                { name: '대리석 상판 식탁 (6인용)', x: '50%', y: '65%', price: '1,500,000' },
                { name: '패브릭 식탁 의자 (베이지)', x: '30%', y: '80%', price: '180,000' },
                { name: '벽면 부착형 장식장 (우드)', x: '10%', y: '50%', price: '500,000' },
                { name: '식탁 위 원형 펜던트 조명', x: '50%', y: '25%', price: '120,000' },
                { name: '화분 (대형, 우측)', x: '75%', y: '50%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (22).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/튤립 다리)', x: '50%', y: '70%', price: '450,000' },
                { name: '가죽/인조가죽 의자 (브라운)', x: '30%', y: '85%', price: '150,000' },
                { name: '원목 찬장/수납장 (벽면)', x: '85%', y: '60%', price: '600,000' },
                { name: '테이블 램프 (간접 조명)', x: '85%', y: '35%', price: '80,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (23).jpg',
            furniture: [
                { name: '원목 벤치형 식탁 (4인용)', x: '50%', y: '75%', price: '600,000' },
                { name: '벤치 의자 (원목/패브릭)', x: '65%', y: '85%', price: '200,000' },
                { name: '식탁 의자 (패브릭 등받이)', x: '25%', y: '85%', price: '150,000' },
                { name: '러그 (기하학 패턴)', x: '50%', y: '90%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (24).jpg',
            furniture: [
                { name: '대형 원형 식탁 (화이트/대리석 패턴)', x: '45%', y: '60%', price: '1,200,000' },
                { name: '곡선형 벨벳 의자 (그레이)', x: '30%', y: '75%', price: '250,000' },
                { name: '펜던트 조명 (골드 프레임)', x: '45%', y: '25%', price: '200,000' },
                { name: '와인 랙/선반 (벽)', x: '70%', y: '35%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (25).jpg',
            furniture: [
                { name: '작은 원형 식탁 (원목/2인용)', x: '30%', y: '75%', price: '250,000' },
                { name: '원목 의자 (등받이 메쉬)', x: '40%', y: '85%', price: '120,000' },
                { name: '주방 아일랜드/조리대', x: '80%', y: '50%', price: '0' },
                { name: '화분 (작은 식물)', x: '25%', y: '60%', price: '30,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (26).jpg',
            furniture: [
                { name: '원목 사각형 식탁 (4인용)', x: '50%', y: '70%', price: '500,000' },
                { name: '라탄 등받이 의자', x: '35%', y: '85%', price: '180,000' },
                { name: '스탠드 조명 (블랙/골드)', x: '15%', y: '50%', price: '150,000' },
                { name: '벽면 거울 (원형)', x: '10%', y: '25%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (27).jpg',
            furniture: [
                { name: '곡선형 모던 식탁 (화이트)', x: '45%', y: '70%', price: '900,000' },
                { name: '패브릭 의자 (베이지)', x: '60%', y: '85%', price: '220,000' },
                { name: '화분 (키 큰 식물, 우측)', x: '85%', y: '50%', price: '70,000' },
                { name: '벽면 액자 (추상화)', x: '50%', y: '30%', price: '120,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (28).jpg',
            furniture: [
                { name: '긴 직사각형 식탁 (원목/6인용)', x: '50%', y: '65%', price: '1,100,000' },
                { name: '원목 식탁 의자 (등받이 살대)', x: '30%', y: '75%', price: '100,000' },
                { name: '긴 펜던트 조명 (직사각형)', x: '50%', y: '25%', price: '180,000' },
                { name: '와인셀러/수납장', x: '85%', y: '50%', price: '500,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (29).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/우드 상판)', x: '50%', y: '75%', price: '400,000' },
                { name: '패브릭 의자 (블루/레드/오렌지 혼합)', x: '35%', y: '85%', price: '150,000' },
                { name: '벽면 코너 수납장', x: '85%', y: '60%', price: '400,000' },
                { name: '주방 아일랜드/싱크대', x: '10%', y: '65%', price: '0' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (30).jpg',
            furniture: [
                { name: '대형 원형 식탁 (짙은 색 원목)', x: '50%', y: '60%', price: '950,000' },
                { name: '가죽/인조가죽 식탁 의자 (블랙)', x: '30%', y: '75%', price: '200,000' },
                { name: '스탠드 조명 (아치형/거실용)', x: '15%', y: '40%', price: '250,000' },
                { name: '러그 (밝은 베이지)', x: '50%', y: '90%', price: '120,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (31).jpg',
            furniture: [
                { name: '화이트 상판 사각형 식탁 (4인용)', x: '50%', y: '70%', price: '350,000' },
                { name: '밝은 원목 식탁 의자 (등받이 심플)', x: '30%', y: '85%', price: '100,000' },
                { name: '벽면 아트 포스터 (미니멀)', x: '75%', y: '30%', price: '50,000' },
                { name: '창가쪽 키 큰 화분', x: '10%', y: '45%', price: '90,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (32).jpg',
            furniture: [
                { name: '원목 확장형 식탁 (6~8인용)', x: '45%', y: '60%', price: '1,300,000' },
                { name: '벨벳 패브릭 의자 (딥 그린)', x: '60%', y: '75%', price: '280,000' },
                { name: '천장 직부등/펜던트 조명 (긴 형태)', x: '45%', y: '20%', price: '150,000' },
                { name: '사이드 보드 (원목)', x: '80%', y: '65%', price: '700,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (33).jpg',
            furniture: [
                { name: '원형 유리 상판 식탁 (4인용)', x: '50%', y: '65%', price: '750,000' },
                { name: '가죽 등받이 의자 (검정/금속 다리)', x: '30%', y: '80%', price: '180,000' },
                { name: '벽면 거울 (사각형)', x: '85%', y: '40%', price: '150,000' },
                { name: '콘솔 테이블 (화분/장식용)', x: '15%', y: '75%', price: '300,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (34).jpg',
            furniture: [
                { name: '미니멀리즘 사각형 식탁 (화이트)', x: '40%', y: '70%', price: '550,000' },
                { name: '플라스틱 디자인 의자 (화이트)', x: '55%', y: '85%', price: '90,000' },
                { name: '긴 러그 (밝은색)', x: '40%', y: '90%', price: '80,000' },
                { name: '창가쪽 선반 (작은 소품)', x: '80%', y: '35%', price: '120,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (35).jpg',
            furniture: [
                { name: '바 테이블/홈 바 (높은 의자)', x: '50%', y: '75%', price: '400,000' },
                { name: '높은 스툴 의자 (블랙)', x: '65%', y: '85%', price: '100,000' },
                { name: '벽면 선반 (식기류)', x: '85%', y: '50%', price: '350,000' },
                { name: '작은 펜던트 조명 (3개)', x: '50%', y: '20%', price: '90,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (36).jpg',
            furniture: [
                { name: '원목 벤치형 식탁 (4인용/밝은 우드)', x: '50%', y: '65%', price: '650,000' },
                { name: '벤치 의자 (원목)', x: '35%', y: '75%', price: '150,000' },
                { name: '등나무 소재 식탁 의자', x: '65%', y: '80%', price: '180,000' },
                { name: '창가쪽 콘솔/수납장', x: '10%', y: '55%', price: '450,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (37).jpg',
            furniture: [
                { name: '대리석 상판 원형 식탁', x: '40%', y: '60%', price: '1,100,000' },
                { name: '곡선형 등받이 의자 (베이지)', x: '55%', y: '75%', price: '200,000' },
                { name: '원형 펜던트 조명 (골드)', x: '40%', y: '25%', price: '220,000' },
                { name: '벽면 아트워크 (추상)', x: '80%', y: '40%', price: '150,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (38).jpg',
            furniture: [
                { name: '미드 센츄리 스타일 사각형 식탁', x: '50%', y: '65%', price: '800,000' },
                { name: '가죽/인조가죽 의자 (갈색/우드 프레임)', x: '30%', y: '80%', price: '160,000' },
                { name: '모던 스탠드 조명 (블랙)', x: '15%', y: '55%', price: '180,000' },
                { name: '벽면 수납장/장식장 (짙은 원목)', x: '85%', y: '50%', price: '900,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (39).jpg',
            furniture: [
                { name: '긴 직사각형 원목 식탁 (6인용)', x: '50%', y: '70%', price: '1,000,000' },
                { name: '패브릭 커버 의자 (밝은 그레이)', x: '65%', y: '85%', price: '210,000' },
                { name: '원형 사이드 테이블 (화분)', x: '15%', y: '80%', price: '80,000' },
                { name: '벽면 시계 (미니멀)', x: '80%', y: '30%', price: '60,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (40).jpg',
            furniture: [
                { name: '화이트 원형 식탁 (소형/2인용)', x: '50%', y: '70%', price: '300,000' },
                { name: '철제 프레임 디자인 의자 (블랙)', x: '35%', y: '85%', price: '130,000' },
                { name: '주방 아일랜드/조리대 (뒤쪽)', x: '80%', y: '50%', price: '0' },
                { name: '창문 블라인드/커튼', x: '10%', y: '30%', price: '100,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (41).jpg',
            furniture: [
                { name: '대형 사각형 우드 슬랩 식탁', x: '50%', y: '60%', price: '2,500,000' },
                { name: '가죽/패브릭 혼합 벤치 의자', x: '30%', y: '75%', price: '350,000' },
                { name: '모던 펜던트 조명 (여러 개)', x: '50%', y: '20%', price: '300,000' },
                { name: '대형 사이드 보드 (수납장)', x: '85%', y: '50%', price: '1,200,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (42).jpg',
            furniture: [
                { name: '원형 식탁 (화이트/금속 다리)', x: '40%', y: '70%', price: '500,000' },
                { name: '곡선형 플라스틱 의자 (다양한 색상)', x: '55%', y: '85%', price: '110,000' },
                { name: '미니멀한 화이트 스탠드', x: '15%', y: '60%', price: '120,000' },
                { name: '벽걸이 장식 선반', x: '80%', y: '30%', price: '70,000' }
            ]
        },
        {
            src: './img/사진 자료들/탁자, 의자/table (43).jpg',
            furniture: [
                { name: '모던 긴 사각형 식탁 (짙은 색)', x: '50%', y: '65%', price: '900,000' },
                { name: '패브릭 의자 (높은 등받이)', x: '30%', y: '75%', price: '190,000' },
                { name: '대형 액자/그림 (벽면)', x: '75%', y: '35%', price: '200,000' },
                { name: '러그 (사각형/무채색)', x: '50%', y: '90%', price: '150,000' }
            ]
        }
    ];

    const $gallery = $('#gallery');
    const imagesPerLoad = 8;
    let visibleCount = 0;

    $gallery.find('.grid-item').remove();
    for (let i = 0; i < imageCount; i++) {
        const randomIndex = Math.floor(Math.random() * imagePool.length);
        const imageData = imagePool[randomIndex];

        let pinsHTML = '';
        if (Array.isArray(imageData.furniture)) {
            imageData.furniture.forEach(function (item) {
                pinsHTML += `
                    <div class="furniture-pin" style="left: ${item.x}; top: ${item.y};">
                        <div class="pin-dot"></div>
                        <div class="pin-label">${item.name}</div>
                    </div>
                `;
            });
        }

        const $item = $(`
        <div class="grid-item ${i >= imagesPerLoad ? 'hidden' : ''}">
            <div class="item-wrapper">
                        <img src="${imageData.src}" alt="" loading="lazy">
                        <div class="pins-container">
                            ${pinsHTML}
                        </div>
                    </div>
                </div>
            `);

        $item.data('imageData', imageData);
        $gallery.append($item);
    }

    visibleCount = imagesPerLoad;



    $(document).on('click', '#gallery .grid-item', function (e) {
        const data = $(this).data('imageData');
        if (!data) return;

        $('.imgbuy .imgbuyimg img').attr('src', data.src);

        const $list = $('.imgbuy .imgbuyinfo .imgbuy-list').empty();
        if (Array.isArray(data.furniture) && data.furniture.length) {
            data.furniture.forEach(f => {
                const priceText = f.price ? f.price : '가격 정보 없음';
                $list.append(`
                    <li>
                        <p class="name">${f.name}</p>
                        <p class="price">${priceText}</p>
                    </li>
                `);
            });
        } else {
            $list.append(`
                <li>
                    <p class="name">정보가 없습니다.</p>
                    <p class="price">-</p>
                </li>
            `);
        }

        $('.imgbuyback').fadeIn(200);
        $('.imgbuy .imgbuy-close').first().focus();
    });

    $('#loadMoreButton').on('click', function () {
        const $hiddenItems = $gallery.find('.grid-item.hidden').slice(0, imagesPerLoad);
        if ($hiddenItems.length === 0) {
            $(this).prop('disabled', true).text('모두 표시됨');
            return;
        }

        $hiddenItems.removeClass('hidden');

        if (msnry) {
            msnry.reloadItems();
            imagesLoaded($gallery[0]).on('progress', function () {
                msnry.layout();
                updateGalleryHeight();
            }).on('always', function () {
                msnry.layout();
                updateGalleryHeight();
            });
        }

        visibleCount += $hiddenItems.length;

        if ($gallery.find('.grid-item.hidden').length === 0) {
            $('#loadMoreButton').prop('disabled', true).text('모두 표시됨');
        }
    });


    $(document).on('click', '.imgbuy > button, .imgbuy-close', function () {
        $('.imgbuyback').fadeOut(200);
    });


    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
            $('.imgbuyback').fadeOut(200);
        }
    });
    $(document).on('click', '.imgbuyback', function (e) {
        if (e.target === this) {
            $('.imgbuyback').fadeOut(200);
        }
    });


    $(document).on('click', '.imgbuy-close, .imgbuy .imgbuy-close, .imgbuy .imgbuy-close, .imgbuy .imgbuy-close', function () {
        $('.imgbuyback').fadeOut(200);
    });


});

$(window).on('load', function () {
    const gridElement = document.getElementById('gallery');

    if (gridElement) {
        msnry = new Masonry(gridElement, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 20,
            fitWidth: false
        });


        imagesLoaded(gridElement).on('always', function () {
            msnry.layout();
            updateGalleryHeight();
        });
        imagesLoaded(gridElement).on('progress', function () {
            msnry.layout();
            updateGalleryHeight();
        });

        $(window).on('resize', function () {
            msnry.layout();
            updateGalleryHeight();
        });
    }


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });
    $('#scrollTopBtn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });
});


$('.closeModal').on('click', function () {
    $('#loginModal').removeClass('active');
});



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















// ===== 페이지 로딩 화면 제어 =====
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hidden");
    }, 500); // 살짝 딜레이 후 자연스럽게 사라짐
});
