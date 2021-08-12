import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { init } from "onfido-sdk-ui";
import { OnfidoService } from "./../onfido.service";

@Component({
  selector: 'app-onfido',
  templateUrl: './onfido.component.html',
  styleUrls: ['./onfido.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OnfidoComponent implements OnInit {
  onfido: any;

  constructor(private onfidoService: OnfidoService) {}

  ngOnInit() {
    this.onfidoService.getToken().subscribe(token => {
      this.onfido = init({
        token: token,
        smsNumberCountryCode: "CA",
        language: {
          locale: "en_US",
          phrases: {
            "DOCUMENT_SELECTOR.IDENTITY.NATIONAL_IDENTITY_CARD_HINT":
              "Hello Tim"
          },
          mobilePhrases: {
            national_identity_card: "My Identity Card Mobile",
            "capture.driving_licence.instructions": "Hello Harshil"
          }
        },
        steps: [
          {
            type: "document",
            options: {
              documentTypes: {
                passport: true,
                driving_licence: true,
                national_identity_card: true
              },
              forceCrossDevice: true,
              useLiveDocumentCapture: true
            }
          },
          {
            type: "face",
            options: {
              uploadFallback: false,
              requestedVariant: "video"
            }
          }
        ],

        onComplete: data => {
          // callback for when everything is complete
          console.log("everything is complete", data);
        }
      });
    });
  }

}
