import { Instruction as TInstruction } from "../api/instruction/Instruction";

export const INSTRUCTION_TITLE_FIELD = "id";

export const InstructionTitle = (record: TInstruction): string => {
  return record.id?.toString() || String(record.id);
};
