import moviesRender from '../hbs/moviesRenderHBS.hbs';
import onModalClose from './modalOpenClose';
import API from './trendingMovies';
import { cardOpenModal } from './modalOpenClose';
const btnWatched = document.querySelector('[data-modal-watched]')
const axios = require('axios');

const dataDiv = document.querySelector('.movie_data')




async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=3c97a1babd597f31c1fa5b3567357dfb`)
    const data = await response.json();
    // console.log(data.results)
    dataDiv.insertAdjacentHTML('afterbegin', moviesRender(data.results));

    // getClickedElem()
    getButtonWatched()
    getButtonQueued()
    return data;
}




function addArrayToLocalStorage(array) {
    localStorage.setItem('Watched', JSON.stringify(array))
    localStorage.setItem('Queued', JSON.stringify(array))

}
fetchMovies(550)


addArrayToLocalStorage([])
// function addMovieToWatched(e) {
//     e.preventDefault();
//     console.log(e)
//     fetchMovies(550).then(data => {


//         data.results.forEach(elem => {
//             console.log(+e.srcElement.parentElement.attributes.value.value === elem.id);
//             if (+e.srcElement.parentElement.attributes.value.value === elem.id) {
//                 try {
//                     const savedData = localStorage.getItem('Watched')
//                     const parsedData = JSON.parse(savedData)
//                     console.log(parsedData)
//                     parsedData.push(elem)
//                     localStorage.setItem('Watched', JSON.stringify(parsedData))


//                 } catch (error) {
//                     console.log(error)
//                 }

//             }
//         })

//     })


// }
// console.log(cardOpenModal)
function addMovieToWatchedFromModal(data) {
console.log(data)
    return data;
}

function addToWatchedArray(e) {
    e.preventDefault()
     const savedData = localStorage.getItem('Watched')
    const parsedData = JSON.parse(savedData)
   parsedData.push(modalFilm.onModalOpen)
}

// async function defineMovie(e) {
//     e.preventDefault()
//     //  console.log(+e.target.parentElement.id)
//     const data = await API.trendingMovies();
//     const savedData = localStorage.getItem('Watched')
//     const parsedData = JSON.parse(savedData)
//     data.results.forEach(el => {

//         //     parsedData.push(el)
//         for (let el of data.results) {
//             if (parsedData.filter(elem => elem.id === +e.target.parentElement.id).length === 0) {
//                 parsedData.push(el)
//                 localStorage.setItem('Watched', JSON.stringify(parsedData))
//                 break
//             }
//         }

//         // if (parsedData.includes(el.id)) {
//         //     console.log(parsedData.includes(el.id))
//         //     // parsedData.splice(neededEl, 1)
//         //     console.log("Содержит")
//         // }


//         //    if (+e.target.parentElement.id === el.id) {
//         //             // parsedData.splice(neededEl, 1)
//         //        return
//         //       console.log(+e.target.parentElement.id === elem.id)
//         //         } 
//         //    } )
//         //     console.log(elem)
//         //     
//         //     

//         // })





//         // e.target.textContent = 'Remove from "Watched"'
//         // +e.target.parentElement.id !== i.id




//     })

// }

// cardOpenModal.addEventListener("click", defineMovie)


function addToWatchedArray(e) {
    e.preventDefault()
    fetchMovies(550).then(data => {
        console.log(e)
        data.results.forEach(elem => {
            if (+e.srcElement.parentElement.attributes.value.value === elem.id) {
                try {
                    if (e.target.textContent === 'Remove from "Watched"') {
                        removeFromArray('Watched')
                        onModalClose
                        return
                    }
                    const savedData = localStorage.getItem('Watched')
                    const parsedData = JSON.parse(savedData)

                    e.target.textContent = 'Remove from "Watched"'

                    parsedData.push(elem)
                    localStorage.setItem('Watched', JSON.stringify(parsedData))



                } catch (error) {
                    console.log(error)
                }
            }


        })

    })
}

function addToQueuedArray(e) {
    fetchMovies(550).then(data => {
        data.results.forEach(elem => {
            if (+e.srcElement.parentElement.attributes.value.value === elem.id) {
                try {
                    if (e.target.textContent === 'Remove from "Queued"') {
                        removeFromArray('Queued')
                        onModalClose
                        return
                    }

                    const savedData = localStorage.getItem('Queued')
                    const parsedData = JSON.parse(savedData)
                    e.target.textContent = 'Remove from "Queued"'
                    parsedData.push(elem)
                    localStorage.setItem('Queued', JSON.stringify(parsedData))


                } catch (error) {
                    console.log(error)
                }
            }


        })

    })
}

// function removeFromArray(string) {
//     const savedData = localStorage.getItem(string)
//                     const parsedData = JSON.parse(savedData)
//          console.log(parsedData)
//                     parsedData.pop(parsedData)
//                     localStorage.setItem(string, JSON.stringify(parsedData))
// }


function getButtonWatched() {
    const buttonWatched = document.querySelectorAll('[data-button="Watched"]');
    buttonWatched.forEach(elem => elem.addEventListener('click', addToWatchedArray))
}
function getButtonQueued() {
    const buttonQueued = document.querySelectorAll('[data-button="Queued"]');
    buttonQueued.forEach(elem => elem.addEventListener('click', addToQueuedArray))
}



// function getClickedElem() {
//        const movieWrapper = document.querySelectorAll('.movie-wrapper')
//     console.log(movieWrapper)
//     movieWrapper.forEach(elem => elem.addEventListener('click', addMovieToWatched))
// }











