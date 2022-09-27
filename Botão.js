var $btnAumentar = $("#btnAumentar");
var $btnDiminuir = $("#btnDiminuir");
var $elemento = $("body p");

function obterTamnhoFonte() {
  return parseFloat($elemento.css('font-size'));
}

$btnAumentar.on('click', function() {
  $elemento.css('font-size', obterTamnhoFonte() + 1);
});

$btnDiminuir.on('click', function() {
  $elemento.css('font-size', obterTamnhoFonte() - 1);
});

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

<button type="button" id="btnAumentar">Aumentar</button>
<button type="button" id="btnDiminuir">Diminuir</button>
<p>Olá, mundo!>
