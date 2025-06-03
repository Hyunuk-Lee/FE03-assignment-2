/* signup page - JS */
document.addEventListener("DOMContentLoaded", function () {
    const userIdInput = document.getElementById("user-id");
    const userPwInput = document.getElementById("user-pw");
    const userPwConfirmInput = document.getElementById("user-pw-confirm");
    const signupButton = document.querySelector(".signup-button");
    const signupText = document.querySelector(".signup");
    const pwMismatchMsg = document.querySelector(".pw-mismatch");

    // 비밀번호 유효성 검사 함수
    function validatePassword(pw) {
        const lengthOK = pw.length >= 8;
        const upper = /[A-Z]/.test(pw);
        const lower = /[a-z]/.test(pw);
        const number = /[0-9]/.test(pw);
        const special = /[@!?_\-]/.test(pw); // 특수문자 제한
        return lengthOK && upper && lower && number && special;
    }

    function updateUI() {
        const idVal = userIdInput.value.trim();
        const pwVal = userPwInput.value;
        const pwConfirmVal = userPwConfirmInput.value;

        // 입력 시 색상 변경
        userIdInput.style.color = idVal ? "#333" : "#999";
        userPwInput.style.color = pwVal ? "#333" : "#999";
        userPwConfirmInput.style.color = pwConfirmVal ? "#333" : "#999";

        const passwordsMatch = pwVal === pwConfirmVal && pwVal.length > 0;
        const validPw = validatePassword(pwVal);

        // 비밀번호 불일치 메시지 조건 출력
        if (pwVal && pwConfirmVal && pwVal !== pwConfirmVal) {
        pwMismatchMsg.style.display = "block";
        } else {
        pwMismatchMsg.style.display = "none";
        }

        // 모든 조건 충족 시 버튼 활성화
        const canActivate = idVal && pwVal && passwordsMatch && validPw;

        if (canActivate) {
            signupButton.style.backgroundColor = "#5E0080";
            signupText.style.color = "#fff";
        } else {
            signupButton.style.backgroundColor = "#E2E2E2";
            signupText.style.color = "#999";
        }
    }

    // 이벤트 연결
    userIdInput.addEventListener("input", updateUI);
    userPwInput.addEventListener("input", updateUI);
    userPwConfirmInput.addEventListener("input", updateUI);
});
