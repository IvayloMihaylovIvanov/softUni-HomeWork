function validate() {
    let input = document.getElementById('email');


    input.addEventListener('change', onChange);

    function onChange(e) {
        const { target }  = e;
        let patternEmail = /^[a-z]+@[a-z]+\.[a-z]+$/;

       const operation = patternEmail.test(target.value) ? 'remove' : 'add';
        target.classList[operation]('error');
    }
}