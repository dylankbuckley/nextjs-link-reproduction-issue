const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
}
export default async function Static() {
    let data = await fetchData()
    return (
        <>
        <h1>This is a dynamic page</h1>
        <h2>{data.title}</h2>
        </>
    )
}