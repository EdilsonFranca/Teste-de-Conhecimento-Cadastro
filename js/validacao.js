$("#form-cadastro").submit(function(e){
	var nome = $('#form-nome').val();
	var cpf  = $('#form-cpf').val();
	var data = $('#form-data').val();
	var email = $('#form-email').val();
	var senha = $('#form-senha').val();
	var confirma_senha = $('#form-confirmar-senha').val();

	var filtroNome= /^([\'\.\^\~\´\`\\áÁ\\àÀ\\ãÃ\\âÂ\\éÉ\\èÈ\\êÊ\\íÍ\\ìÌ\\óÓ\\òÒ\\õÕ\\ôÔ\\úÚ\\ùÙ\\çÇaA-zZ]+)+((\s[\'\.\^\~\´\`\\áÁ\\àÀ\\ãÃ\\âÂ\\éÉ\\èÈ\\êÊ\\íÍ\\ìÌ\\óÓ\\òÒ\\õÕ\\ôÔ\\úÚ\\ùÙ\\çÇaA-zZ]+)+)?$/;
	var filtroCpf = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/i;
    var filtroEmail=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i;
	var modal =$('.modal-body');
	$('.modal-body > p').remove();
	var temErro = false;
	/* Validação do campo nome */
	if(nome == ""){
		$('<p>', {class: 'text-danger'}).html("Favor preencher o Nome").appendTo(modal);
		temErro =true;
	}else if(!filtroNome.test(nome)){
		$('<p>', {class: 'text-danger'}).html("Formato do Nome inválido").appendTo(modal);
		temErro =true;
	}
	// validaçaõ cpf
	if(cpf == ""){
		$('<p>', {class: 'text-danger'}).html("Favor preencher o cpf").appendTo(modal);
	  temErro =true;
	}else if(!filtroCpf.test(cpf)){
		$('<p>', {class: 'text-danger'}).html("Formato do cpf inválido").appendTo(modal);
      temErro =true;
	}

	// validaçaõ email
	if(email == ""){
		$('<p>', {class: 'text-danger'}).html("Favor preencher o E-mail").appendTo(modal);
		temErro =true;
	  }else if(!filtroEmail.test(email)){
		$('<p>', {class: 'text-danger'}).html("Formato do E-mail inválido").appendTo(modal);
		temErro =true;
	  }

	//validação da data
	 if(data == ""){
		$('<p>', {class: 'text-danger'}).html("Favor preencher a data").appendTo(modal);;
	    temErro =true;
	 }else if(new Date(data) > new Date()){
		$('<p>', {class: 'text-danger'}).html("Data inválida, você não pode ter nascido hoje ou no futuro!").appendTo(modal);
		temErro =true;
	 }

   //validação da senha//
	 if(senha == ""){
		$('<p>', {class: 'text-danger'}).html("Favor preencher o senha").appendTo(modal);
		temErro =true;
	  }else if(senha.length < 6){
		$('<p>', {class: 'text-danger'}).html("Favor no minimo 6 caracter").appendTo(modal);
		temErro =true;
	}

	   //validação do campo confirma senha//
	 if(confirma_senha == ""){
		$('<p>', {class: 'text-danger'}).html("Favor  confirmar senha").appendTo(modal);
		temErro =true;
	  }else if(confirma_senha !== senha){
		$('<p>', {class: 'text-danger'}).html("senha não confere tente novamente").appendTo(modal);
		temErro =true;
	  }

     if(temErro){
		 e.preventDefault();
		 $('#exampleModalScrollable').modal('show');
	  }else{
		e.preventDefault();
		 $('<p>', {class: 'text-success'}).html("Cadastrado com sucesso !!!").appendTo(modal);
		 $('#exampleModalScrollable').modal('show');	 
	}
});