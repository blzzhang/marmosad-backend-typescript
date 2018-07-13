import express = require('express');
import * as httpClass from 'http';
import BoardHandler from './src/boardHandler';
//@ts-ignore

export class App {


    public boardHandler: BoardHandler
    public app = express();

    public http = new httpClass.Server(this.app);

    constructor(){

        this.boardHandler = new BoardHandler(this);
        console.log(this.boardHandler);

    }

}

const appInstance = new App();
export default appInstance;

appInstance.http.listen(8081, function () {
    console.log('listening on *: 8081');
});

const path = require('path'); //was const

appInstance.app.use(express.static(path.join(__dirname, 'dist')));

appInstance.app.use(function(res, req, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // DEV only
    next();
});

appInstance.app.get('/', function (req, res) {
    console.log('serving files');
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

appInstance.app.get('/boards', function (req, res) {
    console.log(appInstance.boardHandler.getBoardsInfo());
    res.send(JSON.stringify(appInstance.boardHandler.getBoardsInfo()));
});