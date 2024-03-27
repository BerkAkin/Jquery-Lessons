//Oyunun ayarları

const game = {
    score:0,
    gameOver:true,
    last:0,
    holes:12,
    ender:25
}



//oyun tahtasını çağırma işlemi
makeGameBoard();

//oyun tahtasında köstebeğe tıklandığında çalışacak olan hitmole fonskiyonu ayarlanır
$('.game').on('click','.mole',hitMole)

$('#start').click(startGame);






//köstebek avlandığı zaman köstebeK  gizlenir ve bir üst ebeveynden hit gösterilir vurulduğuna dair
function hitMole(){
    $(this).hide().parent().find('.hit').show().fadeOut(10000,function(){
        //köstebek vurulduğunda 200ms sürede hit kaybolur ve o karedeki toprak nesnesi bulunup gösterilir
        $(this).parent().find('.dirt').show();
    })
    game.score++;
    message()

}




function message(){
    let html =`<div>Score : ${game.score}</div>
    <div>Moles Left: ${game.ender}</div>`
    $('.message').html(html);
}







//oyunu başlatan başlatıcı
function starter(){
    //rasgele deliği seçmek için delik ve rasgele fonksiyonu kullanılır ki köstebek yeri rasgele atansın
    const $ele = $('.hole'+randomHole());
    showMole($ele);
}





//köstebeği göstermek için fonksiyon
function showMole($ele){
    game.ender--;
    if(game.ender<=0){
        game.gameOver  = true
        $('#start').show();
    }
    const timer =  550;
    //rasgelelikten gelen delikteki toprağı gizlemek için (o toprak bulunup gizlenir ve aynı karedeki köstebek indeksten bulunup gösterilir)
    $ele.find('.dirt').hide(0,()=>{
        $ele.find('.mole').show();
    })
    //köstebeklerin gösterilmesi için zamanlayıcı fonksiyon
    setTimeout(()=>{
        $ele.find('.dirt').show();
        $ele.find('.mole').hide();
        $ele.find('.hit').hide();
        //oyun bitmediyse köstebekler rasgele olarak gösterilmeye devam eder
        if(!game.gameOver){
           starter() 
           message()

        }
    }, timer)
}




//rasgele delik fonksiyonu, zaten açık olan ve gösterilen köstebeğin yeniden seçilmesini engellemek için
function randomHole(){
    //oyun delik sayııs kadar rasgele seçim
    const val = Math.floor(Math.random()*game.holes);
    //en son gösterilen deliğin indeksi game settingsde belirtildiği için oradan bunu seçip rasgelelik oluşturuyoruz
    if(val == game.last){
        return randomHole();
    }
    game.last = val;
    return val;
}




//oyun başlatma
function startGame(){
    //oyun başladığında butonu gizlemek için
    $('#start').hide();
    //oyun başladığında oyunun bitme durumu hayır olarak işaretlenir
    game.gameOver = false;
    //oyunun başladığında skor sıfırlanır
    game.score = 0;
    //herhangi bir bozulma olmasına karşın köstebek değeri defaulta atanır
    game.ender = 25;
    //Oyunu başlatan başlatıcı fonksiyon
    starter()
}




//oyun tahtasını oluşturma fonksiyonu
function makeGameBoard(){
    //oyun tahtasındaki delikler için
    for(let i = 0; i< game.holes;i++){
        //her bir tahta karesi için div nesnesi oluşturma ve daha sonra düzenelyebilmek adına değişkene atama
        $div = $('<div>')
        //rasgele delik seçimi için geçici değişken
        const temp = `hole${i}`;
        //div nesnesini hole'a çevirme
        $div.addClass('hole').addClass(temp).appendTo('.game');
        //Köstebek nesnelerini oluşturma ve tahtaya ekleme
        $('<div>').addClass('mole').html('🐻').appendTo($div);
        //Taş nesnelerini oluşturma ve tahtaya ekleme
        $('<div>').addClass('dirt').html('🪨').appendTo($div);
        //Hit nesnelerini oluşturma ve tahtaya ekleme (Hit nesneleri köstebek vuruşu yapılınca taş ve köstebeğin arasında gözükecek olan nesneler)
        $('<div>').addClass('hit').html('💀').appendTo($div);
    }
}

