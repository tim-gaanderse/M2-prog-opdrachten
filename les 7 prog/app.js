class Dino{
    constructor(naam,bool, nummer)
    {
        this.naam = naam;
        this.vleeseter = bool;
        this.leeftijd = nummer;
        this.honger = true;

    }
    eetdino(){
        Dino.leeft = false;

    }
    eetplant(){
        
    }
}

class Plant{
constructor(naam,bool){
    this.leeft = true;
    this.honger = true;

}

}


let trex = new Dino("Trex",true,10,true);
console.log(trex);

let stego = new Dino("Stego",true,89,true);
console.log(stego);

