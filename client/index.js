/**
 * Front-end UI Goal:
 * > create a user abd unout their username and data
 * > 4 input fields - one for each values
 * > stretch feature - do something dynamic
 * 
 */


document.addEventListener('DOMContentLoaded',()=>{

    // use option-shift-down shortcut to copy the code

    // this should trigger when html doc hooks in our js and full document loads
    const App = document.querySelector('#App'); //query selector synatax
    
    const title = document.createElement('h2'); // this is an html paragraph element, that we are use to label the input box
    title.innerHTML = 'Put your username here'
    const username = document.createElement('input')
    username.setAttribute('id','username_input')
    // username.setAttribute('this is the id thing in html','this can be anything')
    App.appendChild(title);
    App.appendChild(username);



    const title2 = document.createElement('h2'); 
    title2.innerHTML = 'Put your passsword here'
    const password = document.createElement('input')
    password.setAttribute('id','password_input')
    App.appendChild(title2);
    App.appendChild(password);
    

    const title3 = document.createElement('h3'); 
    title3.innerHTML = 'Ice Cream Prefence?'
    const icecream = document.createElement('input')
    icecream.setAttribute('id','icecream_input')
    App.appendChild(title3);
    App.appendChild(icecream);
    

    const title4 = document.createElement('h1'); 
    title4.innerHTML = 'Algo Prefence?'
    const algo = document.createElement('input')
    algo.setAttribute('id','algo_input')
    App.appendChild(title4);
    App.appendChild(algo);


    //create a space
    const spacer = document.createElement('hr')
    App.appendChild(spacer)


    const submit = document.createElement('button'); 
    submit.innerHTML = 'Send to backend!'
    submit.setAttribute('id', 'submit_data')
    App.appendChild(submit);
    
    const result = document.createElement('p');
    App.appendChild(result);


    const search_btn = document.createElement('button')
    search_btn.innerText = "search user"
    const search_result = document.createElement('p')
    const title5 = document.createElement('h2'); 
    title5.innerHTML = 'Search for a user to learn their fav Algo'
    const search = document.createElement('input')
    search.setAttribute('id','search_input')
    App.appendChild(title5);
    App.appendChild(search_btn)
    App.appendChild(search);
    App.appendChild(search_result)
    


// add event listerner to for the button
submit.addEventListener('click', async (e) => {
        // when submitting form, defult action(going to another page) is the event, but we want to prevent default action
        e.preventDefault(); // to prevent default action
        await axios.post('http://localhost:3000/user/new', {
                username: username.value,
                password: password.value,
                favorite_icecream: icecream.value,
                favorite_algo: algo.value
        })
        .then((res) => {
            console.log(res);
            //what do we want to do with the response
            result.innerHTML = res.data.username;
        })
        .catch(error => {console.log(error)})
    });
    
// add event listerner to for the button
 search_btn.addEventListener('click', async (e) => {
        e.preventDefault();
        let target = "http://localhost:3000/user/" + search.value;
        await axios.get(target)
        .then (res => {
            console.log(res);
            search_result.innerHTML = "answer" + search.value + res.data.favorite_algo;
        })
        .catch((error) => {console.log(error)})
    })
});


