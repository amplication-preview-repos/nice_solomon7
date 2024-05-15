import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstructionService } from "./instruction.service";
import { InstructionControllerBase } from "./base/instruction.controller.base";

@swagger.ApiTags("instructions")
@common.Controller("instructions")
export class InstructionController extends InstructionControllerBase {
  constructor(protected readonly service: InstructionService) {
    super(service);
  }
}
