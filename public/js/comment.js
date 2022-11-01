async function newFormHandler (event){
    event.preventDefault();

    const commentText = document.getElementById('input[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    
    if (commentText) {
        const response = await fetch ('/api/commentroute', {
            method: 'POST',
            body: JSON.stringify({
                commentText,
                post_id
            }),
            headers:{
                'contetn-type': 'application.json'
            }
        });
        if (response.ok){
            document.location.reload();
        } else{
            alert(response.statusText);
            document.getElementById('#comment-form')
        }
    }
};


document.getElementById('.comment-form').addEventListener('submit', commentFormHandler);