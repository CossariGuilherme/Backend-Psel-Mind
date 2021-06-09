'use strict'

const User = use('App/Models/User')
const database = use('Database')
class SessionController {
    async store ({request, response, auth}){
        
    const {email, password} = request.all()
     
    const token = await auth.attempt(email, password)  
    const user = await database.from('users').where({email:email})
    console.log(user)
    // const user = await database
    // .select('*')
    // .from('users')
    // .whereRaw('email='+email)
    const data = {token:token.token, user:user[0]}
    return data
    }
   
}
module.exports = SessionController
