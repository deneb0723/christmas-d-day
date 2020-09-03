//D-day 구하는 함수
//현재 날짜에서 미래 날짜를 뺐기 때문에 결과값은 마이너스
//그래서 day, hour,minute,second에 모두 -1을 곱해줌
function getTime() {
  const curDay = new Date().getTime();
  const xmasDay = new Date("2020-12-25:00:00:00+0900").getTime();
  const dDay = curDay - xmasDay;
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24)) * -1;
  const hour = Math.floor((dDay / (1000 * 60 * 60)) % 24) * -1;
  const minute = Math.floor((dDay / (1000 * 60)) % 60) * -1;
  const second = Math.floor((dDay / 1000) % 60) * -1;
  const dayBox = document.getElementById("daybox");
  dayBox.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`;
}

//매초마다 getTime함수가 실행되도록 함
setInterval(getTime, 1000);

function init() {
  getTime();
}
init();
