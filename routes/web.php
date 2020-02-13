<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// untuk menampilkan view welcome
Route::get('/', function () {
    return view('welcome');
});
// untuk menampilkan string hallo tanpa view
Route::get('hallo', function () {
    return "Hallo, Anda sedang mengikuti ebook panduan Laravel Fundamental";
});
// untuk menampilkan view dari controller coba
Route::get('profil', 'CobaController@profil');
// untuk menampilkan view dari controller biodata
Route::get('biodata', 'BiodataController@index');

