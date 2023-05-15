const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
  const accordion_header_item = item.querySelector(".accordion_header");

  accordion_header_item.addEventListener("click", () => {
    const accordion_content_item = item.querySelector(".accordion_content");

    const accordion_content_icon = item.querySelector(".icon");

    const item_actived = document.querySelector(".active");


    VerifyActive(item, accordion_content_item, accordion_content_icon, item_actived);
  });
});

function VerifyActive(item, content, _icon, content_actived) {
  const icon_item = item.querySelector(".icon");


  if (content_actived) {
    icon_item.classList.remove("bi-dash-circle");
    icon_item.classList.add("bi-plus-circle");
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.classList.remove("bi-plus-circle")
    icon_item.classList.add("bi-dash-circle");
    content.classList.add("active");
    content.style.height = content.scrollHeight + "px";
  }
}