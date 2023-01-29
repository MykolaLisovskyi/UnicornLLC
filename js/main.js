function PopUpShow() {
  document.getElementById('popup1').style.display = "flex";
  document.getElementById('nameForm').value = "Call me";
  document.getElementById('popup_content_name').innerText = "Fill out the form below and our representative will get in touch with you shortly";
  document.getElementById('popup_content_name').style.width="100%";
}

function PopUpHideItem() {
  document.getElementById('popupItem').style.display = "none";
}
function PopUpHide() {
  document.getElementById('popup1').style.display = "none";
}
function PopUpHideItem() {
  document.getElementById('popupItem').style.display = "none";
}
function PopUpShow2() {
  $("#popupThanks").css('display', 'flex');
}

function PopUpHide2() {
  $("#popupThanks").hide();
  $("#PopUpHide").hide();

}




