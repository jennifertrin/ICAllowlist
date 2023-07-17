import { ConnectWallet, useAddress, useClaimNFT, useContract } from "@thirdweb-dev/react";
import styles from "../../styles/Home.module.css";

const Component = () => {
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

    return (
        <div>
            {address ?
                <button
                    className={styles.button}
                    disabled={isLoading}
                    onClick={() => claimNFT({ to: address, quantity: 1 })}
                >
                    Claim NFT
                </button> :
                <div>
                    <span>Please connect your wallet to claim this NFT</span>
                    <div className={styles.connect}>
                        <ConnectWallet
                            dropdownPosition={{
                                side: "bottom",
                                align: "center",
                            }}
                        />
                    </div>
                </div>}
        </div>
    );
};

export default Component;