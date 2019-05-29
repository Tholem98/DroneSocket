const arDrone=require('ar-drone')
const client = arDrone.createClient()


client.takeoff()
client.land()