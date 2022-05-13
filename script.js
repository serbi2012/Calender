const date = new Date();
const monthDays = document.querySelector(".days");

const cal = () => {
  const 년도 = date.getFullYear();
  const 월 = date.getMonth();
  const 일 = date.getDate();

  const lastDay = new Date(년도, 월 + 1, 0).getDate();

  const prevLastDay = new Date(년도, 월, 0).getDate();

  const firstDayIndex = new Date(년도, 월, 1).getDay();

  const lastDayIndex = new Date(년도, 월 + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const currentMonth = document.querySelector(".month h1");

  const current = document.querySelector(".month p");

  const 찐요일 = ["일", "월", "화", "수", "목", "금", "토"];
  const 요일 = 찐요일[date.getDay()];
  currentMonth.innerHTML = `${월 + 1}월`;

  current.innerHTML = `${년도}년 ${월 + 1}월 ${일}일 ${요일}요일`;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  monthDays.innerHTML = days;

  monthDays.addEventListener("click", () => {
    const target = event.target;
    const dayday = new Date(년도, 월, target.textContent).getDay();
    current.innerHTML = `${년도}년 ${월 + 1}월 ${target.textContent}일 ${
      찐요일[dayday]
    }요일`;
  });
};

const 다음버튼 = document.querySelector(".다음버튼");
const 이전버튼 = document.querySelector(".이전버튼");

이전버튼.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  cal();
});

다음버튼.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  cal();
});

cal();
