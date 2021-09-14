import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import moment from 'moment';
import {Reservation} from '../../../../core/services/reservation/reservations.service';
import {AuthService} from '../../../../core/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {ParamMap, Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ReservationsService} from '../../../../core/services/reservation/reservations.service';
import {switchMap} from 'rxjs/operators';
import {any} from 'codelyzer/util/function';
import {NgxSpinnerService} from 'ngx-spinner';
// @ts-ignore
import {IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';



// @ts-ignore
@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.scss']
})
export class ApplyFormComponent implements OnInit {
  public  payPalConfig?: IPayPalConfig;

  constructor(
    public authService: AuthService,
    private http: HttpClient,
    public router: Router,
    public reservationservice: ReservationsService,
    public currentRoute: ActivatedRoute,
    public spinner: NgxSpinnerService
  ) {

  }

  applyForm: FormGroup;
  @Input() habitatid: any;

  serverErrors: any;
  validationErrors: any;
  habitatIndisponible = false;
  dateIndisponibleFrom: any;
  dateIndisponibleTo: any;
  formData = new  FormData();
  montantTotal: any;
  nombreTotalDeNuit: any;
  id: any;
  successMessage: any;
  canMakePayment = false;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment(new Date()).format('YYYY-MM-DD');

  maxDate = '2021-09-08';

    submitted = false;
    ngOnInit(): void {
    this.initConfig();
    // @ts-ignore
    this.applyForm = new FormGroup({
      dateArrivee: new FormControl(null, [Validators.required,
                                                              Validators.min(moment(new Date()).millisecond())]),
      dateDepart: new FormControl(null, Validators.required),
      nbrOccupant: new FormControl(1, [Validators.required, Validators.min(1)])
    });
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => < ICreateOrderRequest > {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: this.montantTotal,
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: this.montantTotal
                }
              }
            },
          }
        ]
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        this.reservationservice.makePayement(this.id).subscribe(
          (successData) => {
            this.successMessage = successData?.success;
            this.canMakePayment = false;
            this.applyForm.reset();
          },
          (response) => {
            this.serverErrors = response?.errors?.error;
          }
        );
      },
      onCancel: (data, actions) => {
       this.reservationservice.autoCancelReservation(this.id).subscribe(
         (successData) => {
           this.successMessage = successData?.success;
           this.canMakePayment = false;
           this.applyForm.reset();
         },
         (response) => {
           this.serverErrors = response?.errors?.error;
         }
       );

      },
      onError: err => {
        this.serverErrors = err;
      },
    };
  }

  // tslint:disable-next-line:typedef
  onSubmitApply(): void{
    this.spinner.show();

    this.reservationservice.addReservation(this.applyForm.value, this.habitatid).subscribe(
      (successData) => {

        this.montantTotal =  successData.montantTotal;
        this.nombreTotalDeNuit =  successData.nombreTotalDeNuit;
        this.id = successData.id;
        this.canMakePayment = true;
      },
    (response) => {
      // tslint:disable-next-line:typedef
        setTimeout(() => { this.spinner.hide(); }, 500);
        this.serverErrors = response.error?.error;
        this.validationErrors = response.error?.validationErrors;
        if ( response.error.habitatIndisponible ){
          this.habitatIndisponible = true;
          this.dateIndisponibleFrom = new Date(response.error.habitatIndisponible.dateArrivee);
          this.dateIndisponibleTo = new Date(response.error.habitatIndisponible.dateDepart);
        }
      },

      () => {
        setTimeout(() => { this.spinner.hide(); }, 500);
      }
    );
  }
}

