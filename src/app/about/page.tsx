import About from './about'


// async function getPosts() {
//     const res = await fetch('https://...')
//     const posts = await res.json()
//     return posts
//   }

async function getLinks(){
    const links = [
        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
      ]
    return links
}

async function getStats(){
    const stats = [
        { name: 'Offices worldwide', value: '12' },
        { name: 'Full-time colleagues', value: '300+' },
        { name: 'Hours per week', value: '40' },
        { name: 'Paid time off', value: 'Unlimited' },
      ]
    return stats
}


export default async function Page(){

    const links = await getLinks()
    const stats = await getStats()

    return(
        <About links={links} stats={stats}/>
    )
}