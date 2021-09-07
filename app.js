
        function $(name){
            return document.querySelector(name)
        }
        const searchField = $('#search')
        const btn = $('#btn')
        btn.addEventListener('click', () => {
            fetch(`https://api.github.com/users/${searchField.value}`)
            .then(res => res.json())
            .then(data => showData(data))
        })
        const showData = (data) => {
            console.log(data.avatar_url)
            const container = $('#container');
            const div = document.createElement('div')
            div.classList.add('box')
            div.innerHTML = `
            <div class="img-div"><img src="${data.avatar_url}" alt=""></div>
            <div class="content">
                <h3>${data.name}</h3>    
                
            </div>
            `
            container.appendChild(div)
        }
 