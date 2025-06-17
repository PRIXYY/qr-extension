document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 160,
      height: 160,
    });
  });
});
