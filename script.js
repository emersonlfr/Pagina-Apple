const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

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
const opcoesTamanho = ["41 mm", "45 mm"];          
// meiaNoite.pasta acessar valor em particular no objeto 
// minhaLista[3] acessar um valor em particular na lista

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name='opcao-imagem']:checked").id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarTamanho() {
    // atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamanho']:checked").id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);

    // mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de " + opcoesTamanho[tamanhoSelecionado];

    // mudar o tamanho da imagem de acordo com a opcao
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
        imagemVisualizacao.classList.add("caixa-pequena");    
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}

function trocarCor() {
    // atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector("[name='opcao-cor']:checked").id;
    corSelecionada = idOpcaoSelecionada.charAt(0);

    // trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome +  " para caixa de " + opcoesTamanho[tamanhoSelecionado];

    // trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;

    // trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";

    // trocar imagem de visualizacao
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}