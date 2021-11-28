export function starterPosts() {
    const dateThree = new Date();
        const dateTwo = new Date(dateThree-60000);
        const dateOne = new Date(dateThree-600000);
        return [
            {
                id: 1,
                user: {
                    id: 2,
                    username: "sampleUser"
                },
                title: "First Post",
                text: "This is an example of a post!",
                comments: [],
                created_at: dateOne,
                updated_at: dateOne
            },
            {
                id: 2,
                user: {
                    id: 3,
                    username: "anotherUser"
                },
                title: "Second Post",
                text: "Vision! Empowerment! Perserverance! Unity!",
                comments: [],
                created_at: dateTwo,
                updated_at: dateTwo
            },
            {
                id: 3,
                user: {
                    id: 2,
                    username: "sampleUser"
                },
                title: "Hello everyone",
                text: "I'm new to the forum and happy to be here!",
                comments: [
                    {
                        id: 4,
                        user: {
                            id: 2,
                            username: "sampleUser"
                        },
                        title: null,
                        text: "Welcome! Great to have you with us.",
                        created_at: dateThree,
                        updated_at: dateThree
                    }
                ],
                created_at: dateThree,
                updated_at: dateThree
            }
        ];
}