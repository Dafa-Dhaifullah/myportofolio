const form= document.querySelector("form");
const inputEmail = document.querySelector('#email');

form.addEventListener('submit',function(event){
    if (inputEmail.value.trim()===''){
        event.preventDefault();
        alert('kolom email tidak boleh kosong');
    }
});

const tombolDarkMode = document.querySelector('#tombol-dark-mode');
tombolDarkMode.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
})
