document.getElementById("Share").addEventListener("click",addData)
function addData(){
    let name=getElementById('Name').value
    let dataToAdd = {
        Name:name
    }    
    firebase.firestore().collection('users').add(dataToAdd).then(res=>{
        alert('Added')
    }.catch(e=>{
        console.log('err')
    }
    )
    )
}