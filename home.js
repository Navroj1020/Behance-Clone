document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navBar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
        navBar.style.display=(navBar.style.display=='none' || navBar.style.display=='')? 'block' : 'none';
    });
});

function toggleSuggestions() {
    const suggestions = document.querySelector('.suggestions');
    const search = document.querySelector('.search');
    suggestions.style.display = (suggestions.style.display === 'none' || suggestions.style.display === '') ? 'block' : 'none';
    search.style.border = '1px solid #ccc';
    search.style.borderRadius = '0';
}
document.addEventListener('click', function(event) {
    const suggestions = document.querySelector('.suggestions');
    const search = document.querySelector('.search');
    
    if (!search.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = 'none';
        search.style.border = '0';
        search.style.borderRadius = '40px';
    }
});
// Fetch data from data.json
const Container = document.getElementById('container');
const searchTermInput = document.querySelector('.searchTerm');

function sortingDrop(){
    const sorting = document.querySelector(".sorting").value;

    fetch('data.json',)
        .then(response => response.json())
        .then(data =>{
            const sortedProducts = data.products.filter(product =>
                product.sort.includes(sorting)
            );
            Container.innerHTML = '';

            // Iterate through each filtered product
            sortedProducts.forEach(product => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                const likeButton = document.createElement('p');
                likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                likeButton.classList.add('like-button');
                likeButton.style.width="10%";
                

                // Add a click event listener to the like button
                likeButton.addEventListener('click', function () {
                    // Toggle the color on each click
                    
                    if (likeButton.innerHTML === '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>') {
                        likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                    } else {
                        likeButton.innerHTML = '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>';
                    }
                });
                const projectImage = document.createElement('img');
                projectImage.src = product.image;
                projectImage.addEventListener('click', () => openModal(product.image));
                

                const projectDetails = document.createElement('p');
                projectDetails.textContent = product.details;

                const projectAuthor = document.createElement('span');
                projectAuthor.textContent = `${product.author}`;

                // Append elements to the product card
                // projectCard.appendChild(projectName);
                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectDetails);
                projectCard.appendChild(projectAuthor);
                projectCard.appendChild(likeButton);

                Container.appendChild(projectCard);
            });
            
        });
}

// Function to display all data
function displayAllData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Clear previous search results
            Container.innerHTML = '';

            // Iterate through each product in the data
            data.products.forEach(product => {

                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');

                const likeButton = document.createElement('p');
                likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                likeButton.classList.add('like-button');
                likeButton.style.width="10%";
                

                // Add a click event listener to the like button
                likeButton.addEventListener('click', function () {
                    // Toggle the color on each click
                    
                    if (likeButton.innerHTML === '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>') {
                        likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                    } else {
                        likeButton.innerHTML = '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>';
                    }
                });
                const projectImage = document.createElement('img');
                projectImage.src = product.image;
                projectImage.addEventListener('click', () => openModal(product.image));

                const projectDetails = document.createElement('p');
                projectDetails.textContent = product.details;

                const projectAuthor = document.createElement('span');
                projectAuthor.textContent = `${product.author}`;

                // Append elements to the product card
                // projectCard.appendChild(projectName);
                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectDetails);
                projectCard.appendChild(projectAuthor);
                projectCard.appendChild(likeButton);

                Container.appendChild(projectCard);
               
            });
            
        })
        .catch(error => console.error('Error fetching data:', error));
}

searchTermInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});

