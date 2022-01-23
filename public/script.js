// // // // // // // var year = 2016;
// // // // // // // var month = 13;
// // // // // // // var dayCount;
// // // // // // // switch (month) {
// // // // // // //   case 1:
// // // // // // //   case 3:
// // // // // // //   case 5:
// // // // // // //   case 7:
// // // // // // //   case 8:
// // // // // // //   case 10:
// // // // // // //   case 12:
// // // // // // //     dayCount = 31;
// // // // // // //     break;
// // // // // // //   case 4:
// // // // // // //   case 6:
// // // // // // //   case 9:
// // // // // // //   case 11:
// // // // // // //     dayCount = 30;
// // // // // // //     break;
// // // // // // //   case 2:
// // // // // // //     if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
// // // // // // //       dayCount = 29;
// // // // // // //     } else {
// // // // // // //       dayCount = 28;
// // // // // // //     }
// // // // // // //     break;
// // // // // // //   default:
// // // // // // //     dayCount = -1; // invalid month
// // // // // // // }

// // // // // // // console.log(dayCount); // 29

// // // // // // // let activities = [
// // // // // // //     ['Work', 9],
// // // // // // //     ['Eat', 1],
// // // // // // //     ['Commute', 2],
// // // // // // //     ['Play Game', 1],
// // // // // // //     ['Sleep', 7]
// // // // // // // ];

// // // // // // // activities.forEach(activity => {
// // // // // // //     let percentage = ((activity[1] / 24) * 100).toFixed();
// // // // // // //     activity[2] = percentage + '%';
// // // // // // // });

// // // // // // // activities.forEach((activity) => {
// // // // // // //     activity.pop(1);
// // // // // // // });

// // // // // // // console.table(activities);
// // // // // // function reverse(str) {
// // // // // //     let stack = [];
// // // // // //     // push letter into stack
// // // // // //     for (let i = 0; i < str.length; i++) {
// // // // // //         stack.push(str[i]);
// // // // // //     }
// // // // // //     // pop letter from the stack
// // // // // //     let reverseStr = '';
// // // // // //     while (stack.length > 0) {
// // // // // //         reverseStr += stack.pop();
// // // // // //     }
// // // // // //     return reverseStr;
// // // // // // }
// // // // // // console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ

// // // // // // function getCounter() {
// // // // // //     'use strict'
// // // // // //     let counter = 10;
// // // // // //     return counter;
// // // // // // }

// // // // // // console.log(getCounter());
// // // // // // function susunNama(strings, ...values) {
// // // // // //     let hasil = '';
// // // // // //     // for (let i = 0; i < values.length; i++) {
// // // // // //     //     hasil += `${strings[i]}${values[i]}`;
// // // // // //     // }
// // // // // //     return strings;
// // // // // // }

// // // // // // let nama = `Vigo`;
// // // // // //   let  kelas = `XI RPL 2`;
// // // // // //     let matakuliah = `Pemrograman Web`;
// // // // // // let str = susunNama`Halo,nama saya ${nama} saya kelas ${kelas} matakuliah saya adalah ${matakuliah}`;

// // // // // // console.log(str);


// // // // // let tambahNama = (nama, kelas) => {
// // // // //     let hasil = `${nama} ${kelas}`;
// // // // //     return hasil;
// // // // // }
// // // // // console.log(tambahNama('Vigo', 'XI RPL 2'));

// // // // // function test () {
// // // // //     return console.log(this);
// // // // // }
// // // // // test();
// // // // // function concat(separator) {
// // // // //     let args = Array.prototype.slice.call(arguments, 1);
// // // // //     return args.join(separator);
// // // // // }
// // // // // concat();

// // // // // let buah = ['apel', 'jeruk', 'nanas'];
// // // // // let jumlah = '';
// // // // // for (let [index,fruit] of buah.entries()) {
// // // // //     let jumlah =`Buah ${index} adalah buah no ${fruit}`;
// // // // //     console.log(jumlah);
// // // // // }
// // // // // let scores = ["Vigo", "Rifqi", "Rizki", "Rizky"];
// // // // // scores.message = 'Hi';

// // // // // console.log("for...in:");
// // // // // for (let score in scores) {
// // // // //   console.log(score);
// // // // // }

// // // // // console.log('for...of:');
// // // // // for (let score of scores) {
// // // // //   console.log(score);
// // // // // }
// // // // //   let isSuccess = true;
// // // // // //PROMISE
// // // // // let janji = new Promise((resolve, reject) => {

// // // // //   if (isSuccess) {
// // // // //     setTimeout(() => {
// // // // //       resolve('Success!');
// // // // //     }, 5000);
// // // // //   } else {
// // // // //     setTimeout(() => {
// // // // //       reject('Failure!');
// // // // //     }, 5000);
// // // // //   }
// // // // // });

// // // // // console.log('start');
// // // // // // janji
// // // // // // .then(result => console.log(result))
// // // // // // .catch(result => console.log(result ));
// // // // // // console.log(janji
// // // // // //   .then(result => console.log(result))
// // // // // // );
// // // // // console.log(janji);
// // // // // janji
// // // // // .then(result => console.log(result));
// // // // // console.log('end');

