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

  app.get('/action', (req, res) => {
    console.log(req.body)
    // Récupération des données du body
    const move = req.body?.move;
    const action = req.body?.action;
    // Réponse
    res.json({ move, action });
  });
// export default app;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
