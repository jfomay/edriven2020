var displayTable = document.getElementById('displayTable')
var tbody = displayTable.firstElementChild //NEEDED TO DISPLAY CONTENT
var object = null
var objectt = null

if(data != null){
    for(var i = 0; i < data.length; i++){
        object = data[i]
        objectt = Object.getOwnPropertyNames(object)//['ORNumber', 'name', 'items', 'total']
        var tr = document.createElement('tr')
        var checker = true
        for(var ii = 0; ii < objectt.length; ii++){
            var td = document.createElement('td')
            td.scope = 'row'
            if(ii == 0 && checker){ //FOR # COLUMN IN TABLE
                var tdTextNode = document.createTextNode(i + 1)
                td.appendChild(tdTextNode)
                tr.appendChild(td)
                tbody.appendChild(tr)
                ii--
                checker = false
            }
            else{
                td.className = 'text-center'
                if(ii == objectt.length - 1){ //FOR ACTION COLUMN IN TABLE
                    var anchor = document.createElement('a')
                    anchor.href = ''
                    anchor.className = 'viewOrder'
                    anchor.setAttribute('data-bs-toggle', 'modal')
                    anchor.setAttribute('data-bs-target', '#viewItem')
                    var tdTextNode = document.createTextNode('[View]')
                    anchor.appendChild(tdTextNode)
                    td.appendChild(anchor)
                    tr.appendChild(td)
                    tbody.appendChild(tr)  
                }
                else if(ii == objectt.length - 2){ //FOR TOTAL COLUMN IN TABLE
                    var result = data[i][objectt[objectt.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                     
                }
                else{ //FOR ORDER # AND CUSTOMER NAME COLUMNS IN TABLE
                    var tdTextNode = document.createTextNode(data[i][objectt[ii]])
                    td.appendChild(tdTextNode)
                    tr.appendChild(td)
                    tbody.appendChild(tr)                    
                }
            }
        }
    }
}
