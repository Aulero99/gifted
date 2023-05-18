export class Gift{

    constructor(data){

        this.id = data.id
        this.tag = data.tag || ''
        this.url = data.url || 'https://media1.tenor.com/images/b278a5a006340b8946457552adec56c5/tenor.gif?itemid=7991240'
        this.opened = data.opened || false
        this.creatorId = data.creatorId || ''

    }

    get giftTemplate(){
      if (this.opened){
        return /*html*/`
        <div class="card p-2 gift-card" >
        <img class="img-fluid" src="${this.url}" alt="${this.tag}">
        <div class="card-footer justify-content-center align-content-center">
          <p>
            ${this.tag}
          </p>
        </div>
      </div>
        `
      }

      return /*html*/`
      <div class="card p-2 gift-card" onclick="app.GiftsController.openTheGiftAndPutOnApi('${this.id}')">
      <img class="img-fluid" src="https://i.pinimg.com/originals/a7/57/d2/a757d203a381c5628bddfa55af3094b1.gif" alt="Open Me">
      <div class="card-footer justify-content-center align-content-center">
        <p>
          Open the Gift to Find Out What is Inside
        </p>
      </div>
    </div>
      `
    }

}