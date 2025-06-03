/* product detail page - JS */
document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".minus-button");
  const plusBtn = document.querySelector(".plus-button");
  const quantityEl = document.getElementById("quantity");
  const totalPriceEl = document.getElementById("total-price");
  const unitPrice = parseInt(document.getElementById("unit-price").dataset.price.replace(/,/g, ""));

  let quantity = 1;

  // 금액 포맷팅 함수
  function formatPrice(num) {
    return num.toLocaleString("ko-KR") + " 원";
  }

  // 총 금액 업데이트 함수
  function updateTotalPrice() {
    const total = unitPrice * quantity;
    totalPriceEl.textContent = formatPrice(total);
  }

  // + 버튼
  plusBtn.addEventListener("click", () => {
    quantity += 1;
    quantityEl.textContent = quantity;
    updateTotalPrice();
  });

  // - 버튼
  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity -= 1;
      quantityEl.textContent = quantity;
      updateTotalPrice();
    }
  });

  // 초기 금액 설정
  updateTotalPrice();
});
