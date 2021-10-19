function multiplicacao(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    if(n === undefined) {
        n = 10
    }
    let x = [];
    for (let linha = 0; linha <= n; linha++) {
        x.push([]);
            for(let coluna = 0; coluna <= n; coluna++) {
                x[linha][coluna] = linha * coluna
            }
    }   
    console.log(x)
    console.table(x)
}

multiplicacao(16)