document.addEventListener("DOMContentLoaded", function () {
  const printBtn = document.querySelector(".buttons button:first-child");
  const shareBtn = document.querySelector(".buttons button:last-child");

  printBtn.addEventListener("click", function () {
    window.print();
  });

  shareBtn.addEventListener("click", async function () {
    const formData = new FormData(document.getElementById("bar-form"));
    let text = "📦 اطلاعات بارنامه:\n\n";

    for (const [key, value] of formData.entries()) {
      if (value.trim()) text += `${key}: ${value}\n`;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: "بارنامه",
          text: text,
        });
      } catch (err) {
        console.log("اشتراک لغو شد یا خطا:", err);
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert("📋 اطلاعات فرم در کلیپ‌بورد کپی شد!");
    }
  });
});
function toPersianNumber(str) {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return str.replace(/\d/g, d => persianDigits[d]);
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', () => {
    input.value = toPersianNumber(input.value);
  });
});

document.querySelectorAll('strong').forEach(el => {
  el.textContent = toPersianNumber(el.textContent);
});
