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


// countdown----------
function CountDown(lastDate) {
  const selectDay = document.getElementById("day");
  const selectHour = document.getElementById("hour");
  const selectMinute = document.getElementById("minute");
  const selectSecound = document.getElementById("second");
  if (selectDay && selectHour && selectMinute && selectSecound) {
    let showDate = "";
    let showHour = "";
    let showMinute = "";
    let showSecound = "";
    // count Down
    const provideDate = new Date(lastDate);
    // format date
    const year = provideDate.getFullYear();
    const month = provideDate.getMonth();
    const date = provideDate.getDate();
    const hours = provideDate.getHours();
    const minutes = provideDate.getMinutes();
    const seconds = provideDate.getSeconds();

    // date calculation logic
    const _seconds = 1000;
    const _minutes = _seconds * 60;
    const _hours = _minutes * 60;
    const _date = _hours * 24;
    const timer = setInterval(() => {
      const now = new Date();
      const distance =
        new Date(year, month, date, hours, minutes, seconds).getTime() -
        now.getTime();
      if (distance < 0) {
        document.getElementById('countdown-text').innerHTML = "Sale is Closed";
        document.getElementById('grab-deal-btn').style.display = "none";

        const adImage = document.getElementById('advertise-pic');
        if (adImage) {
          adImage.src = "images/advertise-pic-closed.png";
        }

        clearInterval(timer);
        return;
      }
      showDate = Math.floor(distance / _date);
      showMinute = Math.floor((distance % _hours) / _minutes);
      showHour = Math.floor((distance % _date) / _hours);
      showSecound = Math.floor((distance % _minutes) / _seconds);
      selectDay.innerText = showDate < 10 ? `0${showDate}` : showDate;
      selectHour.innerText = showHour < 10 ? `0${showHour}` : showHour;
      selectMinute.innerText = showMinute < 10 ? `0${showMinute}` : showMinute;
      selectSecound.innerText =
        showSecound < 10 ? `0${showSecound}` : showSecound;
    }, 1000);
  }
}
CountDown("2025-08-15T24:00:00.000000+05:30");