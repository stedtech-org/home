const nav = document.querySelector("nav");
const toggle = document.getElementById("menu-toggle");

/* ===== ハンバーガー開閉 ===== */
toggle.addEventListener("click", function(e) {
    e.stopPropagation(); // ←これ重要
    nav.classList.toggle("active");
});

/* ===== メニュー外クリックで閉じる ===== */
document.addEventListener("click", function(e) {

    if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
    ) {
        nav.classList.remove("active");
    }
});

function close(){
    nav.classList.remove("active");
}
