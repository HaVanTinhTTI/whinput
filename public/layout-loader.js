async function loadLayout() {
  try {
    const res = await fetch("header.html");
    if (!res.ok) throw new Error("Không tìm thấy header.html");
    const html = await res.text();
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    document.body.prepend(wrapper);
    console.log("✅ Layout loaded successfully (Drawer Sidebar)");
  } catch (err) {
    console.error("❌ Lỗi load layout:", err);
  }
}
loadLayout();
