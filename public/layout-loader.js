async function loadLayout() {
  try {
    const res = await fetch("header.html");
    if (!res.ok) throw new Error("Không tìm thấy header.html");
    const html = await res.text();

    // chèn layout vào đầu body, nhưng không ghi đè nội dung cũ
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    document.body.prepend(wrapper);
    console.log("✅ Header + Sidebar loaded successfully");
  } catch (err) {
    console.error("❌ Lỗi load layout:", err);
  }
}
loadLayout();
