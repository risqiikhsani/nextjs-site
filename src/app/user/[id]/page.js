"use client"

import User from './User'

// export async function generateStaticParams() {
//     return [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'}]
//   }

async function getUser(params){
    const user = {
        id:params.id,
        name:"kucing"
    }
    return user
}


export default async function Page({params}){

    const user = await getUser(params)

    return(
        <User user={user}/>
    )
}