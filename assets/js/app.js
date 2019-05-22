$(function(){

    // ボタンがクリックされたら！新しい書き方！
    // 後からもしbtnの追加あれば、同じ機能が実行される便利さがある
    $("#search-btn").on ("click" , function(){
        
        // itunesに曲の検索をしに行く(Ajax）
        $.ajax({
            // データ通信するところ
            // 検索して貼り付ける
            url : "https://itunes.apple.com/search" ,
            // GETかPOSTか 
            type : "GET" ,
            // 検索結果をどんなフォーマットでほしいのか
            dataType : "jsonp" ,
            data : {
                term :"あいみょん" ,
                country : "jp" ,
            }

        }) .done( (data) =>{
            // 通信成功したとき
            console.log(data);

        }) .fail ((data) =>{
            // 通信失敗したとき
            console.log(error);
        })


    })


});