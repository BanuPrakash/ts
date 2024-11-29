import { Memo } from "./decorators/Memo";

export default class Lib {
    @Memo  
    fibanocci(no: number) : number {
        return (no == 0) || (no == 1)? 1: this.fibanocci(no - 1) + this.fibanocci(no -2);
    }
}
