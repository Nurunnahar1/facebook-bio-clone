const fb_add = document.querySelector(".fb-bio-add");
const fb_edit = document.querySelector(".fb-bio-edit");
const fb_show = document.querySelector(".fb-bio-show");

const bio_add_btn = document.querySelector("#bio-add");
const bio_cancel_btn = document.querySelector("#bio-cancel");
const bio_save_btn = document.querySelector("#bio-save");
const bio_edit_btn = document.querySelector("#bio-edit");

const bio_content = document.querySelector("#bio-content");

const remain = document.querySelector("#remain");
const bio_data = document.querySelector("#bio-data");

const getBioData = () => {
  const data = localStorage.getItem("bio");

  if (data) {
    fb_add.style.display = "none";
    fb_edit.style.display = "none";
    fb_show.style.display = "block";
    bio_data.innerHTML = data;
  } else {
    fb_add.style.display = "block";
    fb_edit.style.display = "none";
    fb_show.style.display = "none";
  }
};
getBioData();
//bio add button action
bio_add_btn.onclick = () => {
  fb_add.style.display = "none";
  fb_edit.style.display = "block";
};
//bio cancel button action
bio_cancel_btn.onclick = () => {
  getBioData();
};

bio_content.onkeyup = () => {
  bio_length = bio_content.value.length;
  const remainLength = 101 - bio_length;

  if (remainLength <= 0) {
    alert("Data finished");
  }
  remain.innerHTML = `${remainLength} character remaining`;
};

bio_save_btn.onclick = () => {
  localStorage.setItem("bio", bio_content.value);
  getBioData();
};

//bio edit
bio_edit_btn.onclick = () => {
  const oldBio = localStorage.getItem("bio");
  bio_content.value = oldBio;
  const remainLength = 101 - oldBio.length;
  remain.innerHTML = `${remainLength} character remaining`;

  fb_edit.style.display = "block";
  fb_show.style.display = "none";
};
