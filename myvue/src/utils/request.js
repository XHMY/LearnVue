import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: "https://elm.cangdu.org",
    timeout: 5000
})