document.addEventListener("DOMContentLoaded", function () {
    var conteudo = document.getElementById('content');
    var adBlockMensagem = document.getElementById('adBlockMensagem');
    adBlockMensagem.style.display = 'none';
    setTimeout(function () {
        if (document.getElementById("wrapper").offsetHeight) {
            //document.getElementById("wrapper").innerHTML = '<b style="color: green;">Sem AdBlock</b>';

        } else {
            //document.getElementById("wrapper").innerHTML = '<b style="color: red;">Com AdBlock</b>';
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            document.documentElement.style.overflow = 'hidden';
            imgBrandNavbar.style.visibility = 'hidden';
            navbarSupportedContent.style.visibility = 'hidden';
            navbarButton.style.visibility = 'hidden';
            conteudo.style.visibility = 'hidden';
            adBlockMensagem.style.display = 'block';
            document.getElementById("adBlockMensagem").style.margin = "50px";
        }
    }, 0)
});
