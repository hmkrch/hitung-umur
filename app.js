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

  const umurUser = tahunSekarang - tahunLahirUser;

  return `${namaInpt} kamu lahir pada tahun ${tahunLahirUser} dan sekarang kamu berumur ${umurUser} Tahun`;
};

hitungBtn.onclick = () => {
  tampilkanHasil.textContent = hitungUmur();
  tampilkanHasil.classList.remove("hidden");
};
