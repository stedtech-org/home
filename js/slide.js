
//スライドショー

        //最新の画像を前に出すようにお願いします。


        let num = -1;
        
        const pics_src = [
            "img/26sted.png",
            "img/STST.png",
            "img/stedqiita2.png",
            "img/stedx2.png",
            "img/stednew.png"
        ];
        
        const indicators = [
            document.getElementById("spanone"), 
            document.getElementById("spantwo"),
            document.getElementById("spantree"),
            document.getElementById("spanfour"),
            document.getElementById("spanfive")
        ];


        function updateIndicators() {
    indicators.forEach((indicator, index) => {
        if (index === num) {
            indicator.style.color = "black"; // アクティブな画像の場合
        } else {
            indicator.style.color = "#808080"; // 非アクティブな画像の場合
        }
    });
}
        
function slideshow_timer(){
 if (num === 4){
      num = 0;
  } else {
    num ++;
  }
  document.getElementById("top-img").src = pics_src[num];
    updateIndicators();
}

        indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function() {
        num = index; // クリックされたインジケーターのインデックスに切替
        document.getElementById("top-img").src = pics_src[num];
        updateIndicators(); // インジケーターのスタイルを更新
    });
    
});
        
    document.getElementById("top-img").addEventListener("click", function() {

    if (num === -1 || num === 0){
        
    }
    if (num === 1){
        window.open("https://suzuri.jp/stedtechorg");
    }
    if (num === 2){
        window.open("https://qiita.com/organizations/stedtech");
    }
    if (num === 3){
        window.open("https://x.com/stedtechorg");
    }
});
        
setInterval(slideshow_timer, 6000);