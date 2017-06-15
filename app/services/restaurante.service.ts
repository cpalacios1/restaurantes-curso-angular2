import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Restaurante} from "../model/restaurante";

@Injectable()
export class RestauranteService{
    constructor(private _http: Http){

    }

    getRestaurantes(){
        return this._http.get("http://localhost:8888/api-rest/restaurantes-api.php/restaurantes").map(res => res.json());
    }

    getRestaurante(id:string, random = null){
        if(random == null){
            return this._http.get("http://localhost:8888/api-rest/restaurantes-api.php/restaurante/"+id).map(res => res.json());
        } else {
            return this._http.get("http://localhost:8888/api-rest/restaurantes-api.php/random-restaurante").map(res => res.json());
        }
    }

    addRestaurante(restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let params = "json="+json;
        let headers = new Headers({"Content-Type":"application/x-www-form-urlencoded"});
        
        return this._http.post("http://localhost:8888/api-rest/restaurantes-api.php/restaurantes", params, {headers: headers})
        .map(res => res.json());
    }

    editRestaurante(id:string, restaurante:Restaurante){
        let json = JSON.stringify(restaurante);
        let params = "json="+json;
        let headers = new Headers({"Content-Type":"application/x-www-form-urlencoded"});
        
        return this._http.post("http://localhost:8888/api-rest/restaurantes-api.php/update-restaurante/"+id, params, {headers: headers})
        .map(res => res.json());
    }

    deleteRestaurante(id:string){
        return this._http.get("http://localhost:8888/api-rest/restaurantes-api.php/delete-restaurante/"+id).map(res => res.json());
    }

    getPDF(carpeta, indicios, encargado) {
      // SETUP
      // Grab required packages
      var webshot = Meteor.npmRequire('webshot');
      var fs      = Npm.require('fs');
      var Future = Npm.require('fibers/future');

      var fut = new Future();

      var fileName = "carpeta-report.pdf";

      // GENERATE HTML STRING
      var css = Assets.getText('style.css');

      SSR.compileTemplate('layout', Assets.getText('layout.html'));

      Template.layout.helpers({
        getDocType: function() {
          return "<!DOCTYPE html>";
        }
      });

      SSR.compileTemplate('carpeta_report', Assets.getText('carpeta-report.html'));

      // PREPARE DATA
      //var carpeta = CarpetaInvestigacion.find({});
      var data = {
        carpeta: carpeta,
        indicios: indicios,
        encargado: encargado
      }

      var html_string = SSR.render('layout', {
        css: css,
        template: "carpeta_report",
        data: data
      });

      // Setup Webshot options
      var options = {
          "paperSize": {
              "format": "Letter",
              "orientation": "portrait",
              "margin": "1cm"
          },
          siteType: 'html'
      };

      // Commence Webshot
      console.log("Commencing webshot...");
      webshot(html_string, fileName, options, function(err) {
          fs.readFile(fileName, function (err, data) {
              if (err) {
                  return console.log(err);
              }

              fs.unlinkSync(fileName);
              fut.return(data);

          });
      });

      var pdfData = fut.wait();
      var base64String = new Buffer(pdfData).toString('base64');

      return base64String;
  }
}