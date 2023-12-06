import Accounts from "../../models/accounts";
import { IAccount } from "../../interfaces/account";

class AccountService {
  public async createAccount(name: string, email: string): Promise<IAccount> {
    // Finding the Acc by ID
    const newAccount = new Accounts({ name, email });
    const savedAccount = await newAccount.save();
    return savedAccount;
  }

  public async getAccounts(page: number, pageSize: number, search?: string): Promise<IAccount[]> {
    const skip = (page - 1) * pageSize;
    const pipeline = [
      {
        $match: {
          $or: [{ name: { $regex: search, $options: "i" } }, { email: { $regex: search, $options: "i" } }],
        },
      },
      { $skip: skip },
      { $limit: pageSize },
    ];
    const clients = await Accounts.aggregate<Document & IAccount>(pipeline);
    const result: IAccount[] = clients.map(client => ({
      _id: client?._id?.toString(),
      name: client.name,
      email: client.email,
      createdAt: client?.createdAt,
      updatedAt: client?.updatedAt,
    }));
    return result;
  }
}

export const accountService: AccountService = new AccountService();
