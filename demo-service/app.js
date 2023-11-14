const express = require('express')
const multer = require('multer'); // 用于处理文件上传的中间件

const app = express();
const upload = multer({ dest: 'uploads/' }); // 指定文件上传的目录

// 设置静态文件服务
app.use('/static/', express.static('./uploads/'))

// 使用 `upload.single` 中间件处理单个文件上传
app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.file);
    // req.file 包含上传的文件信息
    if (req.file) {
        res.send('文件上传成功');
    } else {
        res.status(400).send('没有选择文件');
    }
});
// 开启监听服务

app.listen('3001', () => {
    console.log('express serve running at http://localhost:3001');
})