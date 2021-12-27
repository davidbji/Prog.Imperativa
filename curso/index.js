module.exports = {
    curso: {
        nomeCurso: 'Curso Js',
        notaAprovacao: 6,
        faltasMaximas: 10,
        listaEstudantes: [],
        novoEstudante: function(estudante) {
            this.listaEstudantes.push(estudante);
        },
        horaDaVerdade: function(aluno) {
            let media = aluno.calcularMedia();
            let resultado;

            if (aluno.quantidadeFaltas < this.faltasMaximas && media >= this.notaAprovacao){
                resultado = true;
            } else if (aluno.quantidadeFaltas === this.faltasMaximas && media > (this.notaAprovacao * 1.1)) {
                resultado = true;
            } else {
                resultado = false;
            }
            return resultado;
        },
        listaDaVerdade: function() {
            let verdade = [];
            for (let i = 0; i < this.listaEstudantes.length; i++){
                verdade.push(this.horaDaVerdade(this.listaEstudantes[i]));
            }

            return verdade;
        }
    }
}

// 1- nota igual ou superior a notaAprovacao && temque ter menos < que faltasMaximas

// 2- se o aluno tiver faltasMaximas ele terá que ter 10% > notaAprovacao

