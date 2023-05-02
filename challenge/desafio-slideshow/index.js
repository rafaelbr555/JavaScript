const images = [
  { id: "1", url: "./img/chrono.jpg" },
  { id: "2", url: "./img/inuyasha.jpg" },
  { id: "3", url: "./img/tenchi.jpg" },
  { id: "4", url: "./img/tenjhotenge.jpg" },
  { id: "5", url: "./img/yuyuhakusho.jpg" },
  { id: "6", url: "./img/ippo.png" },
];

const contenier = window.document.getElementById("preview");

const carregarimg = (images, contenier) => {
    images.forEach (image  => {
        contenier.innerHTML += `
            <div class = 'item'>
                <img src = '${image.url}'>
            </div>    
        `
    })
}

 //carregarimg(images, contenier)