
// Como cancelar a separação de um pedido
var cancelarseparacao = "Para cancelar a separação do pedido , acessamos o menu 6-6-D do módulo de vendas, você pode filtrar o cancelamento pelo pedido. Em seguida irá apresentar os itens cuja separação será cancelada , selecione os que você quiser e avançe."
// Emitir nota fiscal de um cupom
var notapelocupom = "Para emitir NF apartir do cupom , acessar menu FAT 2-3-E"
// Abrir manual básico do SIGER
var manubasic = "Botão 'Manual básico do SIGER' no canto superior direito da sua tela , irá abrir o manual no navegador. Nele você encontrará as instruções para utilização de quase todas as telas , filtros , relatórios , etc."
// Consultar / reenviar NF já faturada 
var notas = "Para reenviar ou consultar notas já faturadas , podemos ir para o menu FAT 2-3-G e selecionar a primeira opção. Ali é só filtrar a nota que queremos e , na parte inferior da tela teremos as opções disponíveis para a nota selecionada."
// tirar saldo do pedido 
var parcial = "O jeito que a RECH recomenda para se tirar o pedido interno de um saldo é pelo menu FAT 3-6-P , filtre pelo código do pedido , selecione se deseja ou não acumular os itens no pedido interno e avançe. Fora isso , tem o jeito que nós nos acostumamos a fazer , que é pelo botão de pedido interno com seleção na manutenção consolidada dos pedidos, porém este método foi 'abandonado' pela RECH "
// teste instrucao
var instrucao = "Seu programa de mensagens irá abrir pronto para me enviar um e-mail , apenas insira a sua sugestão no corpo do e-mail e envie."
// como tirar relatório de vendas de um cliente
var vendascliente = "Acesse o menu FAT 3-2-S , avance , você poderá ver dois tipos de filtros , por pedidos e por notas, você pode marcar os dois filtros ou apenas um , dentro dos filtros você poderá selecionar clientes , produtos , data , etc ... Avance , o sistema irá gerar o relatório e você irá escolher a forma de saída (PDF , Excel , arquivo de texto , etc..."
// como tirar relatório de vendas por produto
var vendasProduto = "Acesse o menu FAT 5-3-S , avance , você verá 3 tipos de filtro , pode escolher por pedidos , notas e cupons , você pode marcar todos se quiser. Dentro de cada filtro você poderá selecionar clientes , produtos , período , etc ... Avance , o sistema irá gerar o relatório e você irá escolher a forma de saída (PDF , Excel , arquivo de texto , etc..."




function cancelaseparacao(){
    alert(cancelarseparacao)
}

function nfpelocupom(){
    alert(notapelocupom)
}

function manualbasico(){
    alert(manubasic)
}

function menunotas(){
    alert(notas)
}

function parcialmentefat(){
    alert(parcial)
}

function intrucaoemail(){
    alert(instrucao)
}

function vendasporcliente(){
    alert(vendascliente)
}

function vendasporproduto() {
    alert(vendasProduto)
}
