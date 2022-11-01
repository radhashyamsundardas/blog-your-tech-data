async function deleteFormHandler (event){
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    
        const response = await fetch ('/api/postroute/${id', {
            method: 'DELETE',
            body: JSON.stringify({
            post_id: id
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


    document.getElementById('.delete_podt-btn').addEventListener('click', deleteFormHandler);