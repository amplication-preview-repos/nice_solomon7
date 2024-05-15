import { Module } from "@nestjs/common";
import { InstructionModuleBase } from "./base/instruction.module.base";
import { InstructionService } from "./instruction.service";
import { InstructionController } from "./instruction.controller";
import { InstructionResolver } from "./instruction.resolver";

@Module({
  imports: [InstructionModuleBase],
  controllers: [InstructionController],
  providers: [InstructionService, InstructionResolver],
  exports: [InstructionService],
})
export class InstructionModule {}
