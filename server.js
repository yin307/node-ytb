const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const api = express.Router()
const cors = require('cors')

const ytdl = require('ytdl-core');


app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())



app.use(cors({
    origin: true
}));


const PORT = 3000;
app.listen(3000, ()=>{
    console.log(`Server running on port: ${PORT}`)
})


app.post('/get', (req, res) =>{
    console.log(req.body) 
    try{
        ytdl.getInfo(req.body.url).then(info => {
            console.log(info.formats.length);
            let response = [];
            if (info.formats != undefined && info.formats.length > 0){       
                   
                for(i=0; i <  info.formats.length; i ++){
                
                    response.push({
                        qualityLabel: info.formats[i].qualityLabel,
                        url: info.formats[i].url,
                        hasVideo: info.formats[i].hasVideo,
                        hasAudio: info.formats[i].hasAudio,
                        container: info.formats[i].container,
                    })
                }

            }
            res.send(response);

        }).catch(e => {
            res.send([]);
        });
    }catch(err){
        res.send([]);
    }
    
})

app.get('/', (req, res) =>{
    res.send("Hello World")
})