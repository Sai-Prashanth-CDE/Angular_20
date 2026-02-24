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
           courseName = signal<string>("Angular");
           courseDuration = signal("15 Videos");
           <span>{{courseName()}}</span>









