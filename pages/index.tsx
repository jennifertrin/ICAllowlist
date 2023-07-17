import { ConnectWallet, useContract, useNFT, ThirdwebNftMedia, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import ClaimButton from "./components/ClaimButton";

const Home: NextPage = () => {
  const { data: contract } = useContract("0xd0297E911E9A625facEB88CF5c2bcc055e1394A9");

  const { data: nft } = useNFT(contract, "0");

  const address = useAddress()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                thirdweb
              </a>
              <span className={styles.header}>
                {" "}
                and the
                {" "}
              </span>
              <a
                href="https://internetcomputer.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internet Computer.
              </a>
            </span>
          </h1>

          {address ? <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div> : null}
        </div>

        <div>
          {nft && (
            <>
              <ThirdwebNftMedia metadata={nft.metadata} style={{ maxWidth: 240 }} />
              <p>
                <span>Name:</span> {nft?.metadata.name}
              </p>
            </>
          )}
          <ClaimButton />
        </div>
      </div>
    </main>
  );
};

export default Home;
