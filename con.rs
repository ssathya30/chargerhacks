use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, msg,
    program_error::ProgramError, pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    let instruction = instruction_data[0];

    match instruction {
        0 => {
            // Instruction 0: Simulate Donation
            if accounts.len() < 1 {
                return Err(ProgramError::NotEnoughAccountKeys);
            }
            let amount = u64::from_le_bytes(instruction_data[1..9].try_into().unwrap());
            msg!("Test Donation Received: Amount: {} SOL", amount);
        }
        _ => return Err(ProgramError::InvalidInstructionData),
    }

    Ok(())
}
