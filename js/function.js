$(window).on('scroll', function() {
    $('#navbarSupportedContent').collapse('hide');
});
$('#navbarSupportedContent .nav-link').on('click', function() {
    $('#navbarSupportedContent').collapse('hide');
});


const imagenes = document.querySelectorAll('#nosotros img');
imagenes.forEach(imagen => {
  imagen.addEventListener('mouseover', () => {
    imagen.nextElementSibling.style.display = 'block';
  });
  imagen.addEventListener('mouseout', () => {
    imagen.nextElementSibling.style.display = 'none';
  });
});

document.cookie = "nombre_cookie=valor_cookie; SameSite=Lax";
