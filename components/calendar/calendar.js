function selectDate(date) {
    $('#calendar-wrapper').updateCalendarOptions({
      date: date
    });
    console.log(calendar.getSelectedDate());
  }
  
  var defaultConfig = {
    weekDayLength: 1,
    date: new Date(),
    onClickDate: selectDate,
    showYearDropdown: true,
    startOnMonday: false,
  };
  
  var calendar = $('#calendar-wrapper').calendar(defaultConfig);
  console.log(calendar.getSelectedDate());