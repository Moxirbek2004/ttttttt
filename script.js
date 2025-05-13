// DOM to'liq yuklangandan so'ng kodni ishga tushirish
document.addEventListener('DOMContentLoaded', function() {
    // Har bir kun bo'limini tanlash
    const kunlar = document.querySelectorAll('.day');

    // Har bir kun bo'limiga "click" hodisasini qo'shish
    kunlar.forEach(function(kun) {
        kun.addEventListener('click', function() {
            // Bosilgan kun nomini olish
            const kunNomi = kun.querySelector('h2').textContent;
            // Alert orqali foydalanuvchiga xabar berish
            alert(`${kunNomi} kunini tanladingiz.`);
        });
    });
});
