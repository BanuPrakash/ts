function Temp<T extends new (...args:any[]) => {}>(target: T) {
    target.prototype.data = "100";
}

@Temp
class Sample {

}

