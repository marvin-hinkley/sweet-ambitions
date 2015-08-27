var Post        = require('../models/post'),
    Task        = require('../models/task'),
    User        = require('../models/user');

module.exports = function routes(app, mongoose) {
    var router = app.Router();

    router.post('authenticate', function(req, res) {
        
    });
    
    //Tasks
    router.get('/tasks', function(req, res) {
        Task.find(function(err, tasks) {
            if (err) { res.send(err); }
            res.json(tasks);
        });
    });
    router.post('/tasks', function(req, res) {
        console.log('Request Body:');
        console.log(req.body);
        var task = new Task();
        task.name = req.body.name;
        task.type = req.body.type;
        task.user = req.body.user;
        task.notes = req.body.notes;
        task.approved = false;
        
        task.save(function(err) {
            if (err) { res.send(err); }
            res.json({message: 'task created'});
        });
    });
    router.get('/tasks/:id', function(req, res) {
        Task.findById(req.params.id, function(err, task) {
            if (err) { res.send(err); }
            res.json(task);
        });
    });
    router.put('/tasks/:id', function(req, res) {
        Task.findById(req.params.id, function(err, task) {
            if (err) { res.send(err); }
            task.name = req.body.name;
            task.type = req.body.type;
            task.user = req.body.user;
            task.notes = req.body.notes;
            task.approved = false;

            task.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'task updated'});
            });
        });
    });
    router.delete('/tasks/:id', function(req, res) {
        Task.remove({_id: req.params.id}, function(err, task) {
            if (err) { res.send(err) };
            res.json({ message: 'Task deleted' });
        });
    });
    
    //Posts
    router.get('/posts', function(req, res) {
        Post.find(function(err, posts) {
            if (err) { res.send(err); }
            res.json(posts);
        });
    });
    router.post('/posts', function(req, res) {
        console.log('Request Body:');
        console.log(req.body);
        var post = new Post();
        post.name = req.body.name;
        post.body = req.body.body;
        post.author = req.body.author;
        post.tags = req.body.tags;

        post.save(function(err) {
            if (err) { res.send(err); }
            res.json({message: 'post created'});
        });
    });
    router.get('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            res.json(post);
        });
    });
    router.put('/posts/:id', function(req, res) {
        Post.findById(req.params.id, function(err, post) {
            if (err) { res.send(err); }
            post.name = req.body.name;
            post.body = req.body.body;
            post.author = req.body.author;
            post.tags = req.body.tags;

            post.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'post updated'});
            });
        });
    });
    router.delete('/posts/:id', function(req, res) {
        Post.remove({_id: req.params.id}, function(err, post) {
            if (err) { res.send(err) };
            res.json({ message: 'Post deleted' });
        });
    });
    
    //Users
    router.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err) { res.send(err); }
            res.json(users);
        });
    });
    router.post('/users', function(req, res) {
        console.log('Request Body:');
        console.log(req.body);
        var user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.username = req.body.username;
        user.age = req.body.age;
        user.email = req.body.email;
        user.officer = req.body.officer;
        user.password = req.body.password;

        user.save(function(err) {
            if (err) { res.send(err); }
            res.json({message: 'user created'});
        });
    });
    router.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            res.json(user);
        });
    });
    router.put('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) { res.send(err); }
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.username = req.body.username;
            user.age = req.body.age;
            user.email = req.body.email;
            user.officer = req.body.officer;
            user.password = req.body.password;
            
            user.save(function(err) {
                if (err) { res.send(err); }
                res.json({message: 'user created'});
            });
        });
    });
    router.delete('/users/:id', function(req, res) {
        User.remove({_id: req.params.id}, function(err, user) {
            if (err) { res.send(err) };
            res.json({ message: 'User deleted' });
        });
    });
    
    return router;
};