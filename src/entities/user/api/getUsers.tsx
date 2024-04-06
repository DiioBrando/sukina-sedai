export const getUsers = async () => {
    const res = await fetch('https://6605885e2ca9478ea1809589.mockapi.io/users');
    const data = await res.json();

    if(!data.ok) {
        return;
    }

    return data
}