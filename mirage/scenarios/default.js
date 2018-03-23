export default function(server) {

  server.createList('feeds',50);
  server.loadFixtures();

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}
