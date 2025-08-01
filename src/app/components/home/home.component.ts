import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  exp1: string = "FrontEnd Developer";
  exp2: string = "BackEnd Developer";
  exp3: string = "FullStack Developer";
}
