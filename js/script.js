// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });

  // Khởi tạo Particles.js
  particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ff4081" },
      shape: {
        type: "heart",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.7,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ff4081",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });

  // Hiệu ứng fade-in cho tất cả các trang
  const container = document.querySelector(".container");
  container.classList.add("fade-in");

  // Hiệu ứng tương tác cho trang "Điều anh yêu ở em"
  const lovePage = document.querySelectorAll(".love-item");
  lovePage.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
      this.querySelector(".love-description").classList.toggle("fade-in");
    });
  });

  const journeyButton = document.getElementById("journeyButton");
  if (journeyButton) {
    let clickedCount = 0; // Biến đếm số lần nhấp
    const greetingHeading = document.querySelector(".greeting h1");
    const greetingText = document.querySelector(".greeting p");

    journeyButton.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

      if (clickedCount === 0) {
        // Lần nhấp đầu tiên: Đổi nội dung và phát nhạc
        journeyButton.innerHTML = "Tiếp tục click ở đây nèeee"; // Đổi nội dung thẻ sau lần nhấp đầu
        if (greetingHeading) {
          greetingHeading.innerHTML =
            "Hôm nay, nhân ngày 20/10, em muốn dành tặng cho người con gái đặc biệt nhất cuộc đời mình một món quà từ trái tim. Hãy cùng nhau khám phá hành trình yêu thương mà chúng ta đã cùng nhau viết nên nhé!"; // Thay đổi nội dung lời chào
        }
        if (greetingText) {
          greetingText.innerHTML =
            "Nào! Bây giờ hãy bắt đầu khám phá hành trình yêu thương của chúng ta nèeee"; // Thay đổi nội dung đoạn văn
        }

        clickedCount++; // Tăng biến đếm lên
      } else if (clickedCount === 1) {
        // Lần nhấp thứ hai: Chuyển đến trang journey.html
        window.location.href = "journey.html";
      }
    });
  }

  // Thêm biểu tượng trái tim vào các tiêu đề
  const headings = document.querySelectorAll("h1, h2, h3");
  headings.forEach((heading) => {
    heading.innerHTML = `<span class="heart-icon">❤</span> ${heading.innerHTML}`;
  });

  // Thêm hiệu ứng AOS cho các phần tử
  const containers = document.querySelectorAll(
    ".container, .love-box, .timeline-item"
  );
  containers.forEach((container, index) => {
    container.setAttribute("data-aos", "fade-up");
    container.setAttribute("data-aos-delay", index * 100);
  });
});

// Ví dụ nếu bạn cần thêm event chuyển động trái tim (có thể áp dụng cho trang "Điều anh yêu ở em")
function animateHearts() {
  const hearts = document.querySelectorAll(".heart");
  hearts.forEach((heart) => {
    heart.addEventListener("click", function () {
      this.classList.add("bounce");
      setTimeout(() => {
        this.classList.remove("bounce");
      }, 1000); // Kết thúc sau 1 giây
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các hộp love-box
  const loveBoxes = document.querySelectorAll(".love-box");

  // Thêm sự kiện click vào mỗi hộp
  loveBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Kiểm tra nếu hộp chưa được mở thì mở hộp và thay đổi nội dung
      if (!this.classList.contains("active")) {
        this.classList.add("active"); // Thêm class active để thay đổi giao diện
      }
    });
  });
});
