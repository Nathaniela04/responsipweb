document.addEventListener('DOMContentLoaded', function () {

  const selengkapnyaButtons = document.querySelectorAll('.box .btn');

  selengkapnyaButtons.forEach(button => {
    button.addEventListener('click', function (event) {
    
      const box = button.closest('.box');
      const ninjaName = box.querySelector('h3').innerText;
      const ninjaImage = box.querySelector('.image img').getAttribute('src');

      let alertMessage = `Selengkapnya tentang ${ninjaName}.`;
      if (ninjaName === 'Naruto') {
        alertMessage = `Naruto, ninja dari Konoha yang berasal dari konohagakure, yang memiliki kekuatan sangat besar.`;
      } else if (ninjaName === 'Sasuke') {
        alertMessage = `Sasuke, pengguna kekuatan Sharingan dan Chidori yang berasal dari otogakure!`;
      } else if (ninjaName === 'Itachi') {
        alertMessage = `Itachi, ahli genjutsu dan pengguna mata Sharingan yang berasal dari akatsuki!`;
      } else if (ninjaName === 'Sakura') {
        alertMessage = `Sakura, pengguna ligtning barrel yang berasal uzumaki!`;
      } else if (ninjaName === 'Hinata') {
        alertMessage = `Hinata, ahli waris perempuan Klan Hyuga ini berasal dari klen Hyuga!`;
      } else {
        alertMessage = `Sarada, berasal dari konohamaru yang mahir mengguanakan sharingan!`;
      }
    
      alert(alertMessage);

      event.preventDefault();
    });
  });
});
