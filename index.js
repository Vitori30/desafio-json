//json projeto
//criando o heroi e os inimigos
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar() {
        let attack;

        switch (this.type) {
            case "Mago":
                attack = "usou magia";
                break;
            case "Guerreiro":
                attack = "usou espada";
                break;
            case "Monge":
                attack = "usou artes marciais";
                break;
            case "Ninja":
                attack = "usou shuriken";
                break;
            default:
                attack = "não possui um ataque definido";
        }

        return `O ${this.type} atacou usando ${attack}`;
    }
}

let hero = new Hero("Mulher Maravilha", 30, "Guerreiro");
console.log(hero.atacar());
