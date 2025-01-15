let crossContainers = document.querySelectorAll(".cross-container");
let whatImgContainers = document.querySelectorAll(".what-img-container");
let projImgs = document.querySelectorAll(".proj-img-holder");
let testBtns = document.querySelectorAll(".btn-test");
let reviewWrappers = document.querySelectorAll(".rev-wrapper");
let line1 = document.querySelector(".menu-line1");
let line2 = document.querySelector(".menu-line2");
let line3 = document.querySelector(".menu-line3");
let menuModal = document.querySelector(".menu-modal");

let homeIdx = 0;
let projIdx = 0;
let projWidth;
let currentWindow = window.innerWidth;
let duringProj = false;
let firstReset = true;
let modalOpen = false;
let testTimeout;

function triggerStarterElements(){
    document.querySelectorAll(".starter").forEach((element, idx) => {
        setTimeout(() => {
            element.style.bottom = "0px";
            element.style.opacity = "1";
        }, 220 * (idx + 1));
    });
}
triggerStarterElements();

function toggleModal(){
    if(!modalOpen){
        modalOpen = true;
        menuModal.style.display = "flex";
        setTimeout(() => {
            menuModal.style.opacity = "1";
            line1.style.width = "32px";
            line1.style.transform = "rotate(-45deg)";
            line1.style.top = "12px"
            line2.style.opacity = "0";
            line3.style.width = "32px";
            line3.style.transform = "rotate(45deg)";
            line3.style.top = "-12px";
        }, 50);
    } else {
        modalOpen = false;
        menuModal.style.opacity = "0";
        line1.style.width = "20px";
        line1.style.transform = "rotate(0deg)";
        line1.style.top = "0px"
        line2.style.opacity = "1";
        line3.style.width = "12px";
        line3.style.transform = "rotate(0deg)";
        line3.style.top = "0px";
        setTimeout(() => {
            menuModal.style.display = "none";
        }, 500);
    }
}

document.querySelectorAll(".btn-contact, .footer-btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.querySelector(".btn-contact-bg").style.width = "174px";
        button.querySelector(".btn-contact-bg").style.right = "13px";
        button.querySelector(".btn-contact-txt").style.marginLeft = "13px";
        button.querySelector(".btn-contact-txt").style.color = "hsl(17, 97%, 62%)";
    });
});
document.querySelectorAll(".btn-contact, .footer-btn").forEach(button => {
    button.addEventListener("mouseleave", () => {
        button.querySelector(".btn-contact-bg").style.width = "34px";
        button.querySelector(".btn-contact-bg").style.right = "23px";
        button.querySelector(".btn-contact-txt").style.marginLeft = "0px";
        button.querySelector(".btn-contact-txt").style.color = "white";
    });
});

document.querySelectorAll(".img-arr-wrapper").forEach(wrapper => {
    wrapper.addEventListener("mouseenter", () => {
        console.log(wrapper);
        console.log(wrapper.querySelector(".learn-wrapper"));
        wrapper.querySelector(".learn-wrapper").style.width = "165px";
        wrapper.querySelector(".learn-wrapper").style.fontSize = "17px";
    });
    wrapper.addEventListener("mouseleave", () => {
        wrapper.querySelector(".learn-wrapper").style.width = "40px";
        wrapper.querySelector(".learn-wrapper").style.fontSize = "0px";
    });
});

document.querySelectorAll(".home-img-container").forEach((box, idx) => {setInterval(() => {
    let oldImg = box.querySelectorAll(".home-img")[homeIdx];
    let nextImg;
    if(homeIdx == 2){
        nextImg = box.querySelectorAll(".home-img")[0];
        if(idx == 1){
            homeIdx = 0;
        }
    } else {
        nextImg = box.querySelectorAll(".home-img")[homeIdx + 1];
        if(idx == 1){
            homeIdx++;
        }
    }
    oldImg.style.opacity = "0";
    setTimeout(() => {
        nextImg.style.opacity = "1";
    }, 400);
}, 3000);});

document.querySelectorAll(".what-box").forEach((container, idx) => {
    container.addEventListener("mouseenter", () => {
        crossContainers[idx].style.opacity = "1";
        whatImgContainers[idx].style.maxWidth = "74px";
        whatImgContainers[idx].style.margin = "0 20px";
    });
    container.addEventListener("mouseleave", () => {
        crossContainers[idx].style.opacity = "0";
        whatImgContainers[idx].style.maxWidth = "0px";
        whatImgContainers[idx].style.margin = "0px";
    });
});

