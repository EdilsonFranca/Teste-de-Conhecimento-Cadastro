 //mascara para o campo cpf//
 $(document).ready(function () { 
        var $CampoCpf = $("#form-cpf");
        $CampoCpf.mask('000.000.000-00', {reverse: true});
    });