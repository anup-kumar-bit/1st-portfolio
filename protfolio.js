// --------module 1--------navbar color------
let obj1 = document.querySelector("#link-itemid1");
let obj2 = document.querySelector("#link-itemid2");
let obj3 = document.querySelector("#link-itemid3");
let obj4 = document.querySelector("#link-itemid4");
let indicator = document.querySelector(".indicator");
function reset(obj, objj2, objj3, objj4) {
  obj.querySelector(".link-icon").style.color = "#2b13af";
  objj2.querySelector(".link-icon").style.color = "";
  objj3.querySelector(".link-icon").style.color = "";
  objj4.querySelector(".link-icon").style.color = "";
}
function position_navbar() {
  obj1.addEventListener("click", () => {
    indicator.style.transform = "translateY(-180px)";
    reset(obj1, obj2, obj3, obj4);
  });
  obj2.addEventListener("click", () => {
    indicator.style.transform = "translateY(-132px)";
    reset(obj2, obj1, obj3, obj4);
  });
  obj3.addEventListener("click", () => {
    indicator.style.transform = "translateY(-86px)";
    reset(obj3, obj2, obj1, obj4);
  });
  obj4.addEventListener("click", () => {
    indicator.style.transform = "translateY(-45px)";
    reset(obj4, obj2, obj3, obj1);
  });
}

// -------module 2--------------upload image ----
function profile_image() {
  const uploadInput = document.getElementById("uploadInput");
  const previewImage = document.getElementById("previewImage");

  uploadInput.addEventListener("change", () => {
    alert("Sorry !! Only Admin has access to use this feature");
  });
}

//--------moudule 3------------------circular progress bar
function progress() {
  let prog1 = document.getElementById("inner-progess-1");
  let prog2 = document.getElementById("inner-progess-2");
  let prog3 = document.getElementById("inner-progess-3");
  class progressclass {
    constructor(prog, end1) {
      this.start = 0;
      let intervalid = setInterval(() => {
        this.start++;
        if (this.start == end1) {
          clearInterval(intervalid);
        } else {
          prog.children[0].style.fontFamily = "Arial, sans-serif";
          prog.children[0].style.fontSize = "small";
          prog.children[0].style.color = "rgb(182, 182, 185)";
          prog.children[0].innerText = `${this.start}%`;
          prog.style.background = `conic-gradient(rgb(236, 183,9) ${
            360 * (this.start / 100)
          }deg, #1c1c248a 0deg)`;
        }
      }, 40);
    }
  }
  const progobj1 = new progressclass(prog1, 80);
  const progobj2 = new progressclass(prog2, 95);
  const progobj3 = new progressclass(prog3, 60);
}
// -----------------------------download button ----------------------------------
function download() {
  let p = 240;
  let target1 = document.querySelector(".download");
  target1.children[0].style.display = "none";
  target1.addEventListener("click", () => {
    target1.style.height = "1vh";
    target1.children[0].style.display = "";
    console.log();
    target1.children[1].style.display = "none";
    if (p == 240) {
      let g = setInterval(() => {
        if (p == 0) {
          clearInterval(g);
          p = 240;
          target1.style.height = "3.8vh";
          target1.children[0].style.display = "none";
          target1.children[1].style.display = "";
          console.dir(target1.children[1]);
          console.log("working");
        } else {
          p--;
          target1.children[0].style.left = `-${p}px`;
          console.log(p);
        }
      }, 20);
    } 
  });
}

