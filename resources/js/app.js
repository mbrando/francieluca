$(function() {
    $('div#clock').countdown("2015/06/28", function(event) {
      var $this = $(this);
      switch(event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
        case "weeks":
        case "daysLeft":
          $this.find('span#'+event.type).html(event.value);
          break;
        case "finished":
          $this.hide();
          break;
      }
    });
  });