// // // // // let sukses = true;
// // // // // let janji = new Promise((resolve, reject) => {
// // // // //   if (sukses) {
// // // // //     setTimeout(() => {
// // // // //       resolve(100);
// // // // //     }, 2000);
// // // // //   } else {
// // // // //     setTimeout(() => {
// // // // //       reject('Gagal!');
// // // // //     }, 1000);
// // // // //   }
// // // // // });

// // // // // janji
// // // // //   .then(result => {
// // // // //     console.log(result);
// // // // //     return result / 2;
// // // // //   })
// // // // //   janji.then(result => {
// // // // //     console.log(result);
// // // // //     return result * 3;
// // // // //   })
// // // // //   janji.then(result => {
// // // // //     console.log(result);
// // // // //   })

// // // // // function generateNumber(num) {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         setTimeout(() => {
// // // // //             resolve(num);
// // // // //         }, 3 * 1000);
// // // // //     });
// // // // // }

// // // // // generateNumber(10)
// // // // //     .then(result => {
// // // // //         console.log(result);
// // // // //         return generateNumber(result * 2);
// // // // //     })
// // // // //     .then((result) => {
// // // // //         console.log(result);
// // // // //         return generateNumber(result * 3);
// // // // //     })
// // // // //     .then(result => console.log(result));

// // // // // function getUser(userId) {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         console.log('Get the user from the database.');
// // // // //         setTimeout(() => {
// // // // //             resolve({
// // // // //                 userId: userId,
// // // // //                 username: 'admin'
// // // // //             });
// // // // //         }, 1000);
// // // // //     })
// // // // // }

// // // // // function getServices(user) {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         console.log(`Get the services of ${user.username} from the API.`);
// // // // //         setTimeout(() => {
// // // // //             resolve(['Email', 'VPN', 'CDN']);
// // // // //         }, 3 * 1000);
// // // // //     });
// // // // // }

// // // // // function getServiceCost(services) {
// // // // //     return new Promise((resolve, reject) => {
// // // // //         console.log(`Calculate the service cost of ${services}.`);
// // // // //         setTimeout(() => {
// // // // //             resolve(services.length * 100);
// // // // //         }, 2 * 1000);
// // // // //     });
// // // // // }

// // // // // Promise.all([getUser(1), getServices(1), getServiceCost('Email, VPN, CDN')])
// // // // //   .then(result => {
// // // // //       console.log(result);
// // // // //   });

// // // // // let harga = 30000;
// // // // // console.log(harga.length);
// // // // // let numbers = [30000, 15000, 10000];
// // // // // numbers.reduce((total, harga) => {
// // // // //   return total+harga;
// // // // // }, 0);
// // // // // console.log(numbers.reduce((total, harga) => {
// // // // //   return total + harga;
// // // // // }, 0));

// // // // const p1 = new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //         console.log('The first promise has resolved');
// // // //         resolve(10);
// // // //     }, 1 * 1000);

// // // // });

// // // // const p2 = new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //         console.log('The second promise has rejected');
// // // //         reject(20);
// // // //     }, 2 * 1000);
// // // // });


// // // // Promise.race([p1, p2])
// // // //     .then(value => console.log(`Resolved: ${value}`))
// // // //     .catch(reason => console.log(`Rejected: ${reason}`));

// // // // after 0.5 seconds, if the getData() has not resolved, then show
// // // // the Loading indicator
// // // // const TIMEOUT = 4000;
// // // // const DATA_LOAD_TIME = 5000;

// // // // function getData() {
// // // //     return new Promise((resolve, reject) => {
// // // //         setTimeout(() => {
// // // //             const message = 'Promise.race() Demo';
// // // //             resolve(message);
// // // //         }, DATA_LOAD_TIME);
// // // //     });
// // // // }

// // // // function showContent(message) {
// // // //     document.querySelector('#message').textContent = message;
// // // // }

// // // // function timeout() {
// // // //     return new Promise((resolve, reject) => {
// // // //         setTimeout(() => reject(), TIMEOUT);
// // // //     });
// // // // }

// // // // function showLoadingIndicator() {
// // // //     document.querySelector('#loader').className = 'loader';
// // // // }

// // // // function hideLoadingIndicator() {
// // // //     document.querySelector('#loader').className = 'halo';
// // // // }


// // // // // handle button click event
// // // // const btn = document.querySelector('#btnGet');

// // // // btn.addEventListener('click', () => {
// // // //     // reset UI if users click the second time
// // // //     reset();

// // // //     // show content or loading indicator
// // // //     Promise.race([getData()
// // // //             .then(showContent)
// // // //             .then(hideLoadingIndicator), timeout()
// // // //         ])
// // // //         .catch(showLoadingIndicator);
// // // // });

// // // // // reset UI
// // // // function reset() {
// // // //     hideLoadingIndicator();
// // // //     showContent('WOYYYYY');
// // // // }

