const bulbSwitch = document.querySelector('#bulbSwitch')
const bulb = document.querySelector('#bulb')

bulbSwitch.addEventListener('click', function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src = 'bulbb-on.jpg';
        bulbSwitch.innerHTML= 'Turn off'
    }else{
        bulb.src = 'bulbb-off.jpg';
        bulbSwitch.innerHTML= 'Turn on'
    }
});