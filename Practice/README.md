**Angular 20**

Pre: HTML, CSS, JS

Topics:

1. Setup and Installation(Node JS, VS Code, Angular CLI)
    https://nodejs.org/en  -- Install node from here
    https://code.visualstudio.com -  Code editor from here
    npm install -g @angular/cli  -- install angular using this

    CLI: ng new <project_name>  --- create project using this command

    npm install( it will check dependencies in package.json and installs missing dependencies in node_modules)

2. Component
    - Building block of web page
    - app.component.ts => app.ts (naming conventions)
    - ng g c <Component_name> (Command to create component)
    - it contains ts file, css file and HTML for User Interface.
    - Contains selector in decorator, which is useful to run applications.
    Component Decorator
    - We will write all file details here like HTML, CSS

3. Data Binding
    ONE WAY DATA BINDING

    - The main use of typescript is bind the variables to specific type not loosely coupled.
        productPrice:number = 12500;
    - Interplolation 
        {{property_in_tsfile}}

    - Property Binding
        we can dynamically assign value to any tag i.e Dynamic value, Dynamic Class
            <p [className]="myClassName">This is some text for class binding</p>
            <input [type]="inputType" [maxLength]="maxLenght">
            <input type="text" value={{courseName}}>
    
    - Event Binding
        Triggering action on click of button or onchange of input value etc..
            <button (click)="showWelcome()">Get Alert</button>
            <button (click)="changeCourseName()">Change Course Name</button>
            <select (change)="onCityChange()">
                <option>Pune</option>
                <option value="">Nagpur</option>
                <option value="">Mumbai</option>
            </select>
    TWO WAY DATA BINDING
    - Using NgModel (import Forms Module in ts file)
    - Data will be in Sync in both ts file and HTML file
            <input type="text" [(ngModel)]="courseName">

4. Signals
    - currently zone.js is responsible for change detection
    - Without zone.js performance increases, so signal makes application donot use zone.js.
    - Similar as Rxjs
    - Normal Signal
        - we can use set/update method to update value and it can be trtaed as function.
            courseName = signal<string>("Angular");
            courseDuration = signal("15 Videos");
            <span>{{courseName()}}</span>
    - Computed Signal
        - this type of signal depends on remaining signals
        - There is no set or update method in computed signal.
            courseDetails = computed(()=> this.courseName() + this.courseDuration());

5. Control Flow Statement @if, @else, @else if ,@for
    -  @if (isParaVisible) {
            <p> Here is paragraph visible true.</p>
            } @else {
            <p>Here is paragraph visible is false</p>
            }
    - <select name="" id="">
                @for (item of cityList; track $index) {
                    <option value="item">{{item}}</option>
                }
            </select>


6. Routing
    - In the current version for routes we are getting separate file app.route.ts.
    - That will be provided in providers of app.config.ts.
    - In routes array present in  app.route.ts each is an object.

7. NGRX Store
    - If there is repetive data we store that data in local storage or session or cookies or service file.
    - Disadvantage - External exposure (without NGRX)
    - We can also manage state using Subject, behaviour subject, Replay Subject.
    - Store - Application state
    - Action - Various operations we can perform on data stored in state - like add, remove... etc
    - Reducer - Where we initialize our state with defaut value plus we have to create reducer with all actions. 

    - COMPONENT -> Action -> Reducer -> Store -(Selector)- Component(Flow cycle)
        - STEP - 1 - install ng add @ngrx/store
        - STEP - 2 - create a folder under app naming store.
        - STEP - 3 - Create Action name counter.action.ts
        - STEP - 4 - Create reducer dounter.reducer.ts(where it contains the inital state and the set of function and what to be done when called.)
        - STEP - 5 - Create Selector to be called when dealignwith store.

8. Directives
    - *ngIf and *ngFor (Structural Directive) we are not using in Angular 20 as it is deprecated as ng modules are deprecated.
    - routerLink is also a directive, along with <router-outlet></router-outlet>
    - Attribute Directive
        - ngClass => add dynamic class
        - ngStyle => add dynamic css
        - ngModel => two way binding
        <div class="p-3" [ngClass]="div1className()"></div>  
        
        <div class="p-3" [ngStyle]="{'background-color':isDiv2Green ? 'blue':'red'}"> Div 2</div>

9. Lifecycle Events

    - Order of execution
        - constructor -> oninit -> content init -> content checked -> view init -> view checked
        - when component is getting destroyed ngondestroy will be triggered.
        - Mostly we use AfterviewInit, NgOnInit, destroy
    - Pipes
        - These are used to transform the data.
        - We can use lowercase uppercase slice
        - {{firstName | uppercase}}

        - {{firstName | lowercase}}

        - {{rollNoList | slice:0:3}}

        - {{studentObj | json}}
        - {{currentDate | date :'dd-MMM-yy'}}
        - {{currentDate | date :'dd-MMM-yyyy'}}
        - {{currentDate | date :'dd-MM-yy'}}








