"use client"

import Post from './Post'

// export async function generateStaticParams() {
//     return [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'}]
//   }

async function getPost(params){
    const post = {
        id:params.id,
        text:"hi kucing"
    }
    return post
}


export default async function Page({params}){

    const post = await getPost(params)

    return(
        <Post post={post}/>
    )
}