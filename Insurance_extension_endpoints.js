import http from "k6/http";
import { check } from "k6";

const url = 'https://testing.epionhealth.com'

  export let options = {
     thresholds: {
         http_req_duration: ["p(95)<500"],
     },
     stages: [
        { duration: '30s', target: 1 },  // ramp-up to 50 users in 30 seconds
        { duration: '1m', target: 1 },   // stay at 50 users for 1 minute
        { duration: '30s', target: 0 },   // ramp-down to 0 users in 30 seconds
      ],
 };
 
 function getInsuranceExtensionThreads() {
     let res = http.get(`${url}/insurance_extension/message_threads#index`);
     check(res, {
         "status is 200": (r) => r.status === 200,
         //"response time is less than 500ms": (r) => r.timings.duration < 500,
     });
     console.log(res.status)
 }
 
 function getStepsPrimaryInsurance() {
     let res = http.get(`${url}/steps/primary_insurances/edit#/back`);
     check(res, {
         "status is 200": (r) => r.status === 200,
        // "response time is less than 500ms": (r) => r.timings.duration < 500,
     });
     console.log(res.status)
 }
 
 function getActivationsManual() {
     let res = http.get(`${url}/activations/manual`);
     check(res, {
         "status is 200": (r) => r.status === 200,
        // "response time is less than 500ms": (r) => r.timings.duration < 500,
     });
     console.log(res.status)
 }

 function getInsuranceSso() {
    let res = http.get(`${url}/insurance_extension/sso`);
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getStepsCompleted() {
    let res = http.get(`${url}/steps/completed`);
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}
function getPrevisitSessionNew() {
    let res = http.get(`${url}/previsit/session/new`);
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getAllergies() {
    let res = http.get(`${url}/athena_allergies#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getMedications() {
    let res = http.get(`${url}/athena_medications#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionError() {
    let res = http.get(`${url}/insurance_extension/error#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionUploads() {
    let res = http.get(`${url}/insurance_extension/insurance_uploads#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}
function getInsuranceExtensionMaintenance() {
    let res = http.get(`${url}/insurance_extension/maintenance#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionMessages() {
    let res = http.get(`${url}/insurance_extension/messages#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionPatientRegistrations() {
    let res = http.get(`${url}/insurance_extension/patient_registrations#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionArrivalManagementStatus() {
    let res = http.get(`${url}/insurance_extension/arrival_management_status#index`)
    check(res, {
        "status is 200": (r) => r.status === 200,
       // "response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
}

function getInsuranceExtensionPrevisits(){
    let res = http.get(`${url}/insurance_extension/previsits#index`)
    check(res, {
        'status is 200':(r)=> r.status === 200
    })
}

function getInsuranceExtensionTelehealth(){
    let res = http.get(`${url}/insurance_extension/telehealths#index`)
    check(res, {
        'status is 200':(r)=> r.status === 200
    })
}

 function postCheckinActivationsManual(){
    let res = http.post('https://check-in.epionhealth.com/activations/manual');
    check(res, {
        "status is 422": (r) => r.status === 422,
        // "response time is less than 500ms": (r) => r.timings.duration < 500,
       
    });
    console.log(res.status)
 }
 
 export default function() {
  getInsuranceExtensionThreads();
  getStepsPrimaryInsurance();
  getActivationsManual();
  getInsuranceSso();
  getStepsCompleted();
  getPrevisitSessionNew();
  postCheckinActivationsManual();
  getAllergies();
  getMedications();
  getInsuranceExtensionError();
  getInsuranceExtensionUploads();
  getInsuranceExtensionMaintenance();
  getInsuranceExtensionMessages();
  getInsuranceExtensionPatientRegistrations();
  getInsuranceExtensionArrivalManagementStatus();
  getInsuranceExtensionPrevisits();
  getInsuranceExtensionTelehealth();
  

 }