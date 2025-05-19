/* main page - JS */
document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
  const selectedFilters = document.querySelector(".selected-filters");
  const totalCountElement = document.getElementById("total-count");
  const resetIcon = document.querySelector(".reset-icon");

  // 업데이트된 총 건수 계산
  function updateTotalCount() {
    let total = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total += parseInt(checkbox.dataset.count || 0);
      }
    });
    totalCountElement.textContent = total;
  }

  // 필터 태그 추가
  function addFilterTag(name, checkbox) {
    const existing = selectedFilters.querySelector(`[data-name="${name}"]`);
    if (existing) return;

    const tag = document.createElement("div");
    tag.classList.add("filter-tag");
    tag.dataset.name = name;
    tag.innerHTML = `
      ${name} <span class="remove"><i class="fa-solid fa-xmark"></i></span>
    `;
    tag.querySelector(".remove").addEventListener("click", () => {
      checkbox.checked = false;
      tag.remove();
      if (selectedFilters.children.length === 0) {
        selectedFilters.style.display = "none";
      }
      updateTotalCount();
    });
    selectedFilters.appendChild(tag);
    selectedFilters.style.display = "flex";
  }

  // 체크박스 클릭 이벤트 처리
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const name = checkbox.dataset.name;
      if (checkbox.checked) {
        addFilterTag(name, checkbox);
      } else {
        const tag = selectedFilters.querySelector(`[data-name="${name}"]`);
        if (tag) tag.remove();
      }
      selectedFilters.style.display = selectedFilters.children.length ? "flex" : "none";
      updateTotalCount();
    });
  });

  // 초기화 버튼 클릭
  resetIcon.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    selectedFilters.innerHTML = "";
    selectedFilters.style.display = "none";
    updateTotalCount();
  });

  // 초기 실행 시 총 건수 설정
  updateTotalCount();
});
