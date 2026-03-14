import server from "./server.js"
import { config } from "dotenv";
config()
const PORT = process.env.PORT || 8000

server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})