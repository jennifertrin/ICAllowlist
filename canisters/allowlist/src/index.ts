import { $query } from 'azle';

interface AddressMap {
    [address: string]: string;
  }
  
const addressMap: AddressMap = {
    "0xeab5d184616ff329722d6fe5245ad5cf2e2cbd34": "Jennifer",
  };
  
$query
export function queryAddress(address: string): string {
  if (addressMap && address.toLowerCase() in addressMap) {
    return addressMap[address].toString();
  } else {
    return "";
  }
}


  