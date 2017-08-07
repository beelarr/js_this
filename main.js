var world = "210"

function sky() {
    console.log('skyin')
    ocean()
}

function ocean() {
    console.log('ocean')
    land()
}

function land() {
    console.log('land')
    let world = '333'
    console.log(this)
    console.log(this.world)

}

sky()


let chickenObj = {
    eggs: 6,
    sound: 'cluck',
    makeSound: function makeSound() {
        console.log(this.sound)
        // console.log(sound)
    }
}

chickenObj.makeSound()


let obj2 = {
    a: 42,
    foo: foo
}

let obj1 = {
    a: 2,
    obj2: obj2
}

function foo() {
    console.log(this.a)
}

obj1.obj2.foo()

// obj1.foo()


let weatherObj = {
    temp: 72,
    storm: storm
}

function storm() {
    console.log('Storm', this.temp)

}

var temp = 'global warming'

weatherObj.storm()

storm()

var obj = {
    a: 2,
    foo5: foo5
}

function foo5() {
    console.log(this.a)
}

function doFoo(objFunction) {
    objFunction();
}

var a = 'oops global'

obj.foo5()

doFoo(foo5)


let element = document.querySelectorAll('div')

for (let i = 0; i < element.length; i++){
    element[i].onmouseover = over;
    element[i].onmouseout = out;
}

function over() {
    this.style.backgroundColor = '#cc0000'

}

function out() {
    this.style.backgroundColor = '#ffffff'
}