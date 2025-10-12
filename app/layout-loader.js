// layout-loader.js
async function loadLayout() {
  // Load file header.html
  const res = await fetch("header.html");
  const html = await res.text();

  // Tạo 1 iframe để chứa giao diện layout
  const iframe = document.createElement("iframe");
  iframe.srcdoc = html;
  iframe.style.position = "fixed";
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.zIndex = 999;
  
  document.body.appendChild(iframe);

  // Ẩn thanh scroll chính
  document.body.style.overflow = "hidden";
}
loadLayout();