// Function to perform search
function search() {
    const searchTerm = searchTermInput.value.toLowerCase();

    // If search term is empty, display all data
    if (searchTerm === '') {
        displayAllData();
        return;
    }
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.details.toLowerCase().includes(searchTerm) ||
                product.author.toLowerCase().includes(searchTerm)
            );

            Container.innerHTML = '';

            // Iterate through each filtered product
            filteredProducts.forEach(product => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('project-card');
                
                const likeButton = document.createElement('p');
                likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                likeButton.classList.add('like-button');
                likeButton.style.width="10%";

                // Add a click event listener to the like button
                likeButton.addEventListener('click', function () {
                    // Toggle the color on each click
                    
                    if (likeButton.innerHTML === '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>') {
                        likeButton.innerHTML = '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z" fill-rule="nonzero"/></svg>';
                    } else {
                        likeButton.innerHTML = '<svg width="64px" height="30px" viewBox="0 -5.37 77.646 77.646" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient id="linear-gradient" x1="1.044" y1="0.005" x2="0.413" y2="0.749" gradientUnits="objectBoundingBox"> <stop offset="0" stop-color="#ff7471"></stop> <stop offset="1" stop-color="#ff5245"></stop> </linearGradient> </defs> <g id="heart_red" data-name="heart red" transform="translate(-263.982 -435.283)"> <g id="Group_25" data-name="Group 25"> <path id="Path_69" data-name="Path 69" d="M302.81,446.03c-.059-.106-.128-.2-.187-.307.059.1.128.2.187.307Z" fill="none"></path> <path id="Path_70" data-name="Path 70" d="M341.628,456.395l-.025-.006c.006-.142.025-.279.025-.431a20.662,20.662,0,0,0-37.039-12.611.171.171,0,0,0-.024-.007,2.169,2.169,0,0,1-3.54-.046l-.035.008a20.657,20.657,0,0,0-37,12.656c0,.147.018.282.018.424l-.029.013s0,.5.1,1.413a20.552,20.552,0,0,0,.6,3.364c1.608,6.945,6.938,20.286,24.659,32.122,10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043c.7-.162,3.265-2.071,13.359-8.857,16.931-11.313,22.555-24,24.428-31.163a20.743,20.743,0,0,0,.854-4.546C341.623,456.824,341.628,456.395,341.628,456.395ZM302.81,446.03h0c-.059-.1-.128-.2-.187-.307C302.682,445.825,302.751,445.924,302.81,446.03Z" fill="#ff5245"></path> </g> <path id="Path_71" data-name="Path 71" d="M295.337,474.437c-5.407-20.228,1.411-28.894,5-31.889a20.747,20.747,0,0,0-6.426-5.077c-6.5-1.416-15.583.295-21.458,16.921-1,3.4-1.458,11.938-.492,22.426a65.334,65.334,0,0,0,17.38,16.476c10.242,6.879,12.73,8.743,13.383,8.867.031.006.048.033.083.033s.058-.033.094-.043a2.946,2.946,0,0,0,.76-.373C301.6,496.005,298.749,487.182,295.337,474.437Z" fill="url(#linear-gradient)"></path> </g> </g></svg>';
                    }
                });
                const projectImage = document.createElement('img');
                projectImage.src = product.image;
                projectImage.addEventListener('click', () => openModal(product.image));

                const projectDetails = document.createElement('p');
                projectDetails.textContent = product.details;

                const projectAuthor = document.createElement('span');
                projectAuthor.textContent = `${product.author}`;

                
            // projectCard.appendChild(projectName);
                projectCard.appendChild(projectImage);
                projectCard.appendChild(projectDetails);
                projectCard.appendChild(projectAuthor);
                projectCard.appendChild(likeButton);

                Container.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

displayAllData();
const autoResult=document.querySelector(".autocomplete-suggestions");



const searchDetails=async searchText =>{
    const res = await fetch('data.json');
    const detail = await res.json();
    
    //Get match
    let matches=detail.products.filter(product =>{
        const regex = new RegExp(`^${searchText}`, 'gi');
        return product.details.match(regex) || product.author.match(regex);
    });
    if(searchText.length === 0){
        matches=[];
        autoResult.innerHTML='';
    }
    outputHtml(matches);
}

const outputHtml = matches => {
    if (matches.length > 0) {
        const uniqueMatches = getUniqueValues(matches);

        const html = uniqueMatches.map(match => `<p onclick=selectInput(this)>${match.details}</p>
        <p onclick=selectInput(this)>${match.author}</p>`).join('');
        autoResult.innerHTML = html;
    }
}
const getUniqueValues = (array) => {
    const uniqueSet = new Set();
    return array.filter(item => {
        const key = `${item.details}-${item.author}`;
        if (!uniqueSet.has(key)) {
            uniqueSet.add(key);
            return true;
        }
        return false;
    });
}
const selectInput = (list) =>{
    searchTermInput.value = list.innerHTML;
    autoResult.innerHTML=" ";
    search();
}


searchTermInput.addEventListener('input',()=> {
    searchDetails(searchTermInput.value);
    displayClearButton(searchTermInput.value);
});

const sugsearch = document.querySelector(".sugSearch");

searchTermInput.addEventListener('input', () => {
    const searchText = searchTermInput.value;

    if (searchText.trim() !== '') {
        sugsearch.style.display = 'none';
    } else {
        sugsearch.style.display = 'block'; 
    }

});
const displayClearButton = (text) => {
    const clearButton = document.querySelector(".clear-button");

    if (text.length > 0) {
        if (!clearButton) {
            const xMark = document.createElement("span");
            xMark.className = "clear-button";
            xMark.innerHTML = "x";

            // Append the "x" mark to the search bar
            searchTermInput.parentNode.appendChild(xMark);

            // Add a click event listener to clear the search results
            xMark.addEventListener('click', () => {
                searchTermInput.value = "";
                autoResult.innerHTML = "";
                xMark.style.display = "none";
                sugsearch.style.display = 'block';
                displayAllData();
            });
        } else {
            clearButton.style.display = "inline-block";
        }
    } else {
        // If there is no text, hide the "x" mark
        if (clearButton) {
            clearButton.style.display = "none";
        }
    }
};

function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    

    modal.style.display = "block";
    modalImage.src = imageSrc;
    
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
