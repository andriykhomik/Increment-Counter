const counters =document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = counter.getAttribute('data-target');
    let i = Math.ceil(Number(target)/ 200);
    let result = 0;

    const increment = setInterval(()=>{
        result = result + i;

        if (result <= Number(target)) {
            incrementation(result)
        }else {
            incrementation(target)
            clearInterval(increment)
        }
    }, 1)

    function incrementation(result){
        counter.innerText = result;
    }
})