setInterval(() => {if(!duringProj){
    duringProj = true;
    setTimeout(() => {
        duringProj = false;
    }, 1020);
    projWidth = checkWidth(window.innerWidth);
    
    let oldImg = projImgs[projIdx];
    if(projIdx == 3){
        projIdx = 0;
    } else {
        projIdx++;
    }
    let newImg = projImgs[projIdx];
    oldImg.style.transition = "0.8s ease";
    oldImg.style.left = projWidth;
    setTimeout(() => {
        newImg.style.transition = "0s ease";
        newImg.style.left = "-" + projWidth;
        setTimeout(() => {
            newImg.style.transition = "0.8s ease";
            newImg.style.left = "0px";
        }, 200);
    }, 20);
}}, 3000);
function moveProject(direction){if(!duringProj){
    duringProj = true;
    setTimeout(() => {
        duringProj = false;
    }, 1020);
    projWidth = checkWidth(window.innerWidth);

    let oldImg = projImgs[projIdx];
    if(direction == "right"){
        if(projIdx == 3){
            projIdx = 0;
        } else {
            projIdx++;
        }
        let newImg = projImgs[projIdx];
        oldImg.style.transition = "0.8s ease";
        oldImg.style.left = projWidth;
        setTimeout(() => {
            newImg.style.transition = "0s ease";
            newImg.style.left = "-" + projWidth;
            setTimeout(() => {
                newImg.style.transition = "0.8s ease";
                newImg.style.left = "0px";
            }, 200);
        }, 20);
    } else if(direction == "left"){
        if(projIdx == 0){
            projIdx = 3;
        } else {
            projIdx--;
        }
        let newImg = projImgs[projIdx];
        oldImg.style.transition = "0.8s ease";
        oldImg.style.left = "-" + projWidth;
        setTimeout(() => {
            newImg.style.transition = "0s ease";
            newImg.style.left = projWidth;
            setTimeout(() => {
                newImg.style.transition = "0.8s ease";
                newImg.style.left = "0px";
            }, 200);
        }, 20);
    }
}}
function checkWidth(factor){
    if(factor <= 492){
        return "600px";
    }else if(factor <= 1100){
        return "1100px";
    } else {
        return "2000px";
    }
}

document.querySelectorAll(".client-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.querySelector(".client-img").style.transform = "translateY(-50%) scale(1)";
    });
    box.addEventListener("mouseleave", () => {
        box.querySelector(".client-img").style.transform = "translateY(-50%) scale(0)";
    });
});

function switchReview(direction){if(!testTimeout){
    testTimeout = true;
    setTimeout(() => {testTimeout = false;}, 1000);
    let rightAmount = getWidth(window.innerWidth);
    let currentAmount = reviewWrappers[0].style.right;
    let currentNumber = Number(currentAmount.slice(0, currentAmount.indexOf("p")));
    if(direction == "right"){
        reviewIdx++;
        if(reviewIdx == 5){
            testBtns[1].classList.add("test-inactive");
            moveReviewWrappers((currentNumber + rightAmount) + "px");
        } else {
            testBtns[0].classList.remove("test-inactive");
            moveReviewWrappers((currentNumber + rightAmount) + "px");
        }
    } else if(direction == "left") {
        reviewIdx--;
        if(reviewIdx == 0){
            testBtns[0].classList.add("test-inactive");
            moveReviewWrappers((currentNumber - rightAmount) + "px");
        } else {
            testBtns[1].classList.remove("test-inactive");
            moveReviewWrappers((currentNumber - rightAmount) + "px");
        }
    }
}}
function moveReviewWrappers(amount){
    reviewWrappers.forEach((wrapper, idx) => {
        wrapper.style.right = amount;
        if(idx == reviewIdx){
            wrapper.style.opacity = "1";
        } else {
            wrapper.style.opacity = "1";
        }
    });
}
function getWidth(windowWidth){
    if(windowWidth <= 655){
        return 320;
    } else if(windowWidth <= 1600){
        return 530;
    } else {
        return 1190;
    }
}
function resetTest(){if(window.innerWidth != currentWindow || firstReset){
    testBtns.forEach(btn => {btn.classList.remove("test-inactive")});
    reviewIdx = 1;
    if(window.innerWidth <= 655){
        moveReviewWrappers("-480px");
    } else if(window.innerWidth <= 1600){
        moveReviewWrappers("-795px");
    } else {
        moveReviewWrappers("-1784px");
    }
    currentWindow = window.innerWidth;
    firstReset = false;
}}
resetTest(); // FIX INVIS
window.addEventListener("resize", resetTest);

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.position = "relative";
          entry.target.style.bottom = "0px";
          entry.target.style.opacity = "1";
          entry.target.style.transition = "1s ease";

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0 // Trigger when 10% of the element is visible
});
document.querySelectorAll(".scroll-target").forEach(target => {
    observer.observe(target);
});