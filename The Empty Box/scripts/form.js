function enviardados(){
  
	/*-- FormFAQ --*/
	if(document.dados.nome.value=="" || document.dados.nome.value.length < 3)
	{
		alert( "Preencha campo NOME corretamente!" );
		document.dados.nome.focus();
		return false;
	}

	if(document.dados.sobrenome.value=="" || document.dados.sobrenome.value.length < 5)
	{
		alert( "Preencha campo SOBRENOME corretamente!" );
		document.dados.sobrenome.focus();
		return false;
	}
	  
	if( document.dados.email.value=="" || document.dados.email.value.indexOf('@')==-1 || document.dados.email.value.indexOf('.')==-1 )
	{
		alert( "Preencha campo E-MAIL corretamente!" );
		document.dados.email.focus();
		return false;
	}

	if( document.dados.tipo.value=="")
	{
		alert( "Defina o TIPO da mensagem! (Pergunta, sugestao ou critica)" );
		return false;
	}
	  
	if (document.dados.assunto.value=="")
	{
		alert( "Preencha o campo ASSUNTO!" );
		document.dados.assunto.focus();
		return false;
	}
	  
	if (document.dados.mensagem.value.length < 20 )
	{
		alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
		document.dados.mensagem.focus();
		return false;
	}
	  
	return true;
	}
	
/*-- FormLogin --*/	
function login(){
	
	if (document.login.user.value==""){
		alert("Digite o nome de usuário/e-mail corretamente!");
		document.login.user.focus();
		return false;
	}
	
	if (document.login.senha.value=="" || document.login.senha.value.lenght < 8){
		alert("Senha incorreta! Redigite-a corretamente.");
		document.login.senha.focus();
		return false;
	}
	
	return true;
}