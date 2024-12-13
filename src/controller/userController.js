const userService = require("../service/userService")

async function readUser(req,res){
    try{
        const usuarios = await userService.readUser();

        res.json({registros: usuarios})
    } catch(e){
        res.json({erro: e.message})
    }
}

async function readUserById(req,res){
    try{
        const id = req.id;
        const usuario = await userService.readUserById(id)

        res.json({registro: usuario})
    } catch(e){
        res.json({erro: e.message})
    }
}

async function createUser(req,res){
    try{
        const { nome, email, senha, idade } = req.body;
        const message = await userService.createUser(nome, idade, email, senha);

        res.json({message: message})

    } catch(e){
        res.json({erro: e.message})
    }
}

async function updateUser(req,res){
    try{
        const { nome, email, senha, idade } = req.body;
        const id = req.params.id
        const message = await userService.updateUser(id, nome, idade, email, senha);

        res.json({message: message})

    } catch(e){
        res.json({erro: e.message})
    }
}

async function deleteUser(req,res){
    try{
        const id = req.params.id;
        const message = await userService.deleteUser(id);

        res.json({message: message})
    } catch(e){
        res.json({erro: e.message})
    }
}

async function login(req,res){
    try{
        const {email, senha } = req.body;
        const token = await userService.login(email, senha);

        res.json({token: token})

    } catch(e){
        res.json({erro: e.message})
    }
}

module.exports = {
    readUser,
    createUser,
    readUserById,
    updateUser,
    deleteUser,
    login
}