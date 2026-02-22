window.addEventListener("load", function(){
  setTimeout(() => {
    const splash = document.getElementById("splash");
    splash.style.transition = "opacity 0.5s";
    splash.style.opacity = 0;
    setTimeout(() => splash.remove(), 500);
  }, 2350); // 合計4秒でスプラッシュ削除
});