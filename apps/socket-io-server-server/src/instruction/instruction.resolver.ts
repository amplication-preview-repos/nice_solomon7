import * as graphql from "@nestjs/graphql";
import { InstructionResolverBase } from "./base/instruction.resolver.base";
import { Instruction } from "./base/Instruction";
import { InstructionService } from "./instruction.service";

@graphql.Resolver(() => Instruction)
export class InstructionResolver extends InstructionResolverBase {
  constructor(protected readonly service: InstructionService) {
    super(service);
  }
}
