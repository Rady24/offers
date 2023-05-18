

const accordionItems = document.querySelectorAll('.video__cards-item');

function initAccordion() {
    accordionItems.forEach((item) => {
        const title = item.querySelector('.video__cards-item-title');
        const content = item.querySelector('.video__cards-item-content');
      
        title.addEventListener('click', () => {
          item.classList.toggle('active');
      
          if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
            item.style.height = '440px';
          } else {
            content.style.maxHeight = '0';
            item.style.height = '60px';
          }
        });
      });
}

function checkScreenWidth() {
  if (window.innerWidth <= 1024) {
    initAccordion();
  } else {
    accordionItems.forEach((item) => {
      const content = item.querySelector('.video__cards-item-content');
      item.classList.remove('active');
      content.style.maxHeight = '0';
    });
  }
}

window.addEventListener('DOMContentLoaded', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

const videoLinks = document.getElementsByClassName("video__link");

for (let i = 0; i < videoLinks.length; i++) {
  const linkIndex = i;

  const viewedState = localStorage.getItem("viewedState_" + linkIndex);
  if (viewedState === "true") {
    const parentBlock = videoLinks[i].closest(".btn-wrap");
    

    parentBlock.classList.add("viewed");
    const viewedLabel = document.createElement("div");
    viewedLabel.classList.add("viewed-label");
    viewedLabel.textContent = "Просмотрено";

    const checkmark = document.createElement("img");
    checkmark.src = 'assets/check.png'
    checkmark.classList.add("checkmark");

    const videoBtnElement = parentBlock.querySelector(".video__cards-item-btn");

    videoBtnElement.appendChild(viewedLabel);
    videoBtnElement.appendChild(checkmark);
  }

  videoLinks[i].addEventListener("click", function() {
    const parentBlock = this.closest(".btn-wrap");
    if (!parentBlock.classList.contains("viewed")) {
      parentBlock.classList.add("viewed");
      const linkIndex = Array.from(videoLinks).indexOf(this);

      localStorage.setItem("viewedState_" + linkIndex, "true");

      const viewedLabel = document.createElement("div");
      viewedLabel.classList.add("viewed-label");
      viewedLabel.textContent = "Просмотрено";

      const checkmark = document.createElement("img");
      checkmark.src = 'assets/check.png'
      checkmark.classList.add("checkmark");

      const videoBtnElement = parentBlock.querySelector(".video__cards-item-btn");

      videoBtnElement.appendChild(viewedLabel);
      videoBtnElement.appendChild(checkmark);
    }
  });
}

function handleClick(event) {
  let link = event.target;
  let container = link.closest('.video__cards-item');
  let title = container.querySelector('.video__cards-item-title');

  container.classList.add('viewed');
  let checkmarkImg = title.querySelector('.checkmark-img');
  if (!checkmarkImg) {
    checkmarkImg = document.createElement('img');
    checkmarkImg.src = 'assets/check.png';
    checkmarkImg.alt = 'Checkmark';
    checkmarkImg.classList.add('checkmark-img');
    title.appendChild(checkmarkImg);
  }

  let videoItems = Array.from(document.querySelectorAll('.video__cards-item'));
  let videoItemIndex = videoItems.indexOf(container);

  let videoItemId = 'videoItem_' + videoItemIndex;
  localStorage.setItem(videoItemId, 'viewed');
}

let videoLinkss = Array.from(document.querySelectorAll('.video__link'));
videoLinkss.forEach(function (link) {
  link.addEventListener('click', handleClick);
});

let videoItems = Array.from(document.querySelectorAll('.video__cards-item'));
videoItems.forEach(function (item, index) {
  let videoItemId = 'videoItem_' + index;
  let viewedState = localStorage.getItem(videoItemId);
  if (viewedState === 'viewed') {
    item.classList.add('viewed');
    let title = item.querySelector('.video__cards-item-title');
    let checkmarkImg = title.querySelector('.checkmark-img');
    if (!checkmarkImg) {
      checkmarkImg = document.createElement('img');
      checkmarkImg.src = 'assets/check.png';
      checkmarkImg.alt = 'Checkmark';
      checkmarkImg.classList.add('checkmark-img');
      title.appendChild(checkmarkImg);
    }
  }
});





































