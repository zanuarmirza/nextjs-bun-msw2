// dummy fetch service
export const getData = async () => {
    const data = await fetch('https://example.com/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).catch(err => {
        console.log(err);
        return null
    });
    console.log(data)
    if (!data) return null
    return data.json().catch(err => {
        console.log(err);
        return null
    })
}
