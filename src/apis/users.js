const USERS_API = '/api/users';

export async function createUser(newUser) {
    const response = await fetch(USERS_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });

    const body = await response.json();

    if (response.ok) {
        return body;
    } else {
        if (body) {
            throw body;
        } else {
            throw new Error('Something went wrong');
        }
    }
}
