    let valor = document.querySelector('input#numero')
    let exibir = document.querySelector('select#exibirValor')
    let res = document.querySelector('div#res')
    let valores = []

    function isNumero(n){
        if(Number(n) >=1 && Number(n) <=100){
            return true
        }else{
            return false
        }
    }

    function inLista(n, l){
        if (l.indexOf(Number(n)) != -1 ){
            return true
        }else{
            false
        }
    }

    
function add(){
    if(isNumero(valor.value) && !inLista(valor.value, valores)){
        valores.push(Number(valor.value))
        let item = document.createElement('option')
        item.text=`valor ${valor.value} adicionado.`
        exibir.appendChild(item)
    }else{
       alert('Valor Inválido ou ja encontrado na lista')
        }     
        valor.value=''
        valor.focus()
    }

    function finalizar(){
        if(exibir.length == 0){
            alert('Adicione valores antes de finalizar')
        }else{
            let total = valores.length
            let maiorv = Math.max(...valores)
            let menorv = Math.min(...valores)
            let somarv = valores.reduce(function(total, numero){return total + numero},0)
            let mediav = somarv/total

            res.innerHTML=''

            res.innerHTML+=`<p>Ao todo temos ${total} numeros cadastrados!</p>`
            res.innerHTML+= `<p>O maior valor informado foi o ${maiorv}.</p>`
            res.innerHTML+= `<p>O menor valor informado foi o ${menorv}.</p>`
            res.innerHTML+= `<p>Somando todos os valores, temos ${somarv}.</p>`
            res.innerHTML+= `<p>A média dos valores é ${mediav}.</p>`



        }
    }