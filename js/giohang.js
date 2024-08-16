function addToCart(index) {
    var listTen  = document.querySelectorAll("#tenSP");
    var listGia = document.querySelectorAll("#giaSP");
    var listImg = document.querySelectorAll("#imgSP");
    var btnAdd= document.querySelectorAll("#btnAdd");
    btnAdd[index].style.opacity=0;
    var ten = listTen[index].textContent;
    var gia = listGia[index].textContent;
    var url = new URL(listImg[index].src);
    var urlImg = url.pathname;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({index,ten,gia,urlImg});
    localStorage.setItem('cart', JSON.stringify(cart));
}
// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//         var latitude = position.coords.latitude;
//         var longitude = position.coords.longitude;
//     });
// } else {
//     alert("Trình duyệt của bạn không hỗ trợ Geolocation.");
// }
    var checkShow=false
    function updateCountdown() {
        var now = new Date();

        var targetTime = new Date();
        targetTime.setHours(20, 0, 0, 0);
        var flashSale = new Date();
        flashSale.setHours(22, 0, 0, 0);
        if (now > targetTime && now > flashSale) {
            targetTime.setDate(targetTime.getDate() + 1);
        }
        if(now >= targetTime && now <= flashSale){
            document.querySelector('.clock').classList.add('hidden');
            checkShow= true;
        }
        else{
            document.querySelector('.clock').classList.remove('hidden');
            checkShow= false;
        }

        var timeDiff = targetTime - now;
        var seconds = Math.floor(timeDiff / 1000) % 60;
        var minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
        var hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
        document.querySelector('.hours').textContent = hours;
        document.querySelector('.minutes').textContent = minutes;
        document.querySelector('.seconds').textContent = seconds;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
    if(checkShow){
        new bootstrap.Modal(document.getElementById('flashSale')).show();
    }