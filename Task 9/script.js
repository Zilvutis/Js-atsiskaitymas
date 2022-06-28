/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict'

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
};

    Movie.prototype.wasExpensive = function () {

        //return true false tipo if`ui tinka tiesiog
        // return this.budget > 100000000
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    };

    let movie = new Movie('Šrekas', 'Andrew Adamson', 500000);
    console.log(movie.wasExpensive());

// labiau es6 parodytų ir arrow funcijų naudojimas