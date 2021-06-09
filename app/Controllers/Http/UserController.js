'use strict'

const User = use('App/Models/User')

class UserController {
    async index ({ request, response, view}){
        const user = await User.query().with('user').feth()
        return user
    }

    async store ({ request, response}){
        console.log(request.data)
        const data = request.only(['username', 'email', 'password', 'acesso', 'CPF'])
        const user = await User.create(data)
        return user        
    }

    async show ({params}){     
        const user = await User.findOrFail(params.id)
           
        return user        
    }
    

    async update ({ request}){   
        console.log(request.body.id)  
        const user = await User.findOrFail(request.body.id);
        const data = request.only(['username', 'CPF' ,'email'])

        user.merge(data)
        await user.save()
                   
        return user      
    }

    async destroy ({params}){    
        console.log('chegou') 
        const user = await User.findOrFail(params.id)
           
        await user.delete()        
    }
    async showAll ({}){
        console.log('chegou')
        const user = await User.all()
        
        return user
    }
    async desativarAcesso ({params, request}){    
        console.log('chegou') 
        const data = request.only('acesso')
        const user = await User.find(params.id, {
            acesso: 0,
          });      
        user.merge(data)
        await user.save()       
    }
    async ativarAcesso ({params, request}){    
        console.log('chegou') 
        const data = request.only('acesso')
        const user = await User.find(params.id, {
            acesso: 1,
          });      
        user.merge(data)
        await user.save()       
        
    }


}

module.exports = UserController
