let history = document.querySelector('.history');
let send = document.querySelector('#send');
let show = document.querySelector('#show');
let author = document.querySelector('#author');
let text = document.querySelector('#text');
class Message{
    constructor(author, text){
        this.author = author;
        this.time = new Date ();
        this.text = text;
    }
    toHtml(){
        let p = document.createElement('p');
        history.append(p);
        p.innerText=`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()} ${this.author}: ${this.text}`;
    }
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()} ${this.author}: ${this.text}`;
    }
}

class Messenger{
    constructor(){
        this.messagesArray = [];
    }
    show_history(){
        this.messagesArray.forEach(item=>console.log(item));
    }
    send(author, text){
        let message = new Message(author, text);
        this.messagesArray.push(message.toString());
        message.toHtml();
    }
}
let messenger = new Messenger();
// Operation area
messenger.send('Alish', 'hi');
messenger.send('Nurana', 'salam');
messenger.send('Tatyana', 'privet');

send.addEventListener("click", ()=>{
    if(author.value==='' || text.value==='' || author.value===' ' || text.value===' '){
        alert("Please add something!")
    }else{
        messenger.send(author.value, text.value);
        author.value='';
        text.value='';
    }
})
history.style.display="none"
show.addEventListener("click", ()=>{
    if(history.style.display==="none"){
        history.style.display="block"
        show.innerText="Don't show"
    }else if(history.style.display==="block"){
        history.style.display="none"
        show.innerText="Show"
    }
    
})


