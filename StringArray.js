// Antrean awal
let antrean = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Awal: ", antrean);

// Datang
antrean.push("Nabila");
antrean.push("Mazaya", "Elsi");
console.log("Tambah: ", antrean);

// Elsi pulang
antrean.pop();
console.log("Kurang(pop): ", antrean);

// Hapus antrean 0, 1
antrean.shift();
antrean.shift();
console.log("Kurang(shift): ", antrean);

// Tomi serobot
antrean.unshift("Tomi");

// Hasil
console.log("Akhir: ", antrean);
