function saveAsImage() {
  html2canvas(document.getElementById("visitingCard")).then((canvas) => {
    let link = document.createElement("a");
    link.download = "visiting_card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
