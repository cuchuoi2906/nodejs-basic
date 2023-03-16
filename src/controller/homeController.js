import pool from '../configs/connectDB';
import mysql from 'mysql2/promise';
let getHomePage = async (rep, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('home/index.ejs', { dataUser: rows });
}
let getDetailPage = async (rep, res) => {
    console.log(rep.params.userId);
    const [rows, fields] = await pool.execute('SELECT * FROM `users` WHERE use_id = ?', [rep.params.userId]);
    return res.render('home/detail.ejs', { dataUser: rows[0] });
}

module.exports = {
    getHomePage, getDetailPage
}