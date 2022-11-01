async function editFormHandler (event){
    event.preventDefault();

    const title= document.getElementById('input[name"post-title"]').value.trim();
    const content = document.getElementById('input[name"content"]').value.trim();

    const id =window.location.toString().split('/')[
        window.location.toString().split('/').length -1

    ]
    
    
        const response = await fetch ('/api/postroute/${id', {
            method: 'Put',
            body: JSON.stringify({
                title,
                content
            }),
            headers:{
                'contetn-type': 'application.json'
            }
        });
        if (response.ok){
            document.location.replace('/dashboard/');
        } else{
            alert(response.statusText);
        }
    }
document.getElementById('.edit-post-form').addEventListener('submit', editFormHandler);