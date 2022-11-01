async function logout(){

    const response = await fetch ('/api/userroute/logout', {
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
        document.location.replace('/');
    } else{
        alert(response.statusText);
    }

}

document.getElementById('#logout').addEventListener('click', logout);