// ------------module 4-------- for startbutton------------------
function startbutton() {
  let bttn = document.getElementsByClassName("img-start");
  bttn[0].addEventListener("click", () => {
    window.scrollTo({ top: 400, behavior: "smooth" });
  });
}
// -------------module 5 ----- dark mode -------------------------
function day_night() {
  let dnbttn_par = document.getElementsByClassName("dark-and-light");
  let dnbttn = document.getElementsByClassName("night-day");
  let night = document.getElementById("night");
  let day = document.getElementById("day");
  // -------------------------------------------------------------------
  let clr1 = document.getElementById("div1");
  let clr2 = document.getElementsByClassName("profile")[0];
  let clr3 = document.querySelector(".name");
  let clr4 = document.getElementsByClassName("below-profile")[0];
  let clr5 = document.querySelector(".progress");
  let clr6 = document.querySelector(".pending-1");
  let clr60 = document.querySelector(".profile-footer");
  let clr7 = document.querySelector(".main");
  let clr8 = document.getElementById("div2");
  let clr9 = document.querySelector(".below-banner");
  let clr10 = document.querySelector(".ser");
  let clr11 = document.querySelector(".slidebar");
  let clr12 = document.querySelector(".ser2");
  let clr13 = document.querySelectorAll(".skills");
  let clr14 = document.querySelector(".projects");
  let clr15 = document.querySelector(".mainfoot");
  let clr16 = document.querySelector(".ptxt");
  let clr17 = document.querySelector(".experience");
  let dn_reset = true;
  let mode_reset = true;
  dnbttn[0].addEventListener("click", () => {
    if (dn_reset) {
      // alert("suggest u not to use bcoz work in  progress");
      dnbttn[0].style.transform = "translateX(16px)";
      night.style.display = "none";
      day.style.display = "";
      // day.style.color='#ff5500';                              //--------- chnage color pending for light and dark mode
      day.style.color = "black"; //--------- chnage color pending for light and dark mode
      dnbttn_par[0].style.background =
        "linear-gradient(to right,#ffc000,#ff8471,#ff965a,#ff6cb6)";
      dn_reset = !dn_reset;
      //--------------------------------------------working on dark mode module --------------------------------------------
      if (mode_reset) {
        clr1.style.setProperty("--div_bg", "#fffffff8");
        clr2.style.setProperty("--prof_bg", "#1c1f37");
        clr2.style.setProperty("--prof_bord_top", "#323b59");
        clr2.style.setProperty("--prof_story", "#0195f7");
        clr4.style.setProperty("--prof_bord_top", "#323b59");
        clr4.style.setProperty("--left_name1", "#1c1f37");
        clr4.style.setProperty("--right_name1", "rgb(59 60 67 / 92%)");
        clr4.style.setProperty("--font1", `'Ubuntu', sans-serif`);
        clr5.style.setProperty("--prof_bord_top", "#323b59");
        clr5.style.setProperty("--in_prog1", "#1c1f37");
        clr6.style.setProperty("--prof_bord_top", "#323b59");
        clr60.style.setProperty("--prof_bord_top", "#323b59");
        clr60.style.setProperty("--prof_foot", "#121425");
        clr8.style.setProperty("--main_bg", "#fffffff8");
        clr7.style.setProperty("--main_bg", "#fffffff8");
        clr7.style.setProperty("--blur", "2px");
        clr8.style.setProperty("--prof_story", "#0195f7");
        clr8.style.setProperty("--prof_bg", "#1c1f37");
        clr9.style.setProperty("--font1", `'Ubuntu', sans-serif`);
        clr9.style.setProperty("--bl_text", `#1c1f37`);
        clr10.style.setProperty("--bl_text_h", `#1c1f37`);
        clr10.style.setProperty("--ser1_after", `#020435`);
        clr11.style.setProperty("--card_bg", "#131529");
        clr11.style.setProperty("--card_bx_sh1", "#043559cc");
        clr11.style.setProperty("--card_bx_sh2", "#0b2f4d");
        clr12.style.setProperty("--bl_text_h", `#1c1f37`);
        clr13.forEach((ele, index) => {
          clr13[index].style.setProperty("--skill_bg", "#191a33");
          clr13[index].style.setProperty("--skill_bg_hover", "#1c1c2e");
        });
        clr14.style.setProperty("--bl_text_h", "#191a33");
        clr14.style.setProperty("--naming", "#191a33");
        clr15.style.setProperty("--foot_bg", "#141623");
        clr15.style.setProperty("--foot2", "#0d0e1c");
        clr16.style.setProperty("--left_name1", "#1c1f37");
        clr6.style.setProperty("--left_name1", "#1c1f37");
        clr6.style.setProperty("--font1", `'Ubuntu', sans-serif`);
        clr16.style.setProperty("--font1", `'Ubuntu', sans-serif`);
        clr17.style.setProperty("--exp1", `#1c1f37`);
        clr17.style.setProperty("--exp2", `#1f2021`);
        clr17.style.setProperty("--exp3", `rgb(20 22 35)`);
        clr17.style.setProperty("--exp4", `rgb(15 18 45 / 74%)`);
        clr17.style.setProperty("--font1", `'Ubuntu', sans-serif`);

      }


    } else {
      dnbttn[0].style.transform = "translateX(0px)";
      night.style.display = "";
      day.style.display = "none";
      dnbttn_par[0].style.background = ""; //--------- chnage color pending for light and dark mode
      dn_reset = !dn_reset;
      clr1.style.setProperty("--div_bg", "");
      clr2.style.setProperty("--prof_bg", "");
      clr2.style.setProperty("--prof_bord_top", "");
      clr2.style.setProperty("--prof_story", "");
      clr4.style.setProperty("--prof_bord_top", "");
      clr4.style.setProperty("--left_name1", "");
      clr4.style.setProperty("--right_name1", "");
      clr4.style.setProperty("--font1", ``);
      clr5.style.setProperty("--prof_bord_top", "");
      clr5.style.setProperty("--in_prog1", "");
      clr6.style.setProperty("--prof_bord_top", "");
      clr60.style.setProperty("--prof_bord_top", "");
      clr60.style.setProperty("--prof_foot", "");
      clr8.style.setProperty("--main_bg", "");
      clr7.style.setProperty("--main_bg", "");
      clr7.style.setProperty("--blur", "");
      clr8.style.setProperty("--prof_story", "");
      clr8.style.setProperty("--prof_bg", "");
      clr9.style.setProperty("--font1", ``);
      clr9.style.setProperty("--bl_text", ``);
      clr10.style.setProperty("--bl_text_h", ``);
      clr10.style.setProperty("--ser1_after", ``);
      clr11.style.setProperty("--card_bg", "");
      clr11.style.setProperty("--card_bx_sh1", "");
      clr11.style.setProperty("--card_bx_sh2", "");
      clr12.style.setProperty("--bl_text_h", ``);
      clr13.forEach((ele, index) => {
        clr13[index].style.setProperty("--skill_bg", "");
        clr13[index].style.setProperty("--skill_bg_hover", "");
      });
      clr14.style.setProperty("--bl_text_h", "");
      clr14.style.setProperty("--naming", "");
      clr15.style.setProperty("--foot_bg", "");
      clr15.style.setProperty("--foot2", "");
      clr16.style.setProperty("--left_name1", "");
      clr6.style.setProperty("--left_name1", "");
      clr6.style.setProperty("--font1", ``);
      clr16.style.setProperty("--font1", ``);
      clr17.style.setProperty("--exp1", ``);
      clr17.style.setProperty("--exp2", ``);
      clr17.style.setProperty("--exp3", ``);
      clr17.style.setProperty("--exp4", ``);
      clr17.style.setProperty("--font1", ``);
    }
  });
}

