function doLogin(username, password) {
    if (!username || !password) {
        showAlert("아이디와 비밀번호를 입력하세요.", "warning");
        return false;
    }

    const users = getUsers();
    const found = users.find(u => u.username === username && u.password === password);

    if (!found) {
        showAlert("아이디 또는 비밀번호가 일치하지 않습니다.", "error");
        return false;
    }

    // 로그인 성공
    window.currentUser = { username: found.username, name: found.name || found.username };
    saveToStorage('currentUser', window.currentUser);

    if (typeof loadCart === "function") {
        try { loadCart(); } catch (e) { console.warn(e); }
    }

    updateAuthUI();
    showAlert("로그인되었습니다.", "success");

    setTimeout(() => {
        closeModal("#loginModal");
    }, 400);

    return true;
}
