//burger menu
document.querySelector(".burger-trigger").addEventListener("click", function (event) {
  document.querySelector(".burger").classList.toggle("active");
  event.currentTarget.classList.toggle("active");
});
function countUp(targetElement, targetNumber, duration) {
  var stepMultiplier = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var start = 0;
  var startTime = null;
  function updateNumber(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = (timestamp - startTime) / duration;
    var currentNumber = Math.min(Math.floor(progress * targetNumber * stepMultiplier), targetNumber);
    targetElement.innerText = currentNumber;
    if (currentNumber < targetNumber) {
      requestAnimationFrame(updateNumber);
    }
  }
  requestAnimationFrame(updateNumber);
}
$("#slider-sponsors").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [{
    breakpoint: 1480,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
});
gsap.fromTo(".hero-bg", {
  opacity: 0,
  scale: 1.05
}, {
  opacity: 1,
  scale: 1,
  duration: 1.5,
  ease: "power3.out"
});
ScrollTrigger.create({
  trigger: "#counter-section",
  start: "top center",
  once: true,
  // 只觸發一次
  onEnter: function onEnter() {
    var tl = gsap.timeline();
    var counter1 = document.getElementById("counter1");
    var counter2 = document.getElementById("counter2");
    var counter3 = document.getElementById("counter3");
    if (counter1) {
      tl.add(function () {
        return countUp(counter1, 120, 2000, 6);
      });
    }
    if (counter2) {
      tl.add(function () {
        return countUp(counter2, 70, 2000, 2);
      }); // 等前面 2 秒完成
    }
    if (counter3) {
      tl.add(function () {
        return countUp(counter3, 50, 2000, 2);
      }); // 再等 2 秒
    }
  }
});
function animateBoxes(section) {
  // 設定初始狀態，讓元素從下方浮出
  gsap.set("".concat(section, " .box-animate"), {
    opacity: 0,
    y: 50
  });
  ScrollTrigger.batch("".concat(section, " .box-animate"), {
    start: "top center",
    // 這個區塊的 .box-animate 進入視口時開始
    once: false,
    // 設 true 只執行一次，false 會每次滾動時觸發
    onEnter: function onEnter(batch) {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2 // 依序出現
      });
    }
  });
}
animateBoxes("#section-1");
animateBoxes("#section-2");
animateBoxes("#section-3");