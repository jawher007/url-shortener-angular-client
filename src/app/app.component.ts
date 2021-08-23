import { Component, OnInit } from "@angular/core";
import { UrlService } from "./services/url.service";
import { Url } from "./model/url";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  groubedByTeam = [];
  objectKeys = Object.values;
  shortenUrl: string;
  urlLink = "direction";
  url = {} as Url;
  table = [];
  tableobj = {};
  outJSON = [
    { team: "TeamA", manager: "Ahmed", field3: "val3" },
    { team: "TeamB", manager: "jawher", field3: "val43" },
    { team: "TeamA", manager: "omar", field3: "val55" },
    { team: "TeamA", manager: "omar", field3: "val55" },
    { team: "TeamB", manager: "jawher", field3: "val43" },
  ];
  constructor(private urlService: UrlService) {}

  ngOnInit() {
    this.urlService.fetchApi().subscribe((res) => (this.table = res));
    //  this.api();
    this.fetchapi();

    // GroupBy by Key
    var groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };
    this.groubedByTeam = groupBy(this.outJSON, "manager");
    console.log(this.groubedByTeam);
  }

  add(): void {
    this.url = {
      url: this.urlLink,
    };
    this.urlService.save(this.url).subscribe((res) => {
      console.log((this.shortenUrl = window.location.href + "done/" + res.id));
      console.log(res);
    });
  }

  api() {
    this.urlService.newsApi().subscribe((res) => {
      console.log(res.articles);
    });
  }

  fetchapi() {
    var startDate = new Date("2015-08-04");
    var endDate = new Date("2022-08-12");
    console.log(endDate);
    this.urlService
      .fetchApi()
      .pipe(
        map((data) =>
          data.filter(
            (res) =>
              res.nbrphoto > 30 &&
              res.email === "jawher@gmail.com" &&
              new Date(res.CreatedAt) >= startDate &&
              new Date(res.CreatedAt) <= endDate
          )
        )
      )
      .subscribe((res) => {
        // this.table.forEach(function (a) {
        //   a.CreatedAt = new Date();
        // });
        console.log("*************** res ************");
        console.log(res);
      });
  }

  showResponse() {
    console.log("*********");
    console.log(this.table);
    console.log("*********");
  }
}