// // // function generateString(str) {
// // //     return new Promise((resolve, reject) => {
// // //         if (str == true) {
// // //             setTimeout(() => {
// // //                 resolve('Uang anda adalah');
// // //             }, 2000);
// // //         } else {
// // //             setTimeout(() => {
// // //                 reject('Gagal!');
// // //             }, 1000);
// // //         }
// // //     })
// // // }
// // // function generateNumber(cost) {
// // //     return new Promise((resolve, reject) => {
// // //         setTimeout(() => {
// // //             resolve(cost * 100);
// // //         }, 1000);
// // //     })
// // // }

// // // Promise.race([generateString(true), generateNumber(10)])
// // //     .finally(() => {
// // //         console.log('berhasil');
// // //     })
// // //     .then((result) => {
// // //         console.log(result);
// // //     }
// // //     )

// // function getUserById(id) {
// //     if (typeof id !== 'number' || id <= 0) {
// //         throw new Error('Invalid id argument');
// //     }

// //     return new Promise((resolve, reject) => {
// //         resolve({
// //             id: id,
// //             username: 'admin'
// //         });
// //     });
// // }
// // // getUserById('a')
// // //     .then(user => console.log(user.username))
// // //     .catch(err => console.log(err));

// // try {
// //     getUserById('a')
// //         .then(user => console.log(user.username))
// //         .catch(err => console.log(`Caught by .catch ${error} this error in promise`));
// // } catch (error) {
// //     console.log(`Caught by try/catch ${error}. this error outside promise`);
// // }

// function getItems() {
//     return null;
// }

// // let [a, b] = getItems() || [];

// // console.log(a); // 10
// // console.log(b); // 20

// // let a = 10,
// //     b = 20;
// // [a, b] = [b, a];
// // console.log(b)

// // let scores = [80, 70, 90];
// // let copiedScores = [...scores];
// // console.log(copiedScores); // [80, 70, 90]

// let element = document.getElementById('nama');
// let nama = element.textContent;
// let kata = [...nama];
// let huruf = kata.map(item => {
//     return `<span>${item}</span>`;
// });
// element.innerHTML = huruf;

// let number = 2;
// let numstring = '2';
// let str = typeof numstring;
// console.log(str);
// let kalimat = 'umurku adalah 14 tahun';
// let array = [...kalimat];
// let sudah = array
//     // .filter((item) => {
//     //     return item !== ' ';
//     // })
//     .map(item => {
//         if (item != '') {
//             return item + ' ';
//         }
//         else {
//             return item;
//         }
//     })
//     .reduce((total, item) => {
//         return total + item;
//     })
// console.log(sudah);



// var ul = document.getElementById('pagination');
// var li = ul.querySelectorAll('li');
// console.log(li);
// ul.onclick = function (e) {
//     // e.target.siblings().removeClass('active');

//     //grand parent
//     let grandParent = e.target.parentElement.parentElement;
//     //parent
//     let parent = e.target.parentElement;
//     //remove active from all siblings
//     for (let i = 0; i < grandParent.children.length; i++) {
//         if (grandParent.children[i].classList.contains('active')) {
//             grandParent.children[i].classList.remove('active');
//         }
//     }
//     //     parent.classList.add('active');
//     parent.classList.add('active');

//     console.log(grandParent);
// }
// // document.onload = function () {
// //     var li = ul.querySelector('#1');
// //     li.className = 'active';
// //     console.log(li);
// // }

let ul = document.getElementById('navtop');
let li = ul.querySelectorAll('li');
ul.addEventListener('click', function (e) {
    let elementActive = document.querySelector('.active');
    elementActive.classList.remove('active');
    e.target.classList.add('active');
})


li.forEach(element => {

    element.addEventListener('mouseenter', function (e) {
        // console.log(e.target.children[0].classList.contains('active'));
        if (!e.target.querySelector('.active')) {
            // console.log('bersisi active');
            const div = document.createElement('div');
            div.className = 'nav-border';
            e.target.appendChild(div);
        }
        // e.target.classList.add('hover');
    });

    element.addEventListener('mouseleave', function (e) {
        if (e.target.querySelector('.nav-border')) {
            e.target.querySelector('.nav-border').remove();
        }
        // console.log('hai');
        // e.target.classList.remove('hover');
    })
});

let card = document.querySelectorAll('.card');
card.forEach(element => {
    element.addEventListener('mouseenter', function (e) {
        // e.target.classList.add('active');
        element.style.transform = 'scale(1.1)';
        element.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        let cardText = element.querySelector('.card-text');
        let cardFooter = element.querySelector('.card-footer');
        // cardFooter.children[0].removeAttribute('class');
        cardFooter.style.backgroundColor
            = '#323254';
        cardFooter.style.color
            = 'white';
        cardText.style.backgroundColor
            = 'white';
        cardText.style.color
            = '#323254';
    });

    element.addEventListener('mouseleave', function (e) {
        // card.style.removeProperty('transform');
        element.removeAttribute('style');
        element.querySelector('.card-footer').removeAttribute('style');
        element.querySelector('.card-text').removeAttribute('style');
    });

});






