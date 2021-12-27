let curso = require('./curso/index')


function Aluno(nome,quantidadeFaltas,notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;

    this.faltas = function() {
        this.quantidadeFaltas += 1;
    },
    this.calcularMedia = function() {
        let soma = 0;
        for (let i = 0; i < this.notas.length ; i++){
            soma += this.notas[i];
        }

        return soma / this.notas.length;
    }

}

let aluno1 = new Aluno('David', 9, [7 , 8, 9, 7]);
let aluno2 = new Aluno('Marcos', 10, [5 , 4, 9, 6]);
let aluno3 = new Aluno('Fernanda', 7, [8 , 9, 7, 9]);

//curso.curso.listaEstudantes.push(aluno1);
//console.log(curso.curso);
//aluno1.faltas();
//console.log(aluno1.calcularMedia());

/* SIMPLIFICANDO */
curso.curso.novoEstudante(aluno1);
curso.curso.novoEstudante(aluno2);
curso.curso.novoEstudante(aluno3);

console.log(curso.curso.listaDaVerdade());

// Mandatory programming checkpoint 3
