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
// Product slider js

   // Class slider js
 $(".best-seller-slider").slick({
  dots: false,
  infinite: true,
  centerMode: false,
  centerPadding: '0px',
  arrows: true,
  autoplay: true,
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

   // Class slider js
   $(".brand-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
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
  // Class slider js

  // Review slider js
   $(".review-slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    centerMode: true,
    // centerPadding: '60px',
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1399,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          dots: false,
          arrows: true,
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
          centerMode: false,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Review slider js

  //Single product slider
  $(document).on('ready', function() {
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
    asNavFor: '.center'
  });
  $('.center').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    asNavFor: '.regular',
    dots: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1399,
      settings: {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 991,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        dots: false,
        arrows: false,
        slidesToScroll: 1
      }
    }
  ]
  });
});
//Single product slider
    
// Product tab area
$(document).ready(function() {
  $('.category-area ul li').click(function() {
    var tab_id = $(this).attr('data-tab');
    $('.category-area ul li').removeClass('current');
    $('.category-area .tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
});
// Product tab area

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
// Shrink header 

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
  // Password Show 

// Offer countdown----------
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
          adImage.src = "http://localhost/paw-crush/wp-content/uploads/2025/07/advertise-pic-closed.png";
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
CountDown("2025-07-31T24:00:00.000000+05:30");
// Offer countdown----------



//Offer Countdown for One day Timer

// function CountDown(startDateStr) {
//   const startDate = new Date(startDateStr);
//   const endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // +24 hours

//   const selectDay = document.getElementById("day");
//   const selectHour = document.getElementById("hour");
//   const selectMinute = document.getElementById("minute");
//   const selectSecond = document.getElementById("second");

//   const countdownText = document.getElementById('countdown-text');
//   const grabBtn = document.getElementById('grab-deal-btn');
//   const imageEl = document.getElementById('advertise-pic');

//   const _seconds = 1000;
//   const _minutes = _seconds * 60;
//   const _hours = _minutes * 60;
//   const _days = _hours * 24;

//   const timer = setInterval(() => {
//     const now = new Date();

//     if (now < startDate) {
//       countdownText.innerText = "Sale is Coming Soon";
//       grabBtn.style.display = "none";
//       selectDay.innerText = selectHour.innerText = selectMinute.innerText = selectSecond.innerText = "00";
//       return;
//     }

//     if (now >= endDate) {
//       countdownText.innerText = "Sale is Closed";
//       grabBtn.style.display = "none";
//       if (imageEl) {
//         imageEl.src = "images/advertise-pic-closed.png";
//       }
//       selectDay.innerText = selectHour.innerText = selectMinute.innerText = selectSecond.innerText = "00";
//       clearInterval(timer);
//       return;
//     }

//     // Sale is LIVE
//     const remaining = endDate - now;
//     const days = Math.floor(remaining / _days);
//     const hours = Math.floor((remaining % _days) / _hours);
//     const minutes = Math.floor((remaining % _hours) / _minutes);
//     const seconds = Math.floor((remaining % _minutes) / _seconds);

//     countdownText.innerText = "Woo! Sale is Live";
//     grabBtn.style.display = "inline-block";

//     selectDay.innerText = days < 10 ? "0" + days : days;
//     selectHour.innerText = hours < 10 ? "0" + hours : hours;
//     selectMinute.innerText = minutes < 10 ? "0" + minutes : minutes;
//     selectSecond.innerText = seconds < 10 ? "0" + seconds : seconds;
//   }, 1000);
// }
// // Sale starts on July 26, 2025 at midnight
// CountDown("2025-07-27T00:00:00+05:30");

//Inspect mode off
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//   });
//   document.onkeydown = function (e) {
//     if (
//       e.keyCode === 123 || // F12
//       (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I or J
//       (e.ctrlKey && e.keyCode === 85) // Ctrl+U
//     ) {
//       return false;
//     }
//   };

//Header menu class add
$(function(){
    $(".navbar-nav li").addClass("nav-item");
    $(".navbar-nav li a").addClass("nav-link");
    $(".menu-item-has-children a").addClass("dropdown-toggle");
    $(".menu-item-has-children ul").addClass("dropdown-menu shadow");
    $(".menu-item-has-children").addClass("position-relative");
    $(".dropdown a").addClass("dropdown-toggle");
    $(".menu-item-has-children .nav-link").attr('data-bs-toggle', 'dropdown');
    $(".sub-menu li").removeClass("nav-item");
    $(".sub-menu li a").removeClass("dropdown-toggle");
    $(".sub-menu li a").removeAttr('data-bs-toggle', 'dropdown');
    $(".sub-menu li a").removeClass("nav-link");
    $(".sub-menu li a").addClass("dropdown-item");
  });
//Header menu class add

 // About Counter function
        jQuery(function($) {
        // Counter function
        function animateCounter($el) {
          const target = $el.text();
          const decimals = (target.split(".")[1] || "").length;

          $el.prop('Counter', 0).animate({
            Counter: target
          }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              $el.text(parseFloat(now).toFixed(decimals));
            }
          });
        }

        // Observe each .stat-number element
        const counters = document.querySelectorAll('.stat-number');
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const $el = $(entry.target);
                if (!$el.hasClass('counted')) {
                  $el.addClass('counted');
                  animateCounter($el);
                  observer.unobserve(entry.target); // Only once
                }
              }
            });
          }, { threshold: 0.6 });

          counters.forEach(counter => observer.observe(counter));
        } else {
          // Fallback: animate all on load
          $('.stat-number').each(function () {
            animateCounter($(this));
          });
        }
      });
 // About Counter function

  // Preloader JS function
    // Wait until the full page has loaded
  window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      // Optionally add a fade-out animation
      preloader.style.transition = 'opacity 0.5s ease';
      preloader.style.opacity = '0';

      // Remove it from the DOM after fade out
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }
  });
  // Preloader JS function

// Gallery JS function
  jQuery(function($) {
    $('.grid-wrapper .gallery-box').each(function(index) {
      if (index === 0 || index === 3) {
        $(this).addClass('tall');
      } else if (index === 2) {
        $(this).addClass('wide');
      }
      else if (index === 5) {
        $(this).addClass('big');
      }
    });
  });
  // Gallery JS function