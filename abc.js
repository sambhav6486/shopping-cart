var maximumWealth = function(accounts) {
    let account = []
    for(let i=0; i<accounts.length; i++){
        let result = 0;
        result = accounts[i].reduce(function(a,b){
            return a + b;
        })
        account.push(result)
    }
    return Math.max(...account);
    
}
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))