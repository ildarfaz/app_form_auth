import fetchMock from "fetch-mock";

fetchMock.mock('https://example.com/login', {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' },
});

export const login = async (data: { email: string, password: string }) => {
    try {
        const response = await fetch('https://example.com/login', {
            method: 'POST',
            body: JSON.stringify(data)
        },
        )
        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            return new Error(`HTTP error! message: ${error.message}`)
        }

    }
}
