new Vue({
    el: "#main",
    data: {
      show_menu: false,
      works: [
        {
          name: "Toucan palette generator",
          link: "https://codepen.io/khr2003/full/rNObwwB"
        },
        {
          name: "Thumb Hover Styles",
          link: "https://codepen.io/khr2003/full/vqxygb"
        },
        {
          name: "Kalimah Gradients",
          link: "https://codepen.io/khr2003/full/RENwGK"
        },
        {
          name: "NINTENDO CONTROLLERS",
          link: "https://codepen.io/khr2003/full/gQOGQN"
        },
        {
          name: "JQUERY API",
          link: "https://codepen.io/khr2003/project/full/DNgPaw"
        }
      ]
    },
    mounted: function () {
      let root = document.documentElement;
      let duration = parseInt(
        getComputedStyle(root).getPropertyValue("--duration")
      );
      let repeat = document.querySelector("#repeat");
      let otherWork = document.querySelector("#other-work-container");
  
      function setPosition(length) {
        length = length || 3;
        const pos = duration + length;
        return `+=${pos}`;
      }
  
      var tl = new TimelineLite();
      tl.to(
        "#main",
        {
          onStart: function () {
            this.targets()[0].classList.add("whale");
            repeat.classList.remove("show");
            otherWork.classList.remove("show");
          }
        }
      );
  
      tl.to(
        "#main",
        {
          onStart: function () {
            this.targets()[0].classList.add("fox");
          }
        },
        setPosition()
      );
  
      tl.to(
        "#main",
        {
          onStart: function () {
            this.targets()[0].classList.add("toucan2");
          }
        },
        setPosition()
      );
  
      tl.to(
        "#wrapper, #inner-wrapper",
        {
          onStart: function () {
            root.style.setProperty("--duration", "0");
          },
          onComplete: function () {
            document
              .querySelector("#main")
              .classList.remove("whale", "fox", "toucan2");
            repeat.classList.add("show");
            otherWork.classList.add("show");
          }
        },
        setPosition(-1)
      );
  
      repeat.addEventListener("click", function () {
        root.style.setProperty("--duration", `${duration}s`);
        tl.invalidate().restart();
      });
    }
  });