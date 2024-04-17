## NOTES


# OBservable

# Funcionalidades do RxJs que é utilizada pelo angular.
# Com ele podemos lidar com a transferencia síncrona e assíncrona de dados.
# Diferentemente de uma Promisse, um Observable pode ser uma fonte de dados contínua, que podera emitir dados por mais de uma vez em diferentes momentos. 


# Arquitetura Pull e Push

# Pull e Push sao dois protocolos diferentes que descrevem como um produtor de dados pode se comunicar com um consumir de dados 

## Pull
#  O produtor determina quando recebe os dados do produto de dados. E o produtos desconhece quando os dados serao entregues ao consumidor.
# produtor --> a funcao js criada
# Cada funcao Javascript é um sistema Pull. A funcao é produtora de dados, e o codigo que chama a funcao a consome puxando um unico valor de retorno da sua chamada
# produtor -> trecho de codigo que executa a funcao e espera o retorno. 

## Push
# O consumidor detrmina quando recebe os dados do produtos de dados, e desconhece quando os dados serao entregues ao consumidor. 
# Cada funcao javascript é um sistema Pull. A funcao é produtora de dados e o codigo que chama a funcao a consome puxando um unico valor de retorno de sua chamada



## Diferenca entre funcoes, promisses e Observables
# Observable -> produtor de multiplos valores, empurrando-os para Observadores ( Consumidores)
# Exemplo observable:  Imagine que você tenha um campo de busca em uma página da web e conforme o usuário digita algo nesse campo, você quer que a página atualize automaticamente com os resultados da busca. Ou seja, Há um Observable monitorando as alteracoes no campo de busca e esta acontecendo uma chamada ao servidor para trazer os resultados do campo de texto.


# Funcao -> Computacao avaliada lentamente que retorna de forma sincrona um unico valor na invocacao 
# Promisse -> Calculo que pode ou nao eventualmente retornar um unico valor. Um Observable é uma computacao avaliada lentamente que pode retornar de forma sincrona ou assincrona zero a valores (potencialmente) infinitos a partir do momento em que é invocado

### Execucao de uma funcao sincrona
´´´
  function getNumberOne(): number{
    console.log('Returning number one')
    return 1;
  }

  console.log(getNumberOne())

  valor retornado:
  1
´´´

### Execucao de um Observable retornando valor sincrono

´´´
const numberOne = new Observable ((subscriber) => {
  console.log('Returning number one')
  subscribe.next(1)
});

numberOne.subscribe((x) => {
  console.log(x)
})
´´´ 

### tanto funcoes quando Observables sao calculos preguicosos sendo necessario serem chamados para que seja executado.
### Subscribe é o mesmo que chamar uma funcao. Um observable precisa do subscribe

### é necessario o subscriber para que a logica ocorra.
### Unsubscribe -> cancela o observable.

### Sincrona -> Definimos o valor especificamente para recebe-lo.
### Assincrona -> Consumir uma API, onde a requisicao é retornada instantaneamente. 
