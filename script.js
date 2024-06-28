
// Kumpulan nama khodam
const khodam = ["burung belantongan", "binturong", "binatang maghrib", "kus-kus", "nyai", "leher orang gendut",
    "macan gagu", "gajah mungkur", "gajah duduk", "badak cap kaki tiga", "siluman tapir", "orang kaya", "pbass mono", "uler keket", "gabus males", "black moskow"
    ,"corydoras", "pbass azul","tuyul moshing"
]

// Mengambil nilai dari inputan
const output = document.getElementById("input");


// Mengambil button untuk distyling
const btn = document.querySelector("button");

// Mengambil class div untuk dimanipulasi tampilan yang ada didalam div dengan class content
const div = document.getElementById("content");

const div2 = document.getElementById("div-main");


// Fungsi untuk mendapatkan nama khodam
function getKhodam(khodam) {

    return new Promise((resolve,reject) => {
    // jika array kosong menampilkan text kosong pada console
    if (khodam.length === 0) {
        throw new Error("Khodam are blank!");
    }

    setTimeout(() => {
    // // memberi nilai random pada index

    const randomKhodam = Math.floor(Math.random() * khodam.length);

    // menampilkan element array pada nama khodam secara random
    resolve(`${khodam[randomKhodam]}`) ;
    }, 2000);


    });
}


// Aksi ketika button submit di klik
btn.addEventListener("click", async () => {
    const name = output.value.trim();

// Saat button di klik h1 akan menampilkan teks loading
    div.innerHTML = `<h1>Loading...<h1>`;


// pengkondisian jika inputan kosong maka akan tampil teks di halaman web
        if(name === "") {
            div.innerHTML = `<h1>Name cannot blank!<h1>`;
        } else {
// Jika nilai inputan tidak kosong maka pengguna mendapatkan khodamnya
            const displayKhodam = await getKhodam(khodam);

            // Menyimpan data ke sessionStorage
            sessionStorage.setItem("lastGeneratedName", name);
            sessionStorage.setItem("lastGeneratedKhodam", displayKhodam);
    
            // menampilkan nama khodam
            div.innerHTML = `<h1>${displayKhodam}.<h1>`;

            // membuat element p html
            const para = document.createElement("p");
    
            // menampilkan deskripsi pada element p html
            para.textContent = `${name} mempunyai khodam ${displayKhodam}.`;

            // menambahkan class p-content ke element p html
            para.classList.add("p-content");
    
            // menambahkan element p html ke element div html
            div.appendChild(para);

        }
    

        // mengkosongkan nilai inputan ketika proses memunculkan nama khodam telah selesai
    output.value = "";

    // membuat fokus pada nilai inputan
    output.focus();
        
})


//  Cek localStorage saat halaman dimuat ulang
 window.onload = () => {
    const lastGeneratedName = sessionStorage.getItem("lastGeneratedName");
    const lastGeneratedKhodam = sessionStorage.getItem("lastGeneratedKhodam");
    
    if (lastGeneratedName && lastGeneratedKhodam) {
        div.innerHTML = `<h1>${lastGeneratedKhodam}.<h1>`;
        const para = document.createElement("p");
        para.textContent = `${lastGeneratedName} mempunyai khodam ${lastGeneratedKhodam}.`;
        para.classList.add("p-content");
        div.appendChild(para);
    }




 
 


};