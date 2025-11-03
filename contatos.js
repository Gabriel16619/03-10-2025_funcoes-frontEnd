'use strict'

async function lerContatos(){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const response = await fetch (url)
    const contatos = await response.json()

    console.log (contatos)
    return contatos
}

async function criarContatos (contato) {

    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'
    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

const novoContato = {
        "nome": "Ana Oliveira Dias",
        "celular": "11 9 7171-6464",
        "foto": 'semFoto.png',
        "email": "ana@gmail.com",
        "endereco": "Rua dos anjos, 999",
        "cidade": "xique-xique"
}

async function atualizarContato (id, contato) {

    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

const update = {
        "nome": "Gabriel",
        "celular": "11 9 7171-6464",
        "foto": 'semFoto.png',
        "email": "ana@gmail.com",
        "endereco": "Rua dos anjos, 999",
        "cidade": "xique-xique"
}

async function deleteContato(id) {
     const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
     const options = {
        method: 'DELETE'
     }

     const response = await fetch(url, options)

     console.log(response.ok)
     return response.ok
}