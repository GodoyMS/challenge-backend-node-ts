import { validateAccountInput } from "../../helpers/decorators/joi-validation.decorators";
import { IAccountInputMutation } from "../../interfaces/account";
import { accountService } from "../../services/db/account.service";

export const mutations = {
  testAccM: async () => {
    return true;
  },
  AddAccount: async (_: any, { user }: { user: IAccountInputMutation }) => {
    try {
      const { error } = validateAccountInput(user);

      if (error) {
        throw new Error(error.details[0].message);
      }
      const newAccount = accountService.createAccount(user.name, user.email);
      return newAccount;
    } catch (error: any) {
      throw new Error("Failed to add account: " + (error as Error).message);
    }
  },
};
