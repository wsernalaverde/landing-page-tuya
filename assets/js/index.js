document.addEventListener('DOMContentLoaded', () =>{ 
    const form = document.querySelector('.form-solicitar')
    const contMessage = form.querySelector('.message-res')
    const button = document.getElementById('sendData')

    fetch('https://form-ldtuya.herokuapp.com/')
        .then(response => response.text())
        .then(data => console.log(data));

    form.addEventListener('submit', (event) =>{
        event.preventDefault()
        let tdocument = document.getElementById('dt-type-document').value
        let ndocument = document.getElementById('dt-number-document').value
        let phone = document.getElementById('dt-phone').value
        button.setAttribute('disabled', '')
        const url = `https://form-ldtuya.herokuapp.com/sendData`

        fetch(url, {  
            method: 'post',  
            headers: {  
                "Content-type": "application/json"  
            },  
            body: JSON.stringify({
                    type: tdocument,
                    ndocument,
                    phone
            })
        })
        .then(function (data) {  
                console.log('Request succeeded with JSON response', data)
                form.reset()
                toggleMessage('Tus datos fueron guardados con éxito')
        })  
        .catch(function (error) {  
                console.log('Request failed', error)
                toggleMessage('Hubo un error al enviar el mensaje, por favor intenta más tarde')
        })
    })

    function toggleMessage(message){
        contMessage.innerHTML= message;
        contMessage.classList.remove('hide')
        setTimeout(()=>{ 
            contMessage.classList.add('hide')
            button.removeAttribute('disabled', '')
        }, 3000)
    }

    (function () {
        const second = 1000,
                    minute = second * 60,
                    hour = minute * 60,
                    day = hour * 24;

        let toDate = "May 30, 2021 11:00:00",
        countDown = new Date(toDate).getTime(),
        x = setInterval(function() { 
            let now = new Date().getTime()
            let distance = countDown - now

            document.getElementById("days").innerHTML = padLeadingZeros(Math.floor(distance / (day)), 2),
            document.getElementById("hours").innerHTML = padLeadingZeros(Math.floor((distance % (day)) / (hour)), 2),
            document.getElementById("minutes").innerHTML = padLeadingZeros(Math.floor((distance % (hour)) / (minute)), 2),
            document.getElementById("seconds").innerHTML = padLeadingZeros(Math.floor((distance % (minute)) / second), 2);

            //do something later when date is reached
            if (distance < 0) {
                console.log('end clock')
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0)
    }())
    
    function padLeadingZeros(num, size) {
        // var s = num+"";
        let s = `${num}`
        if(s.length < 2) {
            while (s.length < size) s = `0 <span class="divider-number"></span> ${s}`
        } else {
            s = `${s.split('')[0]} <span class="divider-number"></span> ${s.split('')[1]}`
        }
        return s;
    }
})