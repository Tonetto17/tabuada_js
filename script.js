function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Campo obrigatorio')
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
           var item = window.document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)
           c++
        }
    }
}