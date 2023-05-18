import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"


// Private Classes


function _drawGifts() {
    let template = ''
    let gifts = AppState.gifts

    gifts.forEach( g => {template += g.giftTemplate})

    setHTML('appHTM', template)
}


export class GiftsController {
    constructor(){
        console.log('Online: GiftsController');
        giftsService.online()
        this.getGiftsFromApi()
        // _drawGifts()

        AppState.on('gifts', _drawGifts)
        // AppState.on('account', _drawGifts)

    }


    async openTheGiftAndPutOnApi(id){
        try {
            console.log('open the gift:', id);
            await giftsService.openTheGiftAndPutOnApi(id)
        } catch (error) {
            Pop.error(error)
        }
    }

    async getGiftsFromApi(){
        try {
            await giftsService.getGiftsFromApi()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createGiftAndPostToApi(){
        window.event?.preventDefault()
        // @ts-ignore
        const form = window.event.target

        let formData = getFormData(form)


        try {
            await giftsService.createGiftAndPostToApi(formData)
        } catch (error) {
            Pop.error(error)
        }
    }







}


