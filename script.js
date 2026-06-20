
// عندما يتم تحميل الصفحة لأول مرة، نقوم بالتحقق من وجود صورة محفوظة في localStorage
window.onload = function() {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
        document.getElementById("image").src = savedImage;
    }
};

// فتح نافذة اختيار الملف
function openFileDialog() {
    document.getElementById("fileInput").click();
}

// تحميل الصورة داخل الدائرة الكبيرة
function loadImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const image = reader.result;
        document.getElementById("image").src = image;

        // حفظ الصورة في localStorage
        localStorage.setItem("savedImage", image);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// إعادة تحميل الصفحة مع الحفاظ على الصورة المحفوظة
function reloadPage() {
    window.location.reload();
}














function displayCurrentDate() {
    const today = new Date();  // الحصول على التاريخ الحالي
    const options = { year: 'numeric', month: 'long', day: 'numeric' };  // خيارات تنسيق التاريخ

    // تحديد العنصر الذي سيتم عرض التاريخ فيه
    const currentDateElement = document.getElementById("today-date");

    // عرض التاريخ باستخدام toLocaleDateString مع الخيارات المحددة
    currentDateElement.textContent = today.toLocaleDateString('en-US', options);  // عرض التاريخ باللغة الإنجليزية
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", displayCurrentDate);


document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const month = today.getMonth();  // الشهر الحالي (من 0 إلى 11)
    const year = today.getFullYear(); // السنة الحالية
    const daysInMonth = new Date(year, month + 1, 0).getDate();  // عدد الأيام في الشهر
    const firstDayOfMonth = new Date(year, month, 1).getDay();  // اليوم الأول من الشهر (0 = الأحد, 1 = الاثنين, ...)



   
    // إنشاء التقويم
    const calendarElement = document.getElementById("calendar");
    let html = '';

    // إضافة الخانات الفارغة حتى يبدأ اليوم الأول من الشهر
    for (let i = 0; i < firstDayOfMonth; i++) {
       html += `<div class="day"></div>`; // خانة فارغة
    }

    // إضافة أيام الشهر
    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate();
        html += `<div class="day ${isToday ? 'today' : ''}">${day}</div>`;
    }

    calendarElement.innerHTML = html;
});














function showModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function submitNote() {
    const note = document.getElementById("note").value;
   
    
    if (note === "") {
        alert("يرجى كتابة ملاحظة!");
    } else {
        createNoteCard(note);
        closeModal();
    }
}

function createNoteCard(note) {
    const notesContainer = document.getElementById("notes-container");

    // إنشاء مستطيل جديد
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");


    const check=document.createElement("input");
    check.type="checkbox";
    check.classList.add("check");
    // إنشاء النص
    const noteText = document.createElement("div");
    noteText.classList.add("note-text");
    noteText.innerText = note;

    // إضافة الأيقونة والنص إلى المستطيل
    noteCard.appendChild(check);
    noteCard.appendChild(noteText);
    
    // إضافة المستطيل إلى الحاوية
    notesContainer.appendChild(noteCard);
}






 
document.getElementById('out').addEventListener('click',function(){
    const isConfirmed=confirm("Sign Out.");
    if(isConfirmed){
        localStorage.clear();
        sessionStorage.clear();
        alert("you have successfully logged out! Redirecting to the login page.");
        window.location.href="landingpage.html";
    }else{
        alert("logout canceled."); }
})





