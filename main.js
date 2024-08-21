const form = document.getElementById('form-numero');
const opA = document.getElementById('op-a');
const opB = document.getElementById ('op-b');
const mensagem = document.getElementById('mensagem-final');



opA.addEventListener('keyup', function(e){
    opB.addEventListener('keyup', function(b){
        if ((e.target.value)>(b.target.value)){
            opA.classList.add('error');
        }
    })
    opA.classList.remove('error');
})

form.addEventListener('submit', function(e){
    e.preventDefault();

    if ((opB.value)>(opA.value)){
        mensagem.style.color='';
        mensagem.innerHTML = `Arrasou! O número ${opB.value} é maior que ${opA.value}.`;
        opA.value = '';
        opB.value = '';
    }
    else{
        mensagem.style.color='rgb(48, 245, 196)';
        mensagem.innerHTML = `O número A precisa ser menor que o B.`;
        opA.value = '';
        opB.value = '';
    }
})
