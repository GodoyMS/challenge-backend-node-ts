import config from "../../config/app";
import { validateAccountInputQuery } from "../../helpers/decorators/joi-validation.decorators";
import { IAccount, IAccountInputQuery } from "../../interfaces/account";
import Accounts from "../../models/accounts";
import { accountService } from "../../services/db/account.service";

export const queries = {
  testAccQ: async () => {
    const accounts = await Accounts.find({});
    return accounts.length;
  },
  Accounts: async (
    _: any,
    {
      params: { page = config.pagination.page, pageSize = config.pagination.perPage, search },
    }: { params: IAccountInputQuery },
  ): Promise<IAccount[]> => {
    try {
      const { error } = validateAccountInputQuery({ page, pageSize, search });

      if (error) {
        throw new Error(error.details[0].message);
      }
      const result = await accountService.getAccounts(page, pageSize, search);
      return result;
    } catch (error: any) {
      throw new Error("Failed to get accounts: " + (error as Error).message);
    }
  },
  hello: (_: any, { name }: { name: string }) => `Hello ${name}!`,
};
