const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(express.json())
app.use(cors("*"))

// let move ="LEFT";
// let action ="COLLECT";

// app.get('/action', (req, res) => {
//     res.json({move, action})
//   })
  let move = "NONE";
  let action = "NONE";  

  app.post('/action', (req, res) => {
    console.log(req.body)
    
    // Récupération des données du body
    move = req.body?.move;
    action = req.body?.action;
    // Réponse
    res.json({ move, action });
  });

  app.get('/action', (req, res) => {
    res.json({
      "move" : move,
      "action" : action
    })
  });
// export default app;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
