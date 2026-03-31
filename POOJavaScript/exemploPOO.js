//Estudos de POO em JavaScript
//Diferença entre Procedural e POO

//declaração de uma variavel em PRocedural

let produto1 = {
    nome: "Impressora",
    preco: 1000,
    marca: "HP",
    disponivel: true,
    desconto: function () {
        return this.preco * 0.1; // desconto de 10% quando solicitado
    }
}//coleção

let produto2 = {
    nome: "WebCam",
    preco: 550,
    marca: "MultiLaser",
    disponivel: false,
    desconto: function () {
        return this.preco * 0.2; // 20% desconto webCam
    }
}

// imprimindo informações do produto 
console.log(`
    Produto: ${produto1.nome}, 
    Preço: ${produto1.preco}, 
    Marca: ${produto1.marca}, 
    Disponível: ${produto1.disponivel ? "Sim" : "Não"}, 
    Desconto: ${produto1.disponivel ? produto1.desconto() : "" }`);

//declaração de uma classe para criação de um obj (produto) usando POO
class Produto{
    // atributos
    nome;
    preco;
    marca;
    disponivel;

    //métodos
    //Construtor
    constructor(nome, preco, marca, disponibilidade){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.disponivel = disponibilidade
    }

    //método para aplicar desconto
    desconto(){
        return this.preco * 0.1; //10% de desconto
    }

    toString(){
        return `Produto: ${this.nome},
                Preço: ${this.preco},
                Marca: ${produto1.marca}, 
                Disponível: ${produto1.disponivel ? "Sim" : "Não"}, 
                Desconto: ${produto1.disponivel ? produto1.desconto() : "" }`
    }
}

//declara meus produtos
let p1 = new Produto("Microfone", 600, "Elgin", true);
let p2 = new Produto("HeadSet", 150, "Dragon", true);

console.log(p1.toString());


