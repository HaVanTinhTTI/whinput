export async function loadHeader() {
  const res = await fetch("header.html");
  const html = await res.text();
  document.body.insertAdjacentHTML("afterbegin", html);
}
loadHeader();
