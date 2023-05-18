import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../services/AxiosService.js"






class GiftsService {
    async openTheGiftAndPutOnApi(id) {

        const filteredGift = AppState.gifts.find(g => g.id == id)
        console.log('now changing:', filteredGift)
        // @ts-ignore
        filteredGift.opened = !filteredGift.opened
            console.log('the filtered gift is now:', filteredGift);

        const res = await api.put('/api/gifts/' + id, filteredGift)
            console.log('the data is now:', res.data);

        AppState.emit('gifts')
    }

    async createGiftAndPostToApi(formData) {
            console.log('The submitted form is:',formData)
        const res = await api.post('/api/gifts', formData)
            console.log('The added Gif is:', res.data);
        const newGift = new Gift(res.data)
        AppState.gifts.push(newGift)
        AppState.emit('gifts')
    }
    
    
    async getGiftsFromApi() {
            console.log('Online: getGiftsFromApi()');
        const res = await api.get('/api/gifts')
            console.log('The response from the get request is:', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
            console.log('The AppState is now',AppState.gifts);
        AppState.emit('gifts')
    }




    online() {
        console.log('Online: GiftsService');
    }



}

export const giftsService = new GiftsService()