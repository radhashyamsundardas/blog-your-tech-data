async function loginFormHandler (event){
    event.preventDefault();

    const username= document.getElementById('#username-login').value.trim();
    const password = document.getElementById('#password-login"]').value.trim();

    const id =window.location.toString().split('/')[
        window.location.toString().split('/').length -1

    ]
    if (username && password){


        const response = await fetch ('/api/userroute/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers:{
                'contetn-type': 'application.json'
            }
        });
        if (response.ok){
            document.location.replace('/dashboard');
        } else{
            alert(response.statusText);
        }
    }
    }
    
document.getElementById('#login-form').addEventListener('submit', loginFormHandler)