const { application, response } = require("express");
const { json } = require("sequelize");

async function newFormHandler (event){
    event.preventDefault();

    const title = document.getElementById('input[name="post-title"]').value;
    const info = document.getElementById('input[name="info"]').value;

    const response = await fetch ('/api/postroute', {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers:{
            'contetn-type': 'application.json'
        }
    });
    if (response.ok){
        document.location.replace('/dashboard');
    } else{
        alert('add post didnt work');
    }

};

document.getElementById('#new-post-form').addEventListener('submit', newFormHandler);