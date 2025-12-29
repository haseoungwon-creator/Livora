

// ========== 전역 변수 ==========

let currentUser = null;
let cart = [];

// ========== localStorage 헬퍼 함수 ==========
function saveToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error('저장 오류:', error);
        return false;
    }
}

function getFromStorage(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('불러오기 오류:', error);
        return null;
    }
}

function removeFromStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('삭제 오류:', error);
        return false;
    }
}

// ========== 커스텀 알림 함수 ==========
function showAlert(message, type = 'info') {
    $('.custom-alert').remove();
    
    const iconMap = {
        'success': '✔',
        'error': '✕',
        'info': 'ℹ',
        'warning': '⚠'
    };
    
    const colorMap = {
        'success': '#405B4D',
        'error': '#D9534F',
        'info': '#5A7A67',
        'warning': '#C9B5A3'
    };
    
    const $alert = $(`
        <div class="custom-alert" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #FFFFFF 0%, #F5EBD9 100%);
            padding: 30px 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            min-width: 300px;
            text-align: center;
            border: 3px solid ${colorMap[type]};
            animation: alertSlideIn 0.3s ease-out;
        ">
            <div style="
                font-size: 48px;
                color: ${colorMap[type]};
                margin-bottom: 15px;
            ">${iconMap[type]}</div>
            <div style="
                font-size: 16px;
                color: #2C2C2C;
                font-weight: 600;
                margin-bottom: 20px;
                line-height: 1.5;
            ">${message}</div>
            <button class="alert-ok-btn" style="
                padding: 10px 30px;
                background: ${colorMap[type]};
                color: white;
                border: none;
                border-radius: 10px;
                font-size: 15px;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s ease;
            ">확인</button>
        </div>
    `);
    
    const $overlay = $('<div class="custom-alert-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999; backdrop-filter: blur(5px);"></div>');
    
    $('body').append($overlay).append($alert);
    
    $('.alert-ok-btn').hover(
        function() { $(this).css('transform', 'scale(1.05)'); },
        function() { $(this).css('transform', 'scale(1)'); }
    );
    
    $('.alert-ok-btn, .custom-alert-overlay').on('click', function() {
        $alert.css('animation', 'alertSlideOut 0.3s ease-out');
        setTimeout(function() {
            $alert.remove();
            $overlay.remove();
        }, 300);
    });
}

// CSS 애니메이션 추가
if (!$('#custom-alert-styles').length) {
    $('head').append(`
        <style id="custom-alert-styles">
            @keyframes alertSlideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            @keyframes alertSlideOut {
                from {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
                to {
                    opacity: 0;
                    transform: translate(-50%, -40%);
                }
            }
        </style>
    `);
}

// ========== 커스텀 확인 함수 ==========
function showConfirm(message, onConfirm) {
    $('.custom-confirm').remove();
    
    const $confirm = $(`
        <div class="custom-confirm" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #FFFFFF 0%, #F5EBD9 100%);
            padding: 30px 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10000;
            min-width: 350px;
            text-align: center;
            border: 3px solid #5A7A67;
            animation: alertSlideIn 0.3s ease-out;
        ">
            <div style="
                font-size: 48px;
                color: #5A7A67;
                margin-bottom: 15px;
            ">?</div>
            <div style="
                font-size: 16px;
                color: #2C2C2C;
                font-weight: 600;
                margin-bottom: 25px;
                line-height: 1.5;
            ">${message}</div>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="confirm-cancel-btn" style="
                    padding: 10px 30px;
                    background: #A89885;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">취소</button>
                <button class="confirm-ok-btn" style="
                    padding: 10px 30px;
                    background: #405B4D;
                    color: white;
                    border: none;
                    border-radius: 10px;
                    font-size: 15px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                ">확인</button>
            </div>
        </div>
    `);
    
    const $overlay = $('<div class="custom-confirm-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999; backdrop-filter: blur(5px);"></div>');
    
    $('body').append($overlay).append($confirm);
    
    $('.confirm-ok-btn, .confirm-cancel-btn').hover(
        function() { $(this).css('transform', 'scale(1.05)'); },
        function() { $(this).css('transform', 'scale(1)'); }
    );
    
    $('.confirm-ok-btn').on('click', function() {
        $confirm.css('animation', 'alertSlideOut 0.3s ease-out');
        setTimeout(function() {
            $confirm.remove();
            $overlay.remove();
            if (onConfirm) onConfirm();
        }, 300);
    });
    
    $('.confirm-cancel-btn, .custom-confirm-overlay').on('click', function() {
        $confirm.css('animation', 'alertSlideOut 0.3s ease-out');
        setTimeout(function() {
            $confirm.remove();
            $overlay.remove();
        }, 300);
    });
}

