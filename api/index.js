import axios from 'axios'
import config from '~/config'
export default {
    get(url, params) {
        return axios.get(config.rootUrl + url, params).then(data => data.data)
    }
}
