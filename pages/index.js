import React from "react";
import UnlockWallet from "../components/UnlockWallet";
import { getPublicAddressesFromPrivateKeys } from "../lib/utils";

export default class Wallet extends React.Component {
  state = { privateKeys: null, publicAddresses: null };

  setNewPrivateKeys = (privateKeys) => {
    const publicAddresses = getPublicAddressesFromPrivateKeys(privateKeys);
    this.setState({ privateKeys, publicAddresses });
  };

  render() {
    const { privateKeys, publicAddresses } = this.state;
    return (
      <div>
        <div>privateKeys: {privateKeys ? `not null` : `null`}</div>
        <div>publicAddresses: {publicAddresses ? `not null` : `null`}</div>

        <br />

        <UnlockWallet setNewPrivateKeys={this.setNewPrivateKeys} />
      </div>
    );
  }
}
