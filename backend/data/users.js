import bcrypt from 'bcryptjs';
const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Akash Nai',
        email: 'akash@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Akki',
        email: 'akki@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]

export default users;