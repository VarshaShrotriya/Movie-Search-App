

let input=document.querySelector('input')
let btn=document.querySelector('button')
let list=document.querySelector('#list')


btn.addEventListener('click',()=>{
    let searchText=input.value;
    let data=fetchData(searchText)
    input.value='';
})

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then((response)=>{
        console.log(response.data)
        manipulateDom(response.data)
    })
}

function manipulateDom(datas){ 
    while(list.firstChild){
        list.firstChild.remove()
    }
    for(let data of datas){
        let figure=document.createElement('figure')
        if(data.show.image){
            figure.innerHTML=`<img src='${data.show.image.original}'/>
            <h2>${data.show.name}</h2>`
            list.appendChild(figure)
        }
    }
}










































