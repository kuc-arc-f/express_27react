const express = require('express');
const router = express.Router();
import LibConfig from '../lib/LibConfig';
require('dotenv').config();
import LibPg from '../lib/LibPg';


/*****************************
todos -index
******************************/
router.post('/test1', async function(req: any, res: any) {
  try {
console.log(req.body);
      //const body = req.body;      
//console.log(body.userId);
    const text = `
      SELECT * FROM public."Todo"
      ORDER BY id DESC LIMIT 100
    `;
    const client = LibPg.getClient();
    const resulete = await client.query(text);
    client.end();
//      console.log(res.rows);
    res.json({ret: "OK", data: resulete.rows});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
