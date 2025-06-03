/* login page - JS */
document.addEventListener("DOMContentLoaded", function () {
    const userIdInput = document.getElementById("user-id");
    const userPwInput = document.getElementById("user-pw");
    const loginButton = document.querySelector(".login-button");

    function updateState() {
        const hasId = userIdInput.value.trim().length > 0;
        const hasPw = userPwInput.value.trim().length > 0;

        // 입력값 있으면 색 변경
        if (hasId) userIdInput.style.color = "#333";
        else userIdInput.style.color = "#999";

        if (hasPw) userPwInput.style.color = "#333";
        else userPwInput.style.color = "#999";

        // 로그인 버튼 색상 변경
        if (hasId && hasPw) {
        loginButton.style.backgroundColor = "#5E0080";
        } else {
        loginButton.style.backgroundColor = "#E2E2E2";
        }
    }

        // 입력 이벤트 감지
    userIdInput.addEventListener("input", updateState);
    userPwInput.addEventListener("input", updateState);
});