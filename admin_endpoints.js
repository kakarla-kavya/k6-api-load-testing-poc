import http, { get } from "k6/http";
import { check } from "k6";

const url = 'https://testing.epionhealth.com'

  export let options = {
     thresholds: {
         http_req_duration: ["p(95)<500"],
     },
    //  stages: [
    //     { duration: '30s', target: 1 },  // ramp-up to 50 users in 30 seconds
    //     { duration: '1m', target: 1 },   // stay at 50 users for 1 minute
    //     { duration: '30s', target: 0 },   // ramp-down to 0 users in 30 seconds
    //   ],
 };

  function getAdminDashboard() {
      let res = http.get(`${url}/admin/dashboard#index`);
      check(res, {
          "status is 200": (r) => r.status === 200,
          //"response time is less than 500ms": (r) => r.timings.duration < 500,
      });
      console.log(res.status)
  }

  function getAdminAgreementTemplates() {
    let res = http.get(`${url}/admin/agreement_templates#index`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }

   function getAdminAllOffices() {
    let res = http.get(`${url}/admin/all_offices#index`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }

   function getAdminArrivalManagementConfiguration() {
    let res = http.get(`${url}/admin/practices/:practice_id/arrival_management_configuration#index`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }

   function getAdminApiErrors() {
    let res = http.get(`${url}/admin/athena_api_errors`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }

   function getAdminAthenaSlowRequests() {
    let res = http.get(`${url}/admin/athena_slow_requests#index`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }
   
   function getAdminCheckins() {
    let res = http.get(`${url}/admin/check_ins#index`);
    check(res, {
        "status is 200": (r) => r.status === 200,
        //"response time is less than 500ms": (r) => r.timings.duration < 500,
    });
    console.log(res.status)
   }

  export default function(){
    getAdminDashboard()
    getAdminAgreementTemplates()
    getAdminAllOffices()
    getAdminApiErrors()
    getAdminArrivalManagementConfiguration()
    getAdminAthenaSlowRequests()
    getAdminCheckins()
  }