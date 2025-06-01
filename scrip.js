const container = document.getElementById('container');
const bordersArray = ['50%', '0'];
const blursArray = ['0', '5px'];
const colorsArray = ['#FF6B6B', '#FFE66D', '#4472Ca'];
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const count = 60;

// Danh sách ảnh trong thư mục /images
const imageSources = [
  "images/IMG_0802.PNG",
  "images/IMG_0829.png",
  "images/IMG_1106.png",
  "images/IMG_1212.PNG"
];

// Danh sách chữ ngẫu nhiên
const messages = ['tít iu', 'bé iu', '💖', '🥰', '❤️'];

// Tạo bong bóng bay lên
function createBubbles() {
    for (let i = 0; i < count; i++) {
        const div = document.createElement("div");

        const randomLeft = Math.floor(Math.random() * width);
        const randomTop = Math.floor(Math.random() * height);
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const border = bordersArray[Math.floor(Math.random() * bordersArray.length)];
        const blur = blursArray[Math.floor(Math.random() * blursArray.length)];
        const size = Math.floor(Math.random() * 5) + 5;
        const duration = Math.floor(Math.random() * 10) + 5;

        div.style.position = 'absolute';
        div.style.left = randomLeft + 'px';
        div.style.top = randomTop + 'px';
        div.style.width = size + 'px';
        div.style.height = size + 'px';
        div.style.backgroundColor = color;
        div.style.borderRadius = border;
        div.style.filter = `blur(${blur})`;
        div.style.animation = `move ${duration}s ease-in-out infinite`;

        container.appendChild(div);
    }
}

// Tạo chữ rơi
function createFallingText() {
    for (let i = 0; i < 3; i++) {
        const text = document.createElement("div");
        const msg = messages[Math.floor(Math.random() * messages.length)];
        const left = Math.floor(Math.random() * width);
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;

        text.className = "falling-text";
        text.textContent = msg;
        text.style.left = left + "px";
        text.style.top = "-30px";
        text.style.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        text.style.animationDuration = duration + "s";
        text.style.animationDelay = delay + "s";

        container.appendChild(text);
    }
}

// Tạo ảnh rơi từ danh sách
function createFallingImages() {
    for (let i = 0; i < 2; i++) {
        const img = document.createElement("img");

        const randomIndex = Math.floor(Math.random() * imageSources.length);
        img.src = imageSources[randomIndex];

        const left = Math.floor(Math.random() * width);
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        const size = 30 + Math.floor(Math.random() * 30);

        img.className = "falling-img";
        img.style.left = left + "px";
        img.style.top = "-50px";
        img.style.width = size + "px";
        img.style.height = "auto";
        img.style.animationDuration = duration + "s";
        img.style.animationDelay = delay + "s";

        container.appendChild(img);
    }
}

// Gọi hàm ban đầu
createBubbles();
createFallingText();
createFallingImages();

// Lặp lại tạo thêm
setInterval(createFallingText, 5000);
setInterval(createFallingImages, 7000);
