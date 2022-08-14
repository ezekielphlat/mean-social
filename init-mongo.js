db.createUser(
    {
        user: "tutorial",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "socialmedia"
            }
        ]
    }
)