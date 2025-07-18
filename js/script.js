// Popup awal meminta nama pengguna
let userName = "";

function askName() {
  while (true) {
    userName = prompt("Selamat datang! Masukkan nama Anda:");

    if (
      userName &&
      isNaN(userName) &&
      /^[a-zA-Z\s]+$/.test(userName.trim()) &&
      userName.trim().length > 1
    ) {
      break;
    } else {
      alert("Nama harus berupa huruf dan tidak boleh kosong.");
    }
  }

  const greeting = document.getElementById("greeting-name");
  if (greeting) {
    greeting.textContent = userName;
  }
}

window.onload = askName;

// Validasi form kontak
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  // Reset error
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  document.getElementById("message-output").textContent = "";

  // Validasi nama
  if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
    document.getElementById("name-error").textContent = "Nama wajib diisi dan hanya huruf.";
    valid = false;
  }

  // Validasi email
  if (!email) {
    document.getElementById("email-error").textContent = "Email wajib diisi.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("email-error").textContent = "Format email tidak valid.";
    valid = false;
  }

  // Validasi pesan
  if (!message) {
    document.getElementById("message-error").textContent = "Pesan tidak boleh kosong.";
    valid = false;
  }

  if (valid) {
    document.getElementById("message-output").textContent = `Terima kasih, ${name}, sudah mengirim pesan!`;
    document.getElementById("contact-form").reset();
  }

  return false;
}
