const newForm = document.querySelector(".new-form");
let value = 0;
console.log(newForm);

function submitForm(e) {
  e.preventDefault();
  for (let i = 0; i <= 11; i++) {
    if (e.target[i].checked == true) {
      value += 1;
    }
  }
  console.log(value);
  for (let i = 0; i < 11; i++) {
    e.target[i].checked = false;
  }
  if (value == 0) {
    modalInfo.innerHTML = `Please select at least one option`;
  } else if (value <= 3) {
    modalInfo.innerHTML = `O'rtacha ehtimoldan past
    Sizda prostatit bor yoki yo'qligini aniq aytish mumkin emas. Ammo, agar siz allaqachon 30 yoshda bo'lsangiz, Adenofrinni parvarish qilish kursi bilan prostata bezingizga g'amxo'rlik qilishingiz kerak. Bu ushbu makkor kasallikning yuzaga kelishi mumkin bo'lgan salbiy asoratlarining oldini olishga yordam beradi.Ehtimollik o'rtacha darajadan past
    Sizda prostatit bor yoki yo'qligini aniq aytish mumkin emas. Ammo, agar siz allaqachon 30 yoshda bo'lsangiz, Adenofrinni parvarish qilish kursi bilan prostata bezingizga g'amxo'rlik qilishingiz kerak. Bu ushbu makkor kasallikning mumkin bo'lgan salbiy asoratlarini oldini olishga yordam beradi.`;
    value = 0;
  } else if (value <= 5) {
    modalInfo.innerHTML = `Diqqat! 
    Ko'tarilgan tahdid!
    Siz xavf ostidasiz. Vaqtni behuda sarflamang, fibroz boshlanishidan oldin muammoni zudlik bilan hal qiling - prostata to'qimasini biriktiruvchi to'qima bilan almashtirish, bu prostata o'limini anglatadi. Agar siz har qanday yoshda erkak bo'lib qolishni istasangiz, Adenofrinni ertaga qoldirmasdan qabul qilishni boshlang!`;
    value = 0;
  } else if (value <= 11) {
    modalInfo.innerHTML = `Siz xavf ostidasiz!
    Hech qanday shubha yo'q - bu prostatit. Va, ehtimol, ishlar yomon. Biz rivojlangan uzoq muddatli kasallik haqida gapiramiz va bu prostata saratoni rivojlanishiga tahdid solishi mumkin. Tiklanishni tezlashtirish va natijani ishonchli tarzda mustahkamlash uchun prostatitni kompleks davolashda adenofrindan foydalaning.`;
    value = 0;
  }
}

const newFormModal = document.querySelector("#newFormModal");
const modalInfo = document.querySelector("#modalInfo");
function toggleModal() {
  newFormModal.classList.toggle("newFrom-open");
}
