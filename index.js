// Classe Mensagem
class Message {
  constructor(text = '', created = Date.now()){
    this.text - text;
    this.created = created;
  }
  get created(){
    return this._created;
  }
  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Criação inválida');
    }
    if (Message.prototype.hasOwnProperty.call('_created')) {
      throw new Error('Criação já definida!');
    }

    this._created = created;
  }
  toString(){
    return `Mensagem criada em: ${this.created} - Text: ${this.text}`;
  }
}

// Classe Imagem Mensagem extendendo a classe Mensagem
class ImageMessage extends Message {
  constructor(text = '', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString(){
    return `Photo....: ${super.toString() } ` +
           `Url......: ${this.url} ` +
           `Thumbnail: ${this.thumbnail} `
  }

}






// ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
var message = new Message('Mensagem de ontem', Date.now() - 86400);
var imgMessage = new ImageMessage()

// console.log(String(message));
console.log(String(imgMessage));

console.log(imgMessage instanceof Message);
console.log(imgMessage instanceof ImageMessage);