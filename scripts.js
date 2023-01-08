var img = document.querySelector("#img-resposta");
var pergunte = document.querySelector('#pergunte');
var btn = document.querySelector('#btn-enviar');
var resp_sim = document.querySelector('#resposta-sim');
var resp_nao = document.querySelector('#resposta-nao');

pergunte.addEventListener('input',function(event){
    if (!event.target.value){
        btn.disabled = true
    }else {
        btn.disabled = false
    }
})

function perguntando() {
    const random = Math.floor(Math.random() * 2);
    
    if(random == 0){
        img.setAttribute('src','./img/gabigol-nao.jpg');
        resp_sim.style.display = 'none';
        resp_nao.style.display = 'block';
    } else{
        img.setAttribute('src', './img/gabigol-sim.jpg');
        resp_nao.style.display = 'none';
        resp_sim.style.display = 'block';
    }  
    pergunte.value = ''
    btn.disabled=true
}