// ========== 페이지 로드 시 초기화 ==========
$(document).ready(function() {
    checkLoginStatus();
    setupAuthHandlers();
    setupGalleryHandler();
});

// ========== 로그인 상태 확인 ==========
function checkLoginStatus() {
    const savedUser = getFromStorage('currentUser');
    if (savedUser) {
        currentUser = savedUser;
        updateAuthUI();
        loadCart();
    }
}

// ========== UI 업데이트 ==========
function updateAuthUI() {
    if (currentUser) {
        $('#loginBtn').text(currentUser.name + '님').off('click').on('click', logout);
    } else {
        $('#loginBtn').text('로그인').off('click').on('click', function() {
            $('#loginModal').addClass('active');
        });
        $('.cart-count').text('0');
    }
}

// ========== 로그아웃 ==========
function logout() {
    removeFromStorage('currentUser');
    currentUser = null;
    cart = [];
    updateAuthUI();
    showAlert('로그아웃되었습니다.', 'info');
}

// ========== 회원가입 처리 ==========
$('#registerForm').on('submit', function(e) {
    e.preventDefault();
    
    const username = $('#registerUsername').val().trim();
    const password = $('#registerPassword').val();
    const passwordConfirm = $('#registerPasswordConfirm').val();
    const name = $('#registerName').val().trim();
    
    if (!username || !password || !name) {
        showAlert('모든 항목을 입력해주세요.', 'warning');
        return;
    }
    
    if (password.length < 4) {
        showAlert('비밀번호는 최소 4자 이상이어야 합니다.', 'warning');
        return;
    }
    
    if (password !== passwordConfirm) {
        showAlert('비밀번호가 일치하지 않습니다.', 'error');
        return;
    }
    
    const existingUser = getFromStorage('user:' + username);
    if (existingUser) {
        showAlert('이미 존재하는 아이디입니다.', 'warning');
        return;
    }
    
    const userData = {
        username: username,
        password: password,
        name: name,
        createdAt: new Date().toISOString()
    };
    
    saveToStorage('user:' + username, userData);
    showAlert('회원가입이 완료되었습니다!', 'success');
    
    setTimeout(function() {
        $('#registerModal').removeClass('active');
        $('#registerForm')[0].reset();
        $('#loginModal').addClass('active');
    }, 1500);
});

// ========== 로그인 처리 ==========
$('#loginForm').on('submit', function(e) {
    e.preventDefault();
    
    const username = $('#loginUsername').val().trim();
    const password = $('#loginPassword').val();
    
    if (!username || !password) {
        showAlert('아이디와 비밀번호를 입력해주세요.', 'warning');
        return;
    }
    
    const userData = getFromStorage('user:' + username);
    
    if (!userData) {
        showAlert('존재하지 않는 아이디입니다.', 'error');
        return;
    }
    
    if (userData.password !== password) {
        showAlert('비밀번호가 일치하지 않습니다.', 'error');
        return;
    }
    
    currentUser = userData;
    saveToStorage('currentUser', currentUser);
    
    $('#loginModal').removeClass('active');
    $('#loginForm')[0].reset();
    updateAuthUI();
    loadCart();
    showAlert(currentUser.name + '님, 환영합니다!', 'success');
});

// ========== 장바구니 불러오기 ==========
function loadCart() {
    if (!currentUser) {
        cart = [];
        updateCartUI();
        return;
    }
    
    const savedCart = getFromStorage('cart:' + currentUser.username);
    cart = savedCart || [];
    updateCartUI();
}

