fetch('https://users/DamornTyde/repos')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error(error));