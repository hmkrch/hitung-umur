const userNameInput = document.getElementById("namaUser");
const tahunLahirInput = document.getElementById("tahunLahirUser");

const hitungBtn = document.getElementById("hitungBtn");
const tampilkanHasil = document.querySelector(".pesan");

const hitungUmur = () => {
  const namaInpt = userNameInput.value.trim();
  const tahunLahrStr = tahunLahirInput.value;
  const tahunSekarang = new Date().getFullYear();

  if (!namaInpt || !tahunLahrStr) {
    return "Silakan masukkan nama dan tahun lahir yang valid.";
  }

  if (/\d/.test(namaInpt)) {
    return "Nama tidak boleh mengandung angka.";
  }

  const tahunLahirUser = Number(tahunLahrStr);
  if (isNaN(tahunLahirUser)) {
    return `Tahun Lahir Harus berupa angka.`;
  }

  if (tahunLahirUser < 1900 || tahunLahirUser > tahunSekarang) {
    return `Masukkan Tahun Lahir Yang Benar`;
  }

  const umurUser = tahunSekarang - tahunLahirUser;

  return `<span>${namaInpt}</span> kamu lahir pada tahun <span>${tahunLahirUser}</span> dan sekarang kamu berumur <span>${umurUser} </span>Tahun`;
};

hitungBtn.onclick = () => {
  tampilkanHasil.innerHTML = hitungUmur();
  tampilkanHasil.classList.remove("hidden");
};
