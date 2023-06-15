import cron from 'node-cron'
import axios from 'axios'

cron.schedule('0-59/30 0-23 1-31 6 mon-tue-wed-thu-fri-sat-sun', () => {
  let hora = new Date
  console.log(`Executando rotina Programada...${hora.getHours()}:${hora.getMinutes()} | ${hora.getDate()}/${hora.getMonth()}/${hora.getFullYear()}`)
  axios.get(`https://api-vercel-ochre.vercel.app/routine`)
})
