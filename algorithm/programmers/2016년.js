function getDayName(a, b) {
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const day = new Date(`2016/${a}/${b}`).getDay();

  return dayList[day] ? dayList[day] : new Error('유효하지 않은 날짜');
}