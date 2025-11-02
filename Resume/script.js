// รอให้ DOM โหลดเสร็จก่อน
document.addEventListener('DOMContentLoaded', function() {

    // ==== 1. ลูกเล่น: เปิดใช้งาน Bootstrap ScrollSpy ====
    // เพื่อให้ Navbar ไฮไลท์ตาม Section ที่เลื่อนไป
    const mainNav = document.body.querySelector('#main-nav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#main-nav',
            offset: 72, // ปรับค่า offset ให้เท่ากับความสูงของ Navbar
        });
    }


    // ==== 2. ลูกเล่น: Typing Effect (พิมพ์ดีด) ====
    const jobTitleElement = document.getElementById('job-title');
    const titles = ["Full Stack Developer",  "AI Enthusiast"]; // เพิ่ม "" เพื่อเว้นวรรค
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentTitle = titles[titleIndex];
        let displayText = '';

        if (isDeleting) {
            // ลบตัวอักษร
            displayText = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // พิมพ์ตัวอักษร
            displayText = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }

        jobTitleElement.textContent = displayText;

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentTitle.length) {
            // พิมพ์เสร็จแล้ว รอ 2 วินาที
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // ลบหมดแล้ว
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length; // ไปคำถัดไป
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    // เริ่มพิมพ์เมื่อโหลดหน้า
    if (jobTitleElement) {
        setTimeout(type, 1000); // เริ่มหลังจากโหลด 1 วินาที
    }


    // ==== 3. ลูกเล่น: Bootstrap Form Validation ====
    // สคริปต์มาตรฐานสำหรับเปิดใช้งาน Validation ของ Bootstrap
    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

});