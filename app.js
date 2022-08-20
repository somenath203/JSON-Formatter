const inputArea = document.querySelector('.large-area--input');
const outputArea = document.querySelector('.large-area--output');
const btnFormatter = document.querySelector('.controls__button__format');
const btnMinify = document.querySelector('.controls__button__minify');


btnFormatter.addEventListener('click', () => {

    try {
        
        if(inputArea.value.trim() === '') {

            return swal('Invalid Input', 'Please enter a valid JSON input', 'error');
    
        }
        
        const formattedJSON = JSON.stringify(JSON.parse(inputArea.value), null, 4);
    
        if(typeof(formattedJSON) !== 'string') {
    
            return alert('invalid json input');
    
        }
    
        outputArea.value = formattedJSON;

    } catch (error) {
        
        outputArea.value = error;

        outputArea.style.color = 'red';

    }

});


btnMinify.addEventListener('click', () => {

    try {
        
        if(inputArea.value.trim() === '') {

            return swal('Invalid Input', 'Please enter a valid JSON input', 'error');
    
        }
    
        const formattedJSON = JSON.stringify(JSON.parse(inputArea.value), 4);
    
        outputArea.value = formattedJSON;

    } catch (error) {
        
        outputArea.value = error;

        outputArea.style.color = 'red';
        
    }

});