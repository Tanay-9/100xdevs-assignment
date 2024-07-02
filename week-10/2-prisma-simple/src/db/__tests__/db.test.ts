// import { PrismaClient } from '@prisma/client';
// import { createUser, getUser } from '../user';
// import { createTodo, updateTodo, getTodos } from '../todo';
// import { dropTables } from '../setup';

// const prisma = new PrismaClient();

// beforeAll(async () => {
//     await dropTables();
// });

// afterAll(async () => {

// });

// describe('User Database Operations', () => {
//     test('createUser inserts a new user into the database', async () => {
//         const username = 'testuser';
//         const password = 'testpass'; // Consider using hashed passwords in actual tests
//         const name = 'Test User';

//         const user = await createUser(username, password, name);

//         expect(user).toHaveProperty('username', username);
//         expect(user).toHaveProperty('name', name);
//         // Assuming password is hashed, you might not compare it directly
//     });

//     test('getUser retrieves a user by ID', async () => {
//         // Create a user first to ensure there is a user to retrieve
//         const newUser = await createUser('newuser', 'password', 'New User');
//         const user = await getUser(newUser.id);

//         expect(user).toHaveProperty('id', newUser.id);
//         expect(user).toHaveProperty('username', 'newuser');
//         expect(user).toHaveProperty('name', 'New User');
//     });
// });

// describe('Todo Operations', () => {
//     let userId: number;

//     beforeAll(async () => {
//       // Create a user for todos
//       const user = await createUser('todouser', 'password', 'Todo User');
//       userId = user.id;
//     });

//     test('createTodo inserts a new todo for a user', async () => {
//       const title = 'Test Todo';
//       const description = 'Test Description';
//       const todo = await createTodo(userId, title, description);

//       expect(todo).toHaveProperty('title', title);
//       expect(todo).toHaveProperty('description', description);
//       expect(todo).toHaveProperty('done', false);
//     });

//     test('updateTodo marks a todo as done', async () => {
//       const todo = await createTodo(userId, 'Update Test', 'To be updated');
//       const updatedTodo = await updateTodo(todo.id);

//       expect(updatedTodo).toHaveProperty('done', true);
//     });

//     test('getTodos retrieves all todos for a user', async () => {
//       // Assuming createTodo adds to the todos for the user
//       await createTodo(userId, 'Another Todo', 'Another description');
//       const todos = await getTodos(userId);

//       expect(todos.length).toBeGreaterThan(0);
//       todos.forEach(todo => {
//         expect(todo).toHaveProperty('userId', userId);
//       });
//     });
// });
import { createUser, getUser } from '../user';
import { createTodo, updateTodo, getTodos } from '../todo';
import { dropTables } from '../setup';

describe('User Database Operations', () => {
    let createdUserId: number;

    beforeAll(async () => {
        await dropTables(); // Assuming this resets your database state
    });

    test('createUser inserts a new user into the database', async () => {
        const username = 'testuser';
        const password = 'testpass';
        const name = 'Test User';

        const user = await createUser(username, password, name);
        createdUserId = user.id; // Store the created user's ID for later use

        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('username', username);
        expect(user).toHaveProperty('name', name);
        // You might not compare password directly in real tests for security reasons
    });

    test('getUser retrieves a user by ID', async () => {
        const user = await getUser(createdUserId);

        expect(user).toHaveProperty('id', createdUserId);
        expect(user).toHaveProperty('username', 'testuser');
        expect(user).toHaveProperty('name', 'Test User');
        // Avoid comparing password directly in tests for security reasons
    });
});
