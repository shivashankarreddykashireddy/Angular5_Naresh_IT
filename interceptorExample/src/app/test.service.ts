import { Injectable } from '@angular/core';
import { HttpEvent , 
         HttpRequest, 
         HttpHandler,
         HttpInterceptor} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestService implements HttpInterceptor{

  constructor() { }

  intercept(req:HttpRequest<any>,
            next:HttpHandler):Observable<HttpEvent<any>>{
     console.log("--in intreceptor--");        
        var my_req = req.clone({
            headers:req.headers.set("authorization","dcahskhaskhakhak")
        });
    return next.handle(my_req);
    }
}
