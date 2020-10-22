function play_se(){
    var test = new Audio('test.mp3');
    test.play();
}


$(function(){
    $('#9曲目').click(play_se);
});