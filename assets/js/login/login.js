$("#btn-login").click(function() {
  		var student = {name: document.login-form.username.value,
					password: document.login-form.password.value
				};
		alert("dsfsd");
	});

	function login() {
	/* Exemplu de request POST care trimite date serverului */
	
	var student = {name: document.login-form.username.value,
					password: document.login-form.password.value
				};
	alert("dsfsd");
	/*
	
	$.ajax({url: 'http://127.0.0.1:8080/academic/rest/students',
		type: 'POST',
		data: JSON.stringify(student),
		dataType: 'json',
		contentType: 'application/json',
		success: function(response, status) {
			console.log("Status: " + status + " Response: " + response);
		},
		error: function(response, status) {
			console.log("Status: " + status + " Response: " + response);
		}
	});*/
}

/*
/*http://stackoverflow.com/questions/16323360/submitting-html-form-using-jquery-ajax*/
/*PRIMA PAGINA PENTRU PROF - vede o lista cu toate materiile la care preda*/