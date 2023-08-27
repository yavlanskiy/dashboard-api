function Component(id: number) {
    console.log('init component');
    return (target: Function) => {
        console.log('run component')
        target.prototype.id = id;
    }
}

function Logger() {
    console.log('init logger');
    return (target: Function) => {
        console.log('run logger');
    }
}

function Method(
    target: Object,
    propertyKey: string,
    propertyDescription: PropertyDescriptor
) {
    console.log(propertyKey);
    propertyDescription.value = function (...args: any[]){
        return args[0] * 10;
    }
}

function Prop(target: Object, propertyKey: string){

}

@Logger() // start 2
@Component(1) // start 1
export class User {
    @Prop
    id: number;

    @Method
    updateId(newId: number): number {
        this.id = newId;
        return this.id;
    }
}

console.log(new User().id)
console.log(new User().updateId(2))
