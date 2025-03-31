// script.js
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainPage = document.getElementById('main-page');
const thankYouPage = document.getElementById('thank-you-page');
const music = document.getElementById('music');
const waitMessage = document.getElementById('wait-message');

let clickCount = 0;

// เริ่มต้นให้หน้าแรกแสดง และหน้าขอบคุณซ่อน
mainPage.style.display = 'block';
thankYouPage.style.display = 'none';

noBtn.addEventListener('click', () => {
    clickCount++;
    
    // ทำให้ปุ่ม "ไม่เป็น" เล็กลงทีละ 10%
    noBtn.style.transform = `scale(${1 - clickCount * 0.1})`;
    
    // กดครบ 5 ครั้ง หายไป
    if (clickCount >= 5) {
        noBtn.style.opacity = '0';
        setTimeout(() => {
            noBtn.style.display = 'none';
        }, 500);
    }
});

yesBtn.addEventListener('click', () => {
    // เล่นเพลงทันทีและเปลี่ยนหน้า
    music.src = "https://www.youtube.com/embed/Om6yAu6EvyE?autoplay=1";
    mainPage.style.display = 'none';
    thankYouPage.style.display = 'flex'; // เปลี่ยนหน้าเป็น flex เพื่อจัดกลาง
    
    // แสดงข้อความ "รอฟังเพลงด้วยนะ อิอิ" หลังเปลี่ยนหน้า
    setTimeout(() => {
        waitMessage.style.display = 'block';
    }, 500); // รอ 0.5 วินาที
});