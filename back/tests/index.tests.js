// server.test.js
import request from 'supertest';
import app from '../server.js'; // Chemin selon ta structure

describe('POST /action', () => {
  test('devrait renvoyer move et action dans la réponse', async () => {
    const payload = {
      move: 'UP',
      action: 'BOMB'
    };

    const response = await request(app)
      .post('/action')
      .send(payload)
      .expect(200);

    expect(response.body).toHaveProperty('move', 'UP');
    expect(response.body).toHaveProperty('action', 'BOMB');

    console.log('Réponse du serveur :', response.body);
  });
});
