import { CarServices } from "../../services/car.services";
import { prismaMock } from "../mocks/prisma";
import { carListMock } from "../mocks/car.mock";

import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Unit test: get many cars", () => {
   test("get many cars should work correctly", async () => {
      prismaMock.car.findMany.mockResolvedValue(carListMock);
      const carServices = new CarServices();

      const data = await carServices.getMany();

      expect(data).toHaveLength(carListMock.length);
      carDefaultExpects(data[0], carListMock[0]);
      carDefaultExpects(data[1], carListMock[1]);
   });
});