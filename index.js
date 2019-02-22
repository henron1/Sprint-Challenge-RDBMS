const express = require('express');
// const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename:'./dev.sqlite3'
    },
    useNullAsDefault: true,
}

const db = (knexConfig);

const server = express();
server.use(express.json());
// server.use(helmet());

// server.get('/', (req, res) => {
//     res.send('<h1>it is workinggggg </h1>');
//   });


// POST project // POST project // POST project // POST project // POST project // POST project // POST project // POST project // POST project // POST project
server.post('/api/projects', async (req, res) => {
    try {
      const project = await db('projects').insert(req.body);
      if (project) {
        return res.status(200).json({ message: "Project created"})
      } else {
        return res.status(404).json({ error: "The project could not be added"})
      }
    } catch (error) {
      return res.status(500).json({ error: "project could not be added right now"})
    }
  });

// post action // post action // post action // post action // post action // post action // post action // post action // post action // post action 
server.post('/api/actions', async (req, res) => {
    try {
      const action = await db('actions').insert(req.body);
      if (action) {
        return res.status(200).json({ message: "Action created "})
      } else {
        return res.status(404).json({ error: "action could not be added at this time"})
      }
    } catch (error) {
      return res.status(500).json({ error: "action could not be added at this time"})
    }
  });
// GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET // GET 

server.get('/api/projects', async (req, res) => {
    try {
      const projects = await db('projects');
      if (projects) {
        return res.status(200).json(projects);
      } else {
        res.status(404).json({ error: "unable to get projects at this time"})
      }
    } catch (error) {
      return res.status(500).json({ error: "unable to get projects at this time"})
    }
  });

  server.get('/api/actions', async (req, res) => {
    try {
      const actions = await db('actions');
      if (actions) {
        return res.status(200).json(actions)
      } else {
        res.status(404).json({ error: "can't find the action"})
      }
    } catch (error) {
      res.status(500).json({ error: "We were unable to get actions"})
    }
  });

server.get('/api/actions/:id', async (req, res) => {
    try{
        const action = await db('actions')
            .where({ id: req.params.id})
            .first();
        res.status(200).json(action);
    } catch(error){
        res.status(500).json(error);
    }
})

//get actions for projects //get actions for projects //get actions for projects //get actions for projects //get actions for projects //get actions for projects
  server.get('/api/projects/:id', async (req, res) => {
    try {
      const project = await db('projects').where({ id: req.params.id });
      const actions = await db('actions').where({ project_id: req.params.id })
      if (actions && project) {
        return res.status(200).json({ project, actions });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  });

// UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE // UPDATE 
server.put('/api/projects/:id', async (req, res) => {
    try{
        const count = await db('projects')
            .where({ id: req.params.id })
            .update(req.body);
        if (count > 0){
            const project = await db('projects')
                .where({ id: req.params.id})
                .first();
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'Could not update this project bc I was not able to find it' });
        }
    } catch(error){
        res.status(500).json(error)
    }
})

server.put('/api/actions/:id', async (req, res) => {
    try{ 
        const count = await db('actions')
            .where({ id: req.params.id })
            .update(req.body);
        if (count > 0){
            const action = await db('actions')
                .where({ id: req.params.id})
                .first();
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: 'Could not find action to update' });
        }
    } catch(error) {
        res.status(500).json(error);
    }
})

// DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE // DELETE 
server.delete('/api/projects/:id', async (req, res) => {
    try{
        const count = await db('projects')
            .where({ id: req.params.id})
            .del();
        if (count > 0) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'no project to delete'});
        }
    } catch(error) {
        res.status(500).json(error);
    }
})


//   server.get('/api/projects', async (req, res) => {
//     try{
//         const project = await db('projects');
//         res.status(200).json(project);
//     } catch(error) {
//         res.status(500).json(error);
//     }
// })



//get actions for projects //get actions for projects //get actions for projects //get actions for projects //get actions for projects //get actions for projects
// server.get('/api/projects/:id/', async (req, res) => {
//     try {
//         const projects = await db('projects').where({ id: req.params.id });
//         const actionList = await db('actions').where({ project_id: req.params.id});
//         if (projects.length){
//             const project = projects[0];
//             res.status(200).json({...project, actionList})
//         } else {
//             res.status(404).json({ message: "No actions for this project" });
//         }
//     } catch(error){
//         res.status(500).json(error);
//     }
// })




const port = 3000;
server.listen(port, function() {
    console.log(`server listening on ${port}`)
})