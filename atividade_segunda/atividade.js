$("#form").submit(function (e) {
    e.preventDefault()
    let $customForm = $(this)

    let arrayForm = $customForm.serializeArray();
    let formName = arrayForm[0]
    let formEmail = arrayForm[1]
    alert("LOGADO COM SUCESSO..")
    alert("name: " + formName.value + ' ' + "email: " + formEmail.value)
} )