// ========== 장바구니 저장 ==========
function saveCart() {
    if (!currentUser) return;
    
    saveToStorage('cart:' + currentUser.username, cart);
    updateCartUI();
}

// ========== 장바구니 UI 업데이트 ==========
function updateCartUI() {
    const count = cart.length;
    $('.cart-count').text(count);
    if (count > 0) {
        $('.cart-count').show();
    } else {
        $('.cart-count').hide();
    }
}

// ========== 장바구니에 추가 ==========
function addToCart(name, price) {
    if (!currentUser) {
        showAlert('로그인이 필요합니다.', 'warning');
        setTimeout(function() {
            $('#loginModal').addClass('active');
        }, 1500);
        return;
    }
    
    const exists = cart.find(item => item.name === name);
    
    if (exists) {
        showAlert('이미 장바구니에 있는 상품입니다.', 'info');
        return;
    }
    
    cart.push({ name: name, price: price });
    saveCart();
    showAlert('장바구니에 추가되었습니다.', 'success');
}

// ========== 장바구니에서 제거 ==========
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// ========== 장바구니 표시 ==========
function displayCart() {
    const $cartItems = $('#cartItems');
    
    if (cart.length === 0) {
        $cartItems.html('<div class="cart-empty">장바구니가 비어있습니다.</div>');
        $('#totalPrice').text('0원');
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const priceStr = item.price.toString().replace(/,/g, '');
        const price = parseInt(priceStr);
        if (!isNaN(price)) {
            total += price;
        }
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}원</div>
                </div>
                <button class="cart-item-remove" data-index="${index}">삭제</button>
            </div>
        `;
    });
    
    $cartItems.html(html);
    $('#totalPrice').text(total.toLocaleString() + '원');
    
    $('.cart-item-remove').on('click', function() {
        const index = $(this).data('index');
        removeFromCart(index);
    });
}

// ========== 갤러리 핸들러 설정 ==========
function setupGalleryHandler() {
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
                        <div style="flex: 1;">
                            <p class="name">${f.name}</p>
                            <p class="price">${priceText}</p>
                        </div>
                        ${f.price && f.price !== '별도' ? `
                            <button class="add-to-cart-btn" 
                                    data-name="${f.name}" 
                                    data-price="${f.price}">
                                담기
                            </button>
                        ` : ''}
                    </li>
                `);
            });
            
            $('.add-to-cart-btn').off('click').on('click', function(e) {
                e.stopPropagation();
                const name = $(this).data('name');
                const price = $(this).data('price');
                addToCart(name, price);
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
}

// ========== 이벤트 핸들러 설정 ==========
function setupAuthHandlers() {
    $('#showRegister').on('click', function(e) {
        e.preventDefault();
        $('#loginModal').removeClass('active');
        $('#registerModal').addClass('active');
    });

    $('#showLogin').on('click', function(e) {
        e.preventDefault();
        $('#registerModal').removeClass('active');
        $('#loginModal').addClass('active');
    });

    $('.modal-close').on('click', function() {
        $(this).closest('.modal-overlay').removeClass('active');
    });

    $('.modal-overlay').on('click', function(e) {
        if (e.target === this) {
            $(this).removeClass('active');
        }
    });

    $('#cartBtn').on('click', function() {
        if (!currentUser) {
            showAlert('로그인이 필요합니다.', 'warning');
            setTimeout(function() {
                $('#loginModal').addClass('active');
            }, 1500);
            return;
        }
        displayCart();
        $('#cartModal').addClass('active');
    });

    $('#checkoutBtn').on('click', function() {
        if (cart.length === 0) {
            showAlert('장바구니가 비어있습니다.', 'warning');
            return;
        }
        
        showConfirm('주문하시겠습니까?', function() {
            cart = [];
            saveCart();
            showAlert('주문이 완료되었습니다!', 'success');
            setTimeout(function() {
                $('#cartModal').removeClass('active');
            }, 1500);
        });
    });
}

// ========== ESC 키로 모달 닫기 ==========
$(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
        $('.modal-overlay').removeClass('active');
    }
});

// ========== 전역에서 접근 가능하도록 함수 노출 ==========
window.addToCart = addToCart;