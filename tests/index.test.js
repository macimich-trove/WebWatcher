const {describe, expect, test} = require('@jest/globals');


const express = require('express');
const {app, router} = require('../index');

const request = require('supertest');







test('Sanity check',() => {
expect(1).toBe(1);
});


test('A Routes tree greater than 1 route exists', () => {
let x = 0;
router.stack.forEach(() => { x = x + 1; });
 expect(x).toBeGreaterThan(1);
});


//expect(app._router.stack.forEach).toBeTruthy());

/*test('Tests connectivity to the routes', async () => {
let responseArray = [];
 app._router.stack.forEach(function(middleware) {
responseArray.push(middleware.status)
if (middleware.route){
  request(app)
  .get(middleware.route)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
}

responseArray.forEach((response) => {
expect(response.status).toBe(200);
});


}
*/
