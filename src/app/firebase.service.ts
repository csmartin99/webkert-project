import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models/user';
import { ServiceOrder } from './models/service-order';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  myUser: User = {
    username: 'user005',
    age: 58,
    hometown: 'Budapest',
    score: 43
  };

  order: ServiceOrder | undefined;

  constructor(private afs: AngularFirestore) {
    this.order = {
      "id": "42",
      "href": "http://serverlocation:port/serviceOrdering/v4/serviceOrder/42",
      "externalId": "BSS747",
      "priority": "1",
      "description": "Service order description",
      "category": "TMF resource illustration",
      "state": "acknowledged",
      "orderDate": "2018-01-12T09:37:40.508Z",
      "completionDate": "",
      "requestedStartDate": "2018-01-15T09:37:40.508Z",
      "requestedCompletionDate": "2018-01-15T09:37:40.508Z",
      "expectedCompletionDate": "2018-01-15T09:37:40.508Z",
      "startDate": "2018-01-12T09:37:40.508Z",
      "type": "ServiceOrder",
      "note": [
      {
      "date": "2018-01-15T09:37:40.508Z",
      "author": "Harvey Poupon",
      "text": "Some text"
      }
      ],
      "relatedParty": [
      {
      "id": "456",
      "href": "http://serverlocation:port/partyManagement/v4/party/456",
      "role": "requester",
      "name": "Jean Pontus",
      "referredType": "Individual"
      }
      ],
      "serviceOrderItem": [
      {
      "id": "1",
      "action": "add",
      "state": "acknowledged",
      "service": {
      "type": "Service",
      "state": "active",
      "serviceType": "CFS",
      "serviceCharacteristic": [
      {
      "id": "452-gh6",
      "name": "vCPE",
      "valueType": "object",
      "value": {
      "@type": "vCPE",
      "@schemaLocation": "http://nbi/api/v4/serviceSpecification/ONAPvCPE_Spec/specificationInputSchema",
      "vCPE_IP": "193.218.236.21",
      "MaxTxRate": 300,
      "TransmitPower": "11 dBm",
      "maxTream": "OFF"
      }
      }
      ],
      "serviceSpecification": {
      "type": "ONAPServiceSpecificationRef",
      "schemaLocation": "http://my.schema/ONAPServiceSpecificationRef.json",
      "id": "ONAPvCPE_Spec",
      "href": "http://../serviceSpecification/ONAPvCPE_Spec",
      "name": "vCPE",
      "version": "1",
      "invariantUUID": "456-852-357",
      "toscaModelURL": "http//..."
      }
      },
      "type": "ServiceOrderItem"
      },
      {
      "id": "2",
      "action": "modify",
      "state": "acknowledged",
      "service": {
      "id": "456",
      "type": "Service",
      "href": "http://serverlocation:port/serviceInventoryManagement/v4/service/456",
      "state": "active",
      "serviceType": "CFS",
      "serviceCharacteristic": [
      {
      "id": "452-gh6",
      "valueType": "string",
      "name": "InputPort",
      "value": "456/7"
      }
      ],
      "supportingResource": [
      {
      "id": "3456_DFG5-H690",
      "href": "http://...",
      "referredType": "CloudResource"
      }
      ]
      },
      "type": "ServiceOrderItem"
      },
      {
      "id": "3",
      "action": "add",
      "state": "acknowledged",
      "service": {
      "state": "active",
      "serviceType": "CFS",
      "type": "Service",
      "serviceRelationship": [
      {
      "relationshipType": "reliesOn",
      "service": {
      "href": "https://.../serviceManagement/v4/service/45",
      "id": "45"
      }
      }
      ],
      "serviceSpecification": {
      "id": "48",
      "href": "http//..../48",
      "name": "genericDataService48",
      "version": "2"
      },
      "feature": [
      {
      "id": "Feat1",
      "isEnabled": true,
      "name": "DataDownload",
      "type": "Feature",
      "featureCharacteristic": [
      {
      "name": "VolumeCapped",
      "id": "444",
      "value": true,
      "valueType": "boolean"
      }
      ]
      }
      ]
      },
      "type": "ServiceOrderItem"
      },
      {
      "id": "4",
      "action": "modify",
      "state": "acknowledged",
      "service": {
      "id": "12",
      "href": "http://serverlocation:port/serviceInventoryManagement/v4/service/12",
      "state": "inactive"
      },
      "type": "ServiceOrderItem"
      }
      ]
     }
   }

  addOrder() {
    return this.afs.collection('ServiceOrders').add(this.order);
  }

  getOrderByPriority() {
    return this.afs.collection<ServiceOrder>('ServiceOrders', ref => ref.orderBy('priority', 'desc')).valueChanges();
    //return this.afs.collection<ServiceOrder>('ServiceOrders', ref => ref.where('startDate', '>=', minAge).orderBy('age', 'desc')).valueChanges();
  }
}
