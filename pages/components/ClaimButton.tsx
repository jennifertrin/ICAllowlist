import { ConnectWallet, useAddress, useClaimNFT, useContract } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../src/declarations/allowlist/allowlist.did.ts';
import { Principal } from '@dfinity/principal';
import { useEffect, useState } from "react";

const Component = () => {
    const [findAddress, setFindAddress] = useState<boolean>();
    const { contract } = useContract("0xd0297E911E9A625facEB88CF5c2bcc055e1394A9");
    const address = useAddress()
    const {
        mutate: claimNFT,
        isLoading,
        error,
    } = useClaimNFT(contract);

    if (error) {
        console.error("failed to claim nft", error);
    }

    useEffect(() => {
        const handleSearchAddress = async () => {
            try {
                const httpAgent = await new HttpAgent({
                    host: "http://127.0.0.1:4943/",
                });
                const canisterId = await Principal.fromText("bd3sg-teaaa-aaaaa-qaaba-cai").toString();
    
                const actor = await Actor.createActor(idlFactory, {
                    agent: httpAgent,
                    canisterId,
                })
                const findAddress = await actor.queryAddress(address?.toLowerCase())
                if (findAddress != '') setFindAddress(true);
            } catch (error) {
                console.error('Error calling set function:', error);
            }
        };
        if (address) {
            handleSearchAddress();
        }
    }, [address])

    return (
        <div>
            {address && findAddress &&
                <button
                    className={styles.button}
                    disabled={isLoading}
                    onClick={() => claimNFT({ to: address, quantity: 1 })}
                >
                    Claim NFT
                </button>}
            {!address && <div>
                <p>
                    <span>Please connect your wallet to claim this NFT</span>
                </p>
                <div className={styles.connect}>
                    <ConnectWallet
                        dropdownPosition={{
                            side: "bottom",
                            align: "center",
                        }}
                    />
                </div>
            </div>}
            {address && !findAddress && <div>
                <p>
                    <span>You are not eligibile for this claim.</span>
                </p>
            </div>}
        </div>
    );
};

export default Component;