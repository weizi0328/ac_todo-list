const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')

router.get('/', (req, res) => {
  Todo.find()  // 取出 Todo 裡的所有資料，()中可以傳參數
    .lean()    // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: 'asc' })  // desc
    .then(todos => res.render('index', { todos }))  // 將資料傳給index模板
    .catch(error => console.error(error))
})

module.exports = router