//------------=--module  pending------------
function slidebar() {
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let card3 = document.getElementById("card3");
  let card4 = document.getElementById("card4");
  let back = document.querySelector(".back");
  let next = document.querySelector(".next");
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
  function n_p(value) {
    a = a + value;
    b = b + value;
    c = c + value;
    d = d + value;
    card1.style.transform = `translateX(${a}px`;
    card2.style.transform = `translateX(${b}px`;
    card3.style.transform = `translateX(${c}px`;
    card4.style.transform = `translateX(${d}px`;
  }
  let arrow1 = document.querySelector(".arrow1");
  let arrow2 = document.querySelector(".arrow2");
  var rect = arrow2.parentElement.getBoundingClientRect();
  var rect1 = arrow1.parentElement.getBoundingClientRect();
  let counter = 0;
  let counter1 = 0;
  next.addEventListener("click", () => {
    if (counter < 1) {
      n_p(-370);
      counter++;
      counter1--;
      if (counter == 1 && counter1 == -1) {
        setTimeout(() => {
          arrow1.classList.add("arr1");
        }, 1700);
        arrow1.parentElement.style.height = `${rect1.height - 350}px`;
      } else if (counter != 1 && counter1 != -1) {
        arrow1.classList.remove("arr1");
        arrow1.parentElement.style.top = ``;
        arrow1.parentElement.style.height = ``;
        arrow2.parentElement.style.top = ``;
        arrow2.parentElement.style.height = ``;
      }
      if (counter != -1 && counter1 != 1) {
        arrow2.classList.remove("arr2");
      }
    }
  });

  back.addEventListener("click", () => {
    if (counter1 < 1) {
      n_p(370);
      counter--;
      counter1++;
      if (counter == -1 && counter1 == 1) {
        setTimeout(() => {
          arrow2.classList.add("arr2");
        }, 1700);
        arrow2.parentElement.style.height = `${rect.height - 350}px`;
      } else if (counter != 1 && counter1 != -1) {
        arrow1.classList.remove("arr1");
        arrow1.parentElement.style.top = ``;
        arrow1.parentElement.style.height = ``;
        arrow2.parentElement.style.top = ``;
        arrow2.parentElement.style.height = ``;
      }
      if (counter != -1 && counter1 != 1) {
        arrow2.classList.remove("arr2");
      }
    }
  });
}

// ---------------------------------module to handle excreed height for responsiveness------------------
function handleResize() {
  window.addEventListener("resize", () => {
    var screenHeight = window.innerHeight;
    if (screenHeight > 860 || screenHeight < 600) {
      alert("Not Responsive - Screen height exceeds");
    }
  });
}

// ---------------------------------- module to handle skill cards------------------------------------------
function skillcards() {
  let cardhover = document.querySelectorAll(".skills");
  let name = document.querySelectorAll(".naming");
  cardhover.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      name[index].style.height = "65px";
      name[index].style.width = "100%";
      name[index].style.color = "white";
    });
  });
  cardhover.forEach((element, index) => {
    element.addEventListener("mouseleave", () => {
      name[index].style.height = "";
      name[index].style.width = "";
      name[index].style.color = "#0195f7";
    });
  });
}

//------------------------------------------projects cards hovering---------------------------
function projects() {
  let proj = document.querySelectorAll(".proj");
  let name = document.querySelectorAll(".naming2");
  let proj_img = document.querySelectorAll(".proj_img");
  let counter = 2;
  proj.forEach((element, index) => {
    element.addEventListener("mouseenter", () => {
      name[index].style.display = "none";
      let interval = setInterval(() => {
        if (counter == 0) {
          clearInterval(interval);
        } else {
          counter--;
          proj_img[index].style.filter = `blur(${counter}px)`;
        }
      }, 200);
    });
  });
  proj.forEach((element, index) => {
    element.addEventListener("mouseleave", () => {
      counter = 2;
      name[index].style.display = "";
      proj_img[index].style.filter = `blur(${counter}px)`;
    });
  });
}

download();
handleResize();
slidebar();
day_night();
startbutton();
progress();
position_navbar();
profile_image();
skillcards();
projects();
