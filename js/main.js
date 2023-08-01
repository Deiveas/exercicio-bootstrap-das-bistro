$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Caro amigo do Deive, por favor digite seu nome!!!',
            email: 'Caro cliente seu e-mail é muito importante para nós!!!',
            telefone: 'Se for de sua vontade, deixe aqui seu telefone!!!',
            mensagem: 'Por favor, deixe aqui seu elogio ou susgestão!!!'
        }
    });

    let formFaleConosco = $('#form-fale-conosco')

    $('#enviar').click(function (e){
        e.preventDefault();

        if (formFaleConosco.valid()) {
            abrirImagemEnviar();
        }
    });

    function abrirImagemEnviar() {
        window.open('https://www.momentodivino.com.br/img/webp/imagens8/deus-abencoe-seu-dia-5116UpCR1USOV8.webp')
    }
});
