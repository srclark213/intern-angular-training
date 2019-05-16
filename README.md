## Typescript
* start with function calls
* point out compiled JS pretty much matches the typescript
* add a class
* point out class's compiled code is weird/different
* add an interface
* point out interface just doesn't generate any compiled code
* We like interfaces for simple type definitions because they don't add any bloat

## Angular
* Start with blank app
* Explain basic anatomy (modules, components, services) (slide?)
* Create a component
* get our component shown on homepage
* demonstrate basic angular tools:
    * input with button that alerts (input binding, button eventing, template ref vs ngModel)
    * showing data from typescript on component
    * ngFor
    * add/remove from list (combo of inputs, data from components, and ngFor)
    * ngIf
* Configure Routing
* Add Star Wars films component
* Add route
* style component with static data (make types for static data)
* create service (return static data)
* use service
* update service to call api
* rxjs (pipes, mapping, async pipe)
* Bonuses:
    * caching api requests
    * modules
    * directives



## Typescript Example Code
```typescript
function hello(msg: string) {
    return "Hello, " + msg;
}

const test = hello("test");

let result = hello(test);

class TestClass {
    message: string;

    constructor(msg: string) {
        this.message = msg;
    }
}

const instance = new TestClass("something");
instance.message = "something else";

result = hello(instance.message);

interface TestInterface {
    message: string;
}

const instance2: TestInterface = { message: "interface" };
result = hello(instance2.message);
alert(result);
```