/* login page - JS */
document.addEventListener("DOMContentLoaded", function () {
    const userIdInput = document.getElementById("user-id");
    const userPwInput = document.getElementById("user-pw");
    const loginButton = document.querySelector(".login-button");

    function updateState() {
        const hasId = userIdInput.value.trim().length > 0;
        const hasPw = userPwInput.value.trim().length > 0;

        // 입력값 있으면 색 변경
        userIdInput.style.color = hasId ? "#333" : "#999";
        userPwInput.style.color = hasPw ? "#333" : "#999";

        // 버튼 활성화 제어
        if (hasId && hasPw) {
        loginButton.disabled = false;
        } else {
        loginButton.disabled = true;
        }
    }

    // 이벤트 연결
    userIdInput.addEventListener("input", updateState);
    userPwInput.addEventListener("input", updateState);
});
