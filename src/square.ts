export default class Square {
    private width:number;
    private height:number;

    constructor(_width:number, _height:number) {
        this.width= _width;
        this.height=_height;
    }
    get area(){
        return this.width * this.height;
    }
}