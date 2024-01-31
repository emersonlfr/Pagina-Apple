const imagemVisualizacao = document.getElementById("imagem-visualizacao");

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
}

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
}

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
}

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
}

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
//                      n0              n1         n2         n3         n4               
// meiaNoite.pasta acessar valor em particular no objeto 
// minhaLista[3] acessar um valor em particular na lista

let imagemSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemSelecionada + ".jpeg";
}
