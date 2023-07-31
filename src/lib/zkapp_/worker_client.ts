import { UInt64, fetchAccount } from "snarkyjs";
import type {
  ZkappWorkerRequest,
  ZkappWorkerReponse,
  WorkerFunctions,
} from "./worker";

export default class ZkappWorkerClient {
  loadContract(args: any = {}) {
    return this._call("loadContract", args);
  }

  compileContract(args: any = {}) {
    return this._call("compileContract", args);
  }

  setActiveInstanceToBerkeley() {
    return this._call("setActiveInstanceToBerkeley", {});
  }

  setActiveInstanceToLocal(args: any = {}) {
    return this._call("setActiveInstanceToLocal", args);
  }

  prepareTestAccounts(args: any = {}) {
    return this._call("prepareTestAccounts", args);
  }

  generateTokenIds(args: any = {}) {
    return this._call("generateTokenIds", args);
  }

  setAccountFee(args: any = {}) {
    return this._call("setAccountFee", args);
  }

  initZkappInstance(args: any = {}) {
    return this._call("initZkappInstance", args);
  }

  deplyTokenContracts(args: any = {}) {
    return this._call("deplyTokenContracts", args);
  }

  deplyPoolContracts(args: any = {}) {
    return this._call("deplyPoolContracts", args);
  }

  transferTokensToUser(args: any = {}) {
    return this._call("transferTokensToUser", args);
  }

  supplyInitialLiquidityToPool(args: any = {}) {
    return this._call("supplyInitialLiquidityToPool", args);
  }

  setupZkappInstance(args: any = {}) {
    return this._call("setupZkappInstance", args);
  }

  setupZkappInstanceLocal(args: any = {}) {
    return this._call("setupZkappInstanceLocal", args);
  }

  async getBalance(publicKey58: string): Promise<UInt64> {
    const result = await this._call("getBalance", { publicKey58 });
    return UInt64.fromJSON(JSON.parse(result as string));
  }

  getBalances(args: any = {}) {
    return this._call("getBalances", args);
  }

  getPair(args: any = {}) {
    return this._call("getPair", args);
  }

  fetchAccount(publicKey58: string): ReturnType<typeof fetchAccount> {
    const result = this._call("fetchAccount", { publicKey58 });
    return result as ReturnType<typeof fetchAccount>;
  }

  worker: Worker;

  promises: {
    [id: number]: { resolve: (res: any) => void; reject: (err: any) => void };
  };

  nextId: number;

  constructor() {
    this.worker = new Worker(new URL("./worker.ts", import.meta.url), {
      type: "module",
    });
    this.promises = {};
    this.nextId = 0;

    this.worker.onmessage = (event: MessageEvent<ZkappWorkerReponse>) => {
      this.promises[event.data.id].resolve(event.data.data);
      delete this.promises[event.data.id];
    };
  }

  _call(fn: WorkerFunctions, args: any) {
    return new Promise((resolve, reject) => {
      const message: ZkappWorkerRequest = { id: this.nextId, fn, args };

      this.promises[this.nextId] = { resolve, reject };
      this.worker.postMessage(message);
      this.nextId++;
    });
  }
}
