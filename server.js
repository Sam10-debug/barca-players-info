const express=require('express')
const app = express()
const PORT=8000
const cors= require ('cors')


app.use(cors())

const playerInfo={
	"ter stegen":{
		"name": "Marc Andre Ter Stegen",
		"age":30,
		"country":"Germany",
		"heights":"1.87m",
		"squad number":1
	},
	"dest":{
		"name": "Sergino Dest",
		"age":21,
		"country":"U.S.A",
		"heights":"1.75m",
		"squad number":2
	},
	"pique":{
		"name": "Gerard Pique",
		"age":35,
		"country":"Spain",
		"heights":"1.94m",
		"squad number":3
	},
	"araujo":{
		"name": "Ronald Araujo",
		"age":23,
		"country":"Uruguay",
		"heights":"1.88m",
		"squad number":4
	},
	"busquets":{
		"name": "Sergio Busquets",
		"age":33,
		"country":"Spain",
		"heights":"1.89m",
		"squad number":5
	},
	"pedri":{
		"name": "Pedri Gonzalez",
		"age":19,
		"country":"Spain",
		"heights":"1.74m",
		"squad number":16
	},
	"gavi":{
		"name": "Pablo Gavira",
		"age":17,
		"country":"Spain",
		"heights":"1.73m",
		"squad number":30
	},
	"nico":{
		"name": "Nicholas Gonzalez",
		"age":20,
		"country":"Spain",
		"heights":"1.88m",
		"squad number":14
	},
	"ferran torres":{
		"name": "Ferran Torres",
		"age":22,
		"country":"Spain",
		"heights":"1.84m",
		"squad number":18
	},
	"fati":{
		"name": "Ansu Fati",
		"age":19,
		"country":"Spain",
		"heights":"1.78m",
		"squad number":10
	},
	"aubameyang":{
		"name": "Pierre-Emerick Aubameyang",
		"age":33,
		"country":"gabon",
		"heights":"1.87m",
		"squad number":25
	},
	"dembele":{
		"name": "Ousmane Dembele",
		"age":25,
		"country":"France",
		"heights":"1.78m",
		"squad number":7
	},
	"riqui puig":{
		"name": "Ricard Marti Puig",
		"age":22,
		"country":"Spain",
		"heights":"1.68m",
		"squad number":6
	},
	"depay":{
		"name": "Memphis Depay",
		"age":28,
		"country":"Netherlands",
		"heights":"1.76m",
		"squad number":9
	},
	"neto":{
		"name": "Norbeto Neto Murara",
		"age":32,
		"country":"Brazilian",
		"heights":"1.9m",
		"squad number":13
	},
	"no":{
		"name": "not a player",
		"age":"-",
		"c0untry":"-",
		"heights":"-",
		"squad number":"-"
	}
}

app.get('/',(request, response) => {
	response.sendFile(__dirname+'/index.html')
})

app.get('/api',(request, response) => {
	response.json(playerInfo)
})

app.get('/api/:player',(request, response) => {
	const info= request.params.player.toLowerCase()
	if(playerInfo[info]){
		response.json(playerInfo[info])
	}else{
		response.json(playerInfo["no"])
	}
})

app.listen(process.env.PORT||PORT,()=>{
	console.log(`server is running on port ${PORT}, you better go catch it`)
})