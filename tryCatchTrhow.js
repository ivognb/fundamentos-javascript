function tratarErro(erro) { // função pro catch
    erro.name = 'ivo'
    erro.message = 'deu ruim aqui'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}



function imprimirNomeGritado(obj) {
    try{ // tente fazer isso:
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){ // se o try não der certo, faça:
        tratarErro(e)
    } finally { // se o try der certo:
        console.log('final');
    }
}

const obj = { nome: 'roberto'} // const obj com o atributo errado
imprimirNomeGritado(obj)