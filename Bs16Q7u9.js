import{L as e}from"./assets/index-DPSsBdy6.js";function a(r){return e({url:"/api/order",method:"POST",data:r})}function u(r){return e({url:`/api/pay-gateway/${r.payCheck}/${r.orderNo}`,method:"POST",hideError:!0})}function o(){return e({url:"/api/pay"})}function n(r){return e({url:"/api/order",params:r})}function i(r){return e({url:`/api/order/${r}`})}export{o as a,i as b,a as c,n as d,u as g};