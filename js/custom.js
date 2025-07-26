 // Product slider js
 $(".banner_slider").slick({
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay:true,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
 $(".best-seller-slider").slick({
  dots: false,
  infinite: true,
  centerMode: false,
  centerPadding: '0px',
  arrows: true,
  autoplay: false,
  fade: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [{
      breakpoint: 1399,
      settings: {
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
});

   // Class slider js
   $(".brand-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: false,
    fade: false,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1399,
        settings: {
          dots: true,
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

    
// Product tab area
$(document).ready(function() {
  $('.work-area ul li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('.work-area ul li').removeClass('current');
    $('.work-area .tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});

 // Shrink header 
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 270) {
        $(".header-area").addClass("shrink")
      } else {
        $(".header-area").removeClass("shrink")
      }
    });
  });

// Password Show 
  $(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });


// // countdown----------
// function CountDown(lastDate) {
//   const selectDay = document.getElementById("day");
//   const selectHour = document.getElementById("hour");
//   const selectMinute = document.getElementById("minute");
//   const selectSecound = document.getElementById("second");
//   if (selectDay && selectHour && selectMinute && selectSecound) {
//     let showDate = "";
//     let showHour = "";
//     let showMinute = "";
//     let showSecound = "";
//     // count Down
//     const provideDate = new Date(lastDate);
//     // format date
//     const year = provideDate.getFullYear();
//     const month = provideDate.getMonth();
//     const date = provideDate.getDate();
//     const hours = provideDate.getHours();
//     const minutes = provideDate.getMinutes();
//     const seconds = provideDate.getSeconds();

//     // date calculation logic
//     const _seconds = 1000;
//     const _minutes = _seconds * 60;
//     const _hours = _minutes * 60;
//     const _date = _hours * 24;
//     const timer = setInterval(() => {
//       const now = new Date();
//       const distance =
//         new Date(year, month, date, hours, minutes, seconds).getTime() -
//         now.getTime();
//       if (distance < 0) {
//         document.getElementById('countdown-text').innerHTML = "Sale is Closed";
//         document.getElementById('grab-deal-btn').style.display = "none";

//         const adImage = document.getElementById('advertise-pic');
//         if (adImage) {
//           adImage.src = "images/advertise-pic-closed.png";
//         }

//         clearInterval(timer);
//         return;
//       }
//       showDate = Math.floor(distance / _date);
//       showMinute = Math.floor((distance % _hours) / _minutes);
//       showHour = Math.floor((distance % _date) / _hours);
//       showSecound = Math.floor((distance % _minutes) / _seconds);
//       selectDay.innerText = showDate < 10 ? `0${showDate}` : showDate;
//       selectHour.innerText = showHour < 10 ? `0${showHour}` : showHour;
//       selectMinute.innerText = showMinute < 10 ? `0${showMinute}` : showMinute;
//       selectSecound.innerText =
//         showSecound < 10 ? `0${showSecound}` : showSecound;
//     }, 1000);
//   }
// }
// CountDown("2025-08-15T24:00:00.000000+05:30");

function CountDown(startDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // +24 hours

  const selectDay = document.getElementById("day");
  const selectHour = document.getElementById("hour");
  const selectMinute = document.getElementById("minute");
  const selectSecond = document.getElementById("second");

  const countdownText = document.getElementById('countdown-text');
  const grabBtn = document.getElementById('grab-deal-btn');
  const imageEl = document.getElementById('advertise-pic');

  const _seconds = 1000;
  const _minutes = _seconds * 60;
  const _hours = _minutes * 60;
  const _days = _hours * 24;

  const timer = setInterval(() => {
    const now = new Date();

    if (now < startDate) {
      countdownText.innerText = "Sale is Coming Soon";
      grabBtn.style.display = "none";
      selectDay.innerText = selectHour.innerText = selectMinute.innerText = selectSecond.innerText = "00";
      return;
    }

    if (now >= endDate) {
      countdownText.innerText = "Sale is Closed";
      grabBtn.style.display = "none";
      if (imageEl) {
        imageEl.src = "images/advertise-pic-closed.png";
      }
      selectDay.innerText = selectHour.innerText = selectMinute.innerText = selectSecond.innerText = "00";
      clearInterval(timer);
      return;
    }

    // Sale is LIVE
    const remaining = endDate - now;
    const days = Math.floor(remaining / _days);
    const hours = Math.floor((remaining % _days) / _hours);
    const minutes = Math.floor((remaining % _hours) / _minutes);
    const seconds = Math.floor((remaining % _minutes) / _seconds);

    countdownText.innerText = "Woo! Sale is Live";
    grabBtn.style.display = "inline-block";

    selectDay.innerText = days < 10 ? "0" + days : days;
    selectHour.innerText = hours < 10 ? "0" + hours : hours;
    selectMinute.innerText = minutes < 10 ? "0" + minutes : minutes;
    selectSecond.innerText = seconds < 10 ? "0" + seconds : seconds;
  }, 1000);
}
// Sale starts on July 26, 2025 at midnight
CountDown("2025-07-26T00:00:00+05:30");

