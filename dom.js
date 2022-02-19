
document.getElementById('add-border').addEventListener('click', function () {
    // console.log("click");
    document.getElementById('friend-container').style.border = "thick solid yellow";
});

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "red";
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    // // create element 
    // let h3 = document.createElement('h3');
    // h3.innerText = "Friend-5";
    // let p = document.createElement('p');
    // p.innerText = "this is friend -5";
    // // where to 
    // let setValue = document.getElementById('friend-container');
    // setValue.appendChild(h3)
    // setValue.appendChild(p);

    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h3 class="friend-name">New Friend-5</h3>
                            <p>Understanding, website.</p>
    `;
    container.appendChild(friendDiv);
});