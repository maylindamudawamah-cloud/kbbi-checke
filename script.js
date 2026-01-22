// Simulasi data KBBI (nanti bisa diperluas ribuan kata)
const kbbiWords = [
    "buku", "sekolah", "rumah", "belajar", "guru",
    "murid", "bahasa", "indonesia", "komputer",
    "program", "algoritma", "data", "logika"
];

function checkWord() {
    const input = document.getElementById("wordInput").value.toLowerCase();
    const result = document.getElementById("result");

    if (input === "") {
        result.innerHTML = "⚠️ Masukkan kata dulu!";
        result.style.color = "yellow";
        return;
    }

    if (kbbiWords.includes(input)) {
        result.innerHTML = `✅ "<b>${input}</b>" TERMASUK kata KBBI`;
        result.style.color = "#00ffcc";
    } else {
        result.innerHTML = `❌ "<b>${input}</b>" TIDAK ditemukan di KBBI`;
        result.style.color = "#ff8080";
    }
}
