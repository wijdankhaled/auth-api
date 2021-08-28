# auth-api

An Express/Node.js based server using a custom “authentication” module that is designed to handle user registration and sign in using Basic, Bearer, or OAuth along with a custom “authorization” module that will grant/deny users access to the server based on their role or permissions level.

-----------------------------
```
{
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpamRhbjIyMiIsImlhdCI6MTYzMDE1MTQ5NX0.NrQbK93U2ODLWkAPY-CQGVCtWIQTcToW0lTr8uPOGlE",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 4,
        "username": "wijdan222",
        "password": "$2b$10$j37EmV9Ogo784MtGJr4lZeloYkcLbOMkeiv5xKfCniu8Kldt6d.qe",
        "role": "admin",
        "createdAt": "2021-08-28T11:47:33.139Z",
        "updatedAt": "2021-08-28T11:47:33.139Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IndpamRhbjIyMiIsImlhdCI6MTYzMDE1MTQ5NX0.NrQbK93U2ODLWkAPY-CQGVCtWIQTcToW0lTr8uPOGlE"
}

```

-----------------------------


**links**

[heroku](https://authapiwijdan.herokuapp.com/)

[pl](https://github.com/wijdankhaled/auth-api/pull/4)

**.env**

DATABASE_URL=
postgres://evqrfsls:hCywiC5qWSdOkWEJByX4OoRH5dHcLlU8@chunee.db.elephantsql.com/evqrfsls

**Run tests with :**

**npm run test**

**UML**

![](./uml.png)
