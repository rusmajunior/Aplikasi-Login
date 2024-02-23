// membuat variabel untuk setiap elemen view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// membuat variabel untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';


// Menambahkan aksi klik pada button 
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.

    // Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */

    // Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan
    if (email == expectedEmail && password == expectedPassword){
      goToHome(); //Jika sesuai maka program akan berpindah ke halaman home
    } else{
      showPopUp(); //Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah
    }
});
