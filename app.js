const express = require('express');
const app = express();
const path = require('path');
const uuid = require('uuid/v4');
const logger = require('morgan');
const users = require('./models/Users')
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/userRoutes');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes)





// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public'));
// });  
app.get('/', (req, res) => {
    return res.send('Hello express')
})

//get all users
// app.get('/api/users', (req, res) => {
//     console.log(users)
//     res.send(users)
// })

//get a single user
// app.get('/api/users/:id', (req, res) => {
//     const userExists = users.filter(user => user.id === req.params.id);
//     console.log(userExists);
//     if(userExists.length !== 0) {
//         return res.status(200).json(userExists[0]);
//     } else {
//         return res.status(400).json({message: `User with id: ${req.params.id} does not exist` })
//     }
// });

// create user
// app.post('/', (req, res) => {
//     if(!req.body.name || !req.body.email) {
//         return res.status(400).json( {message: 'Please enter both a name and an email'})
//     }
//     const newUser = {};
//     newUser.id = uuid();
//     newUser.name = req.body.name;
//     newUser.email = req.body.email;
//     users.push(newUser);
//     console.log(newUser)
//     return res.json(req.body);
// })

// router.put('/api/users/:id', (req, res) => {
//     const userExists = users.filter(user => user.id === req.params.id);

//     if(userExists[0] !== 0) {
//         const updatedUser = req.body;
//         if(userExists[0].id === req.params.id) {
//             userExists[0].name = updatedUser.name ? updatedUser.name : userExists[0].name;
//             userExists[0].email = updatedUser.email ? updatedUser.email : userExists[0].email;
//             res.status(200).json({message:'User updated', user: userExists[0] });
//         }
//     } else {
//         return res.status(400).json( {message: `User with id: ${req.params.id} does not exist`} );
//     }
// })

// app.delete('/api/users/:id', (req, res)=> {
//     const userExists = users.filter(user => user.id === req.params.id);
//     let user = userExists[0];

//     if(userExists.length !== 0) {
//         const deletedUser = user.indexOf(user);
//         users.splice(deletedUser, 1);
//         return res.status(200).json({message: 'User Deleted', user })

//     } else {
//         return res.status(400).json({message: `User with id: ${req.params.id} does not exists`})
//     }
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
}
)
