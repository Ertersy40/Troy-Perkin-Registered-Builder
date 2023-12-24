
const posts = [{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat purus, sed laoreet elit. Donec viverra nisi mauris, at ultricies turpis varius at. Suspendisse potenti. Quisque quam magna, laoreet nec tortor vitae, dignissim fermentum urna. Sed lobortis neque at nunc rutrum pulvinar. ',
    name: 'Abbey Jean'
},
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat purus, sed laoreet elit. Donec viverra nisi mauris, at ultricies turpis',
    name: 'Paul McCartney'
},
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat purus, sed laoreet elit. Donec viverra nisi mauris, at ultricies turpis varius at. Suspendisse potenti. Quisque quam magna, laoreet nec tortor vitae, dignissim fermentum urna. Sed lobortis neque at nunc rutrum pulvinar. ',
    name: 'Fred & Nancy Mulligan'
},
{
    text: 'Vivamus lacinia sem sit amet nunc porta, ac convallis lectus malesuada. Praesent convallis bibendum elit, sit amet laoreet quam pulvinar ac. In fermentum vitae nulla suscipit consectetur. Mauris sed turpis a tellus tempus facilisis. Mauris elementum placerat posuere.',
    name: 'Jane Fonda'
},
{
    text: 'Proin dictum tellus non finibus blandit. Maecenas vel ex quam. Sed finibus lectus sit amet ornare tincidunt. Proin non aliquam orci. Aenean vitae commodo lacus, ut vulputate felis. Pellentesque aliquet laoreet gravida.',
    name: 'Lil Yachty'
},
{
    text: 'Donec egestas, felis eget finibus lacinia, odio tortor molestie odio, sit amet tincidunt nunc nulla ac sapien.',
    name: 'William O\'Brien'
},
{
    text: 'Donec egestas, felis eget finibus lacinia, odio tortor molestie odio, sit amet tincidunt nunc nulla ac sapien. Maecenas a scelerisque magna, et semper nulla. Maecenas eget gravida orci, a bibendum neque. Nam quis libero diam. Suspendisse efficitur nisi at velit faucibus suscipit. Aliquam mattis eget quam egestas porta.',
    name: 'John Doe'
},
{
    text: 'Praesent nec odio eget magna maximus vestibulum sed in eros. Nullam vestibulum, arcu non porttitor sagittis, elit dolor hendrerit leo, vel ultricies nulla neque eu dui.',
    name: 'Queen Elisabeth III'
},
{
    text: 'Vivamus lacinia sem sit amet nunc porta, ac convallis lectus malesuada. Praesent convallis bibendum elit, sit amet laoreet quam pulvinar ac. In fermentum vitae nulla suscipit consectetur. Mauris sed turpis a tellus tempus facilisis. Mauris elementum placerat posuere.',
    name: 'Kim K'
},
{
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat purus, sed laoreet elit. Donec viverra nisi mauris, at ultricies turpis varius at. Suspendisse potenti. Quisque quam magna, laoreet nec tortor vitae, dignissim fermentum urna.',
    name: 'Virgin Mary'
},
{
    text: 'Donec egestas, felis eget finibus lacinia, odio tortor molestie odio, sit amet tincidunt nunc nulla ac sapien.',
    name: 'Harry Potter'
},
{
    text: 'Donec egestas, felis eget, sit amet tincidunt nunc nulla ac sapien. ac convallis lectus malesuada. Praesent convallis bibendum elit.',
    name: 'William Tell'
},
]



const container = document.querySelector('.cards');

function generateMasonryGrid(columns, posts){

    container.innerHTML = '';
    
    let columnWrappers = {};

    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = [];
    }

    for(let i = 0; i < posts.length; i++){
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for(let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let div = document.createElement('div');
        div.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('card');
            let text = document.createElement('p');
            text.innerText = post.text;
            let name = document.createElement('h3');
            name.innerText = post.name; 
            
            postDiv.append(text, name)
            div.appendChild(postDiv) 
        });
        container.appendChild(div);
    }
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;
    if(window.innerWidth < 600 && previousScreenSize >= 600){
        generateMasonryGrid(1, posts);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        generateMasonryGrid(2, posts);

    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
        generateMasonryGrid(4, posts)
    }
    previousScreenSize = window.innerWidth;

})

if(previousScreenSize < 600){
    generateMasonryGrid(1, posts)
}else if(previousScreenSize >= 600 && previousScreenSize < 1000){
    generateMasonryGrid(2, posts)
}else{
    generateMasonryGrid(4, posts)
}