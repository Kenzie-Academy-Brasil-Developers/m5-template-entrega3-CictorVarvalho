import { CarServices } from "../../services/car.services";
import { carMock } from "../mocks/car.mock";


describe("Unit test: delete car", () => {
   test("delete car should work correctly", async () => {
      const carServices = new CarServices();

      await carServices.delete(carMock.id);
   });
});