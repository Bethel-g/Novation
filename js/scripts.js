/* ==========================================
   Counter/Stat Animation on Load
   ========================================== */
 // Initialize CountUp.js for each counter
 $('.counter').each(function() {
     var $this = $(this);
     var countTo = $this.attr('data-count');
     
     var options = {
         useEasing: true,
         suffix: '',
         decimalPlaces: 0,
         duration: 3
     };
     
     var counter = new CountUp($this.get(0), 0, countTo, 0, options.duration, options);
     
     if (!counter.error) {
         counter.start();
     } else {
         console.error(counter.error);
     }
 });