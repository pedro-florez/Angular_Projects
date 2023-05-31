import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AcortadorInterceptor implements HttpInterceptor {    

    intercept( 
        request: HttpRequest<unknown>, 
        next:    HttpHandler
    ): Observable<HttpEvent<unknown>> {

        const apiToken = '8e5b9c83863be861b5d33f37b4f844bf2033b52a';

        // Clonar la Request
        request = request.clone({
            // Agregar Token a la Petición
            setHeaders: { Authorization: apiToken }
        });

        return next.handle( request );
        
        /*
            * Capturar Errores HTTP Global
            return next.handle( request ).pipe(

                catchError( (err: HttpErrorResponse) => {

                    console.log('error:', err);

                    return throwError( () => new Error( 
                        err.error.description
                    ));
                })
            );
        */
    }
}
