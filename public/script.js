var ul = document.getElementById('pagination');
var li = ul.querySelectorAll('li');
console.log(li);
ul.onclick = function (e) {
    // e.target.siblings().removeClass('active');
    
    //grand parent
    let grandParent = e.target.parentElement.parentElement;
    //parent
    let parent = e.target.parentElement;
        //remove active from all siblings
    for (let i = 0; i < grandParent.children.length; i++) {
        if (grandParent.children[i].classList.contains('active')) {
            grandParent.children[i].classList.remove('active');
        }
    }
//     parent.classList.add('active');
    parent.classList.add('active');

    console.log(grandParent);
}
// document.onload = function () {
//     var li = ul.querySelector('#1');
//     li.className = 'active';
//     console.log(li);
